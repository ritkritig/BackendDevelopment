const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoURL = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(mongoURL);
let tasksCollection;

async function connectDB() {
    try {
        await client.connect();
        const database = client.db("todo_lab");
        tasksCollection = database.collection("tasks");
        console.log("Connected to Local MongoDB");
    } catch (error) {
        console.error("Local MongoDB connection error:", error);
    }
}
connectDB();

// 1. Display Eisenhower Matrix
app.get("/", async (req, res) => {
    try {
        const tasks = await tasksCollection.find().toArray();
        
        const matrix = {
            doTasks: tasks.filter(t => t.isUrgent && t.isImportant),
            scheduleTasks: tasks.filter(t => !t.isUrgent && t.isImportant),
            delegateTasks: tasks.filter(t => t.isUrgent && !t.isImportant),
            eliminateTasks: tasks.filter(t => !t.isUrgent && !t.isImportant)
        };

        res.render("index", { matrix });
    } catch (error) {
        res.status(500).send("Error fetching tasks");
    }
});

// 2. Render Add Task Form
app.get("/tasks/new", (req, res) => {
    res.render("new");
});

// 3. Add a New Task
app.post("/tasks", async (req, res) => {
    const { title, description, isUrgent, isImportant } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).send("Title is required.");
    }

    try {
        await tasksCollection.insertOne({
            title: title.trim(),
            description: description.trim(),
            isUrgent: !!isUrgent,
            isImportant: !!isImportant,
            isCompleted: false, // Default newly created tasks to not completed
            createdAt: new Date()
        });
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error adding task");
    }
});

// 4. Mark Task as Completed
app.post("/tasks/:id/complete", async (req, res) => {
    try {
        await tasksCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { isCompleted: true } }
        );
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error completing task");
    }
});

// 5. Redo Task (Reset to active)
app.post("/tasks/:id/redo", async (req, res) => {
    try {
        await tasksCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { isCompleted: false } }
        );
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error resetting task");
    }
});

// 6. Delete a Task
app.post("/tasks/:id/delete", async (req, res) => {
    try {
        await tasksCollection.deleteOne({
            _id: new ObjectId(req.params.id)
        });
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error deleting task");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
# Backend Development Lab

A collection of hands-on experiments and practical implementations completed as part of the **Backend Development Lab**.

This folder documents the practical progression from **web fundamentals and modern JavaScript** to **server-side development, templating, state management, database integration, Django applications, APIs, and full-stack backend projects**.

---

## 📌 About the Lab

The Backend Development Lab focuses on learning backend concepts through practical implementation.

Rather than working with a single framework, the experiments explore different parts of backend development using technologies such as **Node.js, Express.js, EJS, MongoDB, Mongoose, Django, SQLite, HTML5, CSS3, and JavaScript**.

The experiments gradually move from client-side web fundamentals to complete server-side applications with routing, databases, sessions, APIs, and persistent data.

---

## 🧪 Experiments

| Experiment | Topic | Key Concepts / Technologies |
|---|---|---|
| **Experiment 1** | HTML5 Web Page | Semantic HTML, forms, tables, multimedia, accessibility |
| **Experiment 7 & 8** | JavaScript Todo Application | ES6, classes, DOM, event handling, array methods |
| **Experiment 12** | Node.js & Express | Routing, HTTP methods, parameters, JSON, EJS |
| **Experiment 12B** | Cookies & Sessions | Express Session, Cookie Parser, state management |
| **Experiment 13** | MongoDB & Mongoose | NoSQL, schemas, models, database operations |
| **Experiment 15** | Django Todo Application | Django, models, views, templates, SQLite |
| **Experiment 15B** | Extended Django Practice | Django apps, API handling, external data |
| **Exam 01B** | Eisenhower Matrix Todo App | Express, EJS, MongoDB, SSR, CRUD |

---

# 🔹 Experiment 1 — HTML5 Web Page

The first experiment establishes the web foundation required for backend development by creating a comprehensive **HTML5 webpage**.

### Concepts Covered

- HTML5 document structure
- Semantic elements
- Headers, navigation and sections
- Text formatting
- Ordered, unordered and description lists
- Tables
- HTML5 forms
- Advanced input types
- Images and responsive media
- Audio and video
- Progress and meter elements
- `details` and `summary`
- `datalist`
- Dialog boxes
- Basic JavaScript interaction
- Accessibility and SEO-friendly structure

The experiment demonstrates how structured frontend data and forms can later interact with backend servers.

---

# 🔹 Experiment 7 & 8 — ES6 Todo Application

A browser-based **Todo application** developed using modern JavaScript concepts.

### Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Dynamically render task lists
- Add tasks using the Enter key

### JavaScript Concepts Practiced

- ES6 classes
- Arrow functions
- Template/data objects
- Spread operator
- Destructuring
- `map()`
- `filter()`
- `forEach()`
- DOM manipulation
- Event listeners
- Event delegation

A `Task` class is used to represent individual tasks with an ID, title, and completion state.

---

# 🔹 Experiment 12 — Node.js, Express & EJS

This experiment introduces **server-side development using Node.js and Express.js**.

It demonstrates how an Express server handles different HTTP requests and returns different response formats.

### Concepts Covered

- Express server creation
- Routing
- GET and POST requests
- Plain-text responses
- HTML responses
- JSON responses
- Route parameters
- Query parameters
- Request body processing
- Basic authentication flow
- HTTP status codes
- Dynamic server-side rendering
- EJS templates

### Example Routes

```text
GET  /
GET  /text
GET  /html
GET  /json

GET  /user/:id
GET  /search
GET  /calculate

POST /register
POST /login

GET  /home
GET  /users
GET  /profile/:id
```

### EJS Templating

Dynamic pages are rendered through EJS templates including:

```text
home.ejs
users.ejs
profile.ejs
```

This experiment connects Express routing with dynamic HTML generation.

---

# 🔹 Experiment 12B — Cookies & Sessions

Experiment 12B explores **state management in web applications**.

HTTP itself is stateless, so cookies and sessions are used to maintain information between multiple requests.

### Technologies

- Node.js
- Express.js
- `express-session`
- `cookie-parser`

### Concepts Practiced

- Creating cookies
- Reading cookies
- Managing cookie expiration
- Creating sessions
- Storing session data
- Accessing session information
- Login sessions
- Logout functionality
- Session destruction

This experiment demonstrates how web applications can remember users across multiple HTTP requests.

---

# 🔹 Experiment 13 — MongoDB & Mongoose

This experiment introduces **database-backed backend development using MongoDB and Mongoose**.

A User Management application connects an Express server to MongoDB.

### Functionality

- Register users
- Store user information
- Find users
- Authenticate login details
- Display registered users
- Handle duplicate records
- Perform database operations asynchronously

### Concepts Covered

- MongoDB
- NoSQL databases
- Mongoose
- Database connections
- Schemas
- Models
- Documents
- CRUD-style operations
- `async/await`
- Error handling
- Unique fields
- Database queries

The experiment demonstrates how persistent data replaces temporary in-memory application data.

---

# 🔹 Experiment 15 — Django Todo Application

A complete **Todo application built using Django**.

The application stores tasks in an SQLite database and uses Django's Model–View–Template architecture to manage the application.

### Task Model

Each task contains:

```text
title
completed
created_at
```

### Features

- View all tasks
- Add a task
- Mark a task as complete/incomplete
- Delete a task
- Persist tasks using SQLite

### Django Concepts Practiced

- Django projects
- Django applications
- Models
- Views
- URL routing
- Templates
- ORM
- Database migrations
- Form processing
- Redirects
- SQLite

### Main Operations

```text
Task List
   ↓
Add Task
   ↓
Save to Database
   ↓
Toggle Completion
   ↓
Delete Task
```

This experiment demonstrates a complete database-backed web application using Django.

---

# 🔹 Experiment 15B — Extended Django Practice

Experiment 15B expands the Django work through multiple applications and additional backend concepts.

The implementation contains Django applications such as:

```text
todo
tasks
student_api
```

### Concepts Explored

- Multiple Django apps
- URL organization
- Views
- Models
- Utility modules
- JSON responses
- API endpoints
- External data retrieval
- Error handling
- SQLite database integration

The `student_api` implementation also demonstrates returning external data through a Django `JsonResponse` and handling failed external requests.

The folder additionally contains Django experimentation using a `uv`-managed Python project environment.

---

# 🧩 Lab Examination Project — Eisenhower Matrix Todo Application

One of the most complete projects in the lab is the **Eisenhower Matrix Todo Application**, developed for the Backend Development Lab Examination.

It is a server-side rendered task-management application built using:

**Node.js + Express.js + EJS + MongoDB**

---

## Eisenhower Matrix

Tasks are automatically organized according to their **urgency** and **importance**.

| Quadrant | Urgent | Important | Purpose |
|---|---:|---:|---|
| **Do** | ✅ | ✅ | Complete immediately |
| **Schedule** | ❌ | ✅ | Plan for later |
| **Delegate** | ✅ | ❌ | Assign or delegate |
| **Eliminate** | ❌ | ❌ | Remove unnecessary tasks |

---

## Application Features

The application supports:

- Creating tasks
- Adding task descriptions
- Selecting urgency
- Selecting importance
- Automatic quadrant classification
- Marking tasks complete
- Redoing completed tasks
- Deleting tasks
- Persistent MongoDB storage
- Server-side rendered interfaces

The dashboard displays tasks using a **2 × 2 Eisenhower Matrix layout**.

---

## Architecture

```text
             Browser
                │
                ▼
          Express Server
                │
       ┌────────┴────────┐
       ▼                 ▼
  Express Routes      EJS Views
       │                 │
       ▼                 ▼
 Business Logic      HTML Response
       │
       ▼
    MongoDB
       │
       ▼
 Persistent Tasks
```

The project combines routing, server-side rendering, database operations, form processing, and task-management logic into a single backend application.

---

# 📁 Repository Structure

```text
Backend Lab/
│
├── Experiment1/
│   ├── index.html
│   └── README.md
│
├── Experiment7,8/
│   ├── index.html
│   └── app.js
│
├── Experiment12/
│   └── nodejs-express-lab/
│       ├── app.js
│       ├── package.json
│       └── views/
│           ├── home.ejs
│           ├── users.ejs
│           └── profile.ejs
│
├── Experiment12B/
│   ├── session-cookie-demo/
│   │   └── server.js
│   └── source/
│       ├── cookie-example.js
│       └── session-example.js
│
├── Experiment13/
│   └── mongoose-demo/
│       ├── server.js
│       └── package.json
│
├── Experiment15/
│   └── django_todo_app/
│       ├── manage.py
│       ├── db.sqlite3
│       ├── todo/
│       └── todo_project/
│
├── Experiment15B/
│   ├── django todo app/
│   │   ├── todo/
│   │   ├── tasks/
│   │   ├── student_api/
│   │   └── todo_project/
│   └── uv exp/
│
├── Exam01B/
│   ├── app.js
│   ├── package.json
│   ├── public/
│   │   └── style.css
│   ├── views/
│   │   ├── index.ejs
│   │   └── new.ejs
│   └── README.md
│
└── README.md
```

---

# 🛠️ Technology Stack

### Languages

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3.x-blue?logo=python&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Web_Framework-black?logo=express&logoColor=white)
![Django](https://img.shields.io/badge/Django-Web_Framework-darkgreen?logo=django&logoColor=white)

### Database

![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-green?logo=mongodb&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Database-blue?logo=sqlite&logoColor=white)

### Other Tools & Libraries

- EJS
- Mongoose
- Express Session
- Cookie Parser
- Django ORM
- npm
- Git & GitHub

---

# 🧠 Core Backend Concepts Practiced

Across these experiments, the lab covers:

- Web application fundamentals
- Modern JavaScript / ES6
- Client–server architecture
- Node.js runtime
- Express server development
- HTTP methods
- Routing
- Route and query parameters
- Request and response handling
- Form processing
- JSON APIs
- Server-side rendering
- EJS templates
- Cookies
- Sessions
- State management
- Authentication basics
- NoSQL databases
- MongoDB
- Mongoose ODM
- Database persistence
- Django architecture
- Django ORM
- SQLite
- URL routing
- External API handling
- CRUD operations
- Asynchronous programming
- Error handling

---

# 📈 Learning Progression

```text
HTML5 & Web Fundamentals
          │
          ▼
Modern JavaScript / ES6
          │
          ▼
Node.js & Express
          │
          ▼
Routing & HTTP
          │
          ▼
EJS Server-Side Rendering
          │
          ▼
Cookies & Sessions
          │
          ▼
MongoDB & Mongoose
          │
          ▼
Database-Backed Applications
          │
          ▼
Django & SQLite
          │
          ▼
APIs & External Data
          │
          ▼
Full Backend Applications
```

---

# ▶️ Running the Projects

Because the lab contains projects built using different technologies, setup depends on the experiment.

### Node.js / Express Projects

Navigate to the required project directory:

```bash
npm install
node app.js
```

For projects using `server.js`:

```bash
npm install
node server.js
```

Then open:

```text
http://localhost:3000
```

### Django Projects

Navigate to the directory containing `manage.py` and run:

```bash
python manage.py migrate
python manage.py runserver
```

Then open:

```text
http://127.0.0.1:8000/
```

> Some experiments may require additional setup such as a running MongoDB instance or experiment-specific dependencies.

---

# 🎯 Learning Outcomes

Through these experiments, the lab develops practical understanding of how modern web applications evolve from simple webpages into complete backend systems.

The implementations demonstrate how to:

- Build and structure web applications
- Develop servers using Node.js and Express
- Process HTTP requests and form data
- Create dynamic server-rendered interfaces
- Maintain user state using cookies and sessions
- Connect applications to databases
- Work with MongoDB through Mongoose
- Build database-driven applications using Django
- Implement CRUD operations
- Organize applications using routes, models, views, and templates
- Handle APIs and external data
- Combine backend technologies into complete working applications

---

## 📖 Course

**Backend Development Lab**  
Practical implementations covering web development, server-side programming, databases, APIs, state management, and backend frameworks.

---

## 👩‍💻 Author

**Ritkriti Goyal**

This repository represents hands-on coursework and experimentation carried out while learning and applying backend development concepts.

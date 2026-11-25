# 📝 Experiment 15 — Django Todo Application

A database-driven **Todo List web application built using Django and SQLite** as part of the Backend Development Lab.

The application demonstrates the fundamental architecture of a Django project by allowing users to **create, view, update, complete, and delete tasks** while storing them persistently in a database using the **Django ORM**.

---

## 📌 Experiment

**Experiment 15: Web Application Development using Django**

### Technology Stack

![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-Web_Framework-092E20?logo=django&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?logo=sqlite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Templates-E34F26?logo=html5&logoColor=white)

---

# 🎯 Objective

The objective of this experiment is to understand how a complete database-backed web application can be developed using the **Django framework**.

The experiment focuses on:

- Creating a Django project
- Creating and configuring a Django application
- Understanding Django's project structure
- Defining database models
- Using Django ORM
- Creating and applying migrations
- Implementing views
- Configuring URL routing
- Processing user input
- Rendering HTML templates
- Adding and managing Todo tasks
- Updating task completion status
- Deleting tasks
- Using SQLite for persistent storage

---

# 💡 Project Overview

The **Django Todo Application** is a simple task-management system where users can maintain a list of tasks.

The application allows a user to:

- ➕ Add a new task
- 📋 View existing tasks
- ✅ Mark a task as completed
- 🔄 Change the completion state of a task
- 🗑️ Delete a task
- 💾 Store tasks persistently in SQLite

Unlike an in-memory Todo application, tasks remain available because they are stored in the database.

---

# 🏗️ Django Architecture

The project follows Django's structured approach to web application development.

```text
                  USER
                    │
                    ▼
                 Browser
                    │
              HTTP Request
                    │
                    ▼
             ┌────────────┐
             │  urls.py   │
             │ URL Router │
             └─────┬──────┘
                   │
                   ▼
             ┌────────────┐
             │  views.py  │
             │ Application│
             │   Logic    │
             └─────┬──────┘
                   │
          ┌────────┴─────────┐
          ▼                  ▼
     models.py            Template
          │                  │
          ▼                  ▼
     Django ORM          HTML Page
          │                  │
          ▼                  │
       SQLite                │
          │                  │
          └────────┬─────────┘
                   ▼
              HTTP Response
                   │
                   ▼
                Browser
```

---

# 📦 Django Project & Application

The project is organized into a Django **project** and a separate Django **application**.

```text
django_todo_app/
│
├── manage.py
├── db.sqlite3
│
├── todo_project/
│
└── todo/
```

### `todo_project`

Contains the configuration for the overall Django project.

### `todo`

Contains the actual Todo application functionality, including:

- Models
- Views
- URLs
- Templates
- Application configuration

---

# 🗃️ Task Model

The application uses a Django model to represent Todo tasks.

Each task contains information such as:

```text
Task
│
├── title
├── completed
└── created_at
```

Conceptually, the model is similar to:

```python
class Task(models.Model):
    title = models.CharField(...)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(...)
```

Django converts the model definition into a corresponding database table.

---

# 🔄 Django ORM

The application uses the **Django Object-Relational Mapper (ORM)** to communicate with SQLite.

Instead of manually writing SQL such as:

```sql
SELECT * FROM tasks;
```

Django allows database operations through Python objects.

For example:

```python
Task.objects.all()
```

The ORM acts as an abstraction layer:

```text
Python Code
     │
     ▼
Django Model
     │
     ▼
Django ORM
     │
     ▼
SQL Query
     │
     ▼
SQLite Database
```

---

# ➕ Adding a Task

Users can enter a task through the Todo interface.

The request is processed by a Django view, which creates a new Task object and stores it in SQLite.

```text
Enter Task
    │
    ▼
Submit Form
    │
    ▼
Django View
    │
    ▼
Create Task Object
    │
    ▼
Django ORM
    │
    ▼
SQLite Database
    │
    ▼
Redirect to Todo List
```

---

# 📋 Displaying Tasks

Stored tasks are retrieved from the database through the Django ORM.

```text
SQLite
   │
   ▼
Django ORM
   │
   ▼
Task Objects
   │
   ▼
Django View
   │
   ▼
HTML Template
   │
   ▼
Todo List
```

The view passes the retrieved tasks to the template so that they can be dynamically displayed.

---

# ✅ Task Completion

The application allows the completion state of a task to be changed.

A task can therefore move between:

```text
Incomplete
    │
    ▼
 Completed
```

The corresponding value stored in the database is updated through the Django ORM.

Conceptually:

```text
completed = False
        ↓
completed = True
```

This demonstrates how existing database records can be modified through a Django application.

---

# 🗑️ Deleting Tasks

Tasks that are no longer required can be removed.

```text
Select Task
     │
     ▼
Delete Request
     │
     ▼
Django View
     │
     ▼
Find Task
     │
     ▼
Delete Through ORM
     │
     ▼
SQLite Updated
     │
     ▼
Redirect to Task List
```

---

# 🔁 CRUD Operations

The application demonstrates the major database operations required by a backend application.

| Operation | Implementation |
|---|---|
| **Create** | Add a new Todo task |
| **Read** | Display stored tasks |
| **Update** | Change task completion status |
| **Delete** | Remove a task |

```text
            TODO APPLICATION
                   │
        ┌──────────┼──────────┐
        │          │          │
        ▼          ▼          ▼
      Create      Read      Update
        │          │          │
        └──────────┼──────────┘
                   │
                   ▼
                 Delete
                   │
                   ▼
              Django ORM
                   │
                   ▼
                 SQLite
```

---

# 🛣️ URL Routing

Django uses URL configuration to map browser requests to the appropriate view.

The basic flow is:

```text
Browser Request
      │
      ▼
Project urls.py
      │
      ▼
Application urls.py
      │
      ▼
Matching View
      │
      ▼
Response
```

This keeps routing separate from application logic and makes the project easier to organize.

---

# 👁️ Django Views

Views contain the application's request-processing logic.

A view can:

- Receive an HTTP request
- Retrieve data from the database
- Process submitted form data
- Create database records
- Update existing records
- Delete records
- Render a template
- Redirect the user

Views therefore connect the **URL layer, database layer, and presentation layer**.

---

# 🎨 Django Templates

The Todo interface is generated using Django templates.

Templates allow Python-side data to be inserted dynamically into HTML.

Conceptually:

```html
{% for task in tasks %}

    {{ task.title }}

{% endfor %}
```

This means the HTML does not need to contain hard-coded Todo items.

Instead:

```text
Database
    ↓
View
    ↓
Template Context
    ↓
Django Template
    ↓
Dynamic HTML
```

---

# 💾 SQLite Database

The application uses **SQLite** as its database.

```text
db.sqlite3
```

SQLite is particularly suitable for small Django applications and development because it:

- Requires no separate database server
- Stores the database in a single file
- Integrates directly with Django
- Supports relational database operations

---

# 🔄 Database Migrations

Django migrations are used to synchronize Python model definitions with the database schema.

After creating or modifying models:

```bash
python manage.py makemigrations
```

This generates migration files.

The migrations are applied using:

```bash
python manage.py migrate
```

### Migration Flow

```text
models.py
    │
    ▼
makemigrations
    │
    ▼
Migration File
    │
    ▼
migrate
    │
    ▼
SQLite Database
```

---

# 📁 Project Structure

```text
django_todo_app/
│
├── manage.py
├── db.sqlite3
│
├── todo_project/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── todo/
│   ├── migrations/
│   ├── templates/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
│
├── Images/
│   └── screenshot.png
│
└── README.md
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Python** | Backend programming language |
| **Django** | Backend web framework |
| **Django ORM** | Database interaction |
| **SQLite** | Persistent relational database |
| **HTML** | Webpage structure |
| **Django Templates** | Dynamic server-side HTML rendering |
| **CSS** | Interface styling |
| **VS Code** | Development environment |

---

# 🚀 Installation & Setup

## Prerequisites

Make sure Python is installed:

```bash
python --version
```

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/ritkritig/BackendDevelopment.git
```

Navigate to the experiment:

```bash
cd "BackendDevelopment/Backend Lab/Experiment15/django_todo_app"
```

---

## 2️⃣ Install Django

If Django is not already installed:

```bash
pip install django
```

Check the installation:

```bash
django-admin --version
```

---

## 3️⃣ Apply Database Migrations

Run:

```bash
python manage.py makemigrations
python manage.py migrate
```

This prepares the SQLite database according to the Django models.

---

## 4️⃣ Start the Django Development Server

```bash
python manage.py runserver
```

You should see output similar to:

```text
Starting development server at http://127.0.0.1:8000/
```

---

## 5️⃣ Open the Application

Open your browser and visit:

```text
http://127.0.0.1:8000/
```

The Todo application should now be available.

---

# 🔄 Complete Application Workflow

```text
                   Start Server
                        │
                        ▼
                  Open Todo App
                        │
                        ▼
                Retrieve Tasks
                        │
                        ▼
                  Display List
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
       Add Task     Toggle Task    Delete Task
          │             │             │
          ▼             ▼             ▼
       CREATE         UPDATE         DELETE
          │             │             │
          └─────────────┼─────────────┘
                        │
                        ▼
                   Django ORM
                        │
                        ▼
                     SQLite
                        │
                        ▼
                    Redirect
                        │
                        ▼
                Updated Todo List
```

---

# 📸 Final Output

The final application provides a simple Todo interface where tasks can be **added, viewed, marked as completed, and deleted**, with all information stored persistently using Django and SQLite.

<p align="center">
  <img src="./Images/screenshot.png" alt="Experiment 15 Django Todo Application" width="900">
</p>

<p align="center">
  <i>Final output of the Django Todo Application.</i>
</p>

---

# 🧠 Concepts Practiced

This experiment provides practical experience with:

- Python backend development
- Django framework
- Django projects and applications
- Model–View–Template architecture
- URL routing
- Views
- Models
- Templates
- Django ORM
- SQLite
- Database migrations
- CRUD operations
- Form processing
- HTTP requests and responses
- Redirects
- Persistent storage
- Dynamic server-side rendering

---

# 🎓 Learning Outcomes

After completing this experiment, I was able to:

- Create and configure a Django project
- Create a Django application
- Understand Django's project structure
- Define database models
- Use Django ORM for database operations
- Create and apply migrations
- Configure URL routes
- Implement views for application logic
- Render dynamic HTML using Django templates
- Process user-submitted data
- Implement CRUD-style operations
- Store application data persistently using SQLite
- Understand how Django connects URLs, views, models, templates, and databases

---

## 📚 Course Information

**Course:** Backend Development Lab  
**Experiment:** 15  
**Project:** Django Todo Application  
**Framework:** Django  
**Database:** SQLite  
**Focus:** Database-Backed Web Application Development

---

## 👩‍💻 Author

**Ritkriti Goyal**

Backend Development Lab — Experiment 15

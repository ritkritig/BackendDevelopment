# 🐍 Experiment 15B — Advanced Django, External APIs & `uv`

An extended **Django backend development experiment** exploring database-backed web applications, Django project organization, static files and templates, external API integration, JSON responses, error handling, and Python project management using **`uv`**.

This experiment builds on the basic Django concepts from Experiment 15 and introduces a more structured application containing multiple Django apps along with an external API integration.

---

## 📌 Experiment

**Experiment 15B: Advanced Django Application Development & API Integration**

### Technology Stack

![Python](https://img.shields.io/badge/Python-3.x-3776AB?logo=python&logoColor=white)
![Django](https://img.shields.io/badge/Django-Web_Framework-092E20?logo=django&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?logo=sqlite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Templates-E34F26?logo=html5&logoColor=white)

---

# 🎯 Objective

The objective of this experiment is to extend Django fundamentals by working with a more structured backend application and introducing **external API communication**.

The experiment demonstrates:

- Django project and application structure
- Multiple Django apps
- Models, views and URL routing
- Django templates
- Template inheritance
- Static CSS, JavaScript and images
- SQLite database integration
- Django ORM
- CRUD-style task management
- POST request handling
- JSON responses
- External API consumption
- API timeout handling
- HTTP error handling
- Separation of API utility logic
- Python environment/project management using `uv`

---

# 📂 Experiment Overview

Experiment 15B contains two major implementations:

```text
Experiment15B/
│
├── django todo app/
│   ├── todo/
│   ├── tasks/
│   ├── student_api/
│   ├── todo_project/
│   ├── manage.py
│   └── db.sqlite3
│
└── uv exp/
    └── college/
        ├── config/
        ├── students/
        ├── src/
        ├── manage.py
        ├── pyproject.toml
        └── db.sqlite3
```

The first project demonstrates a functional Django Todo application and external API handling, while the second explores Django project setup using `uv`.

---

# 📝 Part 1 — Django Todo Application

The primary project is a database-backed Todo application built using Django.

The application uses a `Task` model with three fields:

```text
Task
│
├── title
├── completed
└── created_at
```

The actual model defines:

```python
class Task(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
```

This gives every task a title, completion status and automatically generated creation timestamp.

---

# ✨ Todo Application Features

The Todo application supports:

- 📋 Viewing all tasks
- ➕ Adding new tasks
- ✅ Marking tasks as completed
- 🔄 Returning completed tasks to incomplete state
- 🗑️ Deleting tasks
- 💾 Persistent SQLite storage
- 🎨 Custom CSS styling
- ⚡ Client-side JavaScript
- 🖼️ Static image assets
- 🧩 Reusable Django templates

---

# 📋 Displaying Tasks

Tasks are retrieved using Django ORM:

```python
tasks = Task.objects.all().order_by('-created_at')
```

This displays the newest tasks first.

The data is then passed to:

```text
todo/task_list.html
```

for server-side rendering.

### Flow

```text
SQLite Database
       │
       ▼
   Django ORM
       │
       ▼
   Task Objects
       │
       ▼
    View Logic
       │
       ▼
Django Template
       │
       ▼
   HTML Response
```

---

# ➕ Adding Tasks

New tasks are created through a form.

The application retrieves the submitted title using:

```python
title = request.POST.get('title', '').strip()
```

Whitespace-only or empty titles are ignored.

Valid tasks are created with:

```python
Task.objects.create(title=title)
```

After processing the form, the user is redirected back to the task list.

### Workflow

```text
Enter Task
    │
    ▼
POST Request
    │
    ▼
Validate Title
    │
    ├── Empty ──► Ignore
    │
    └── Valid
          │
          ▼
    Create Task
          │
          ▼
      SQLite
          │
          ▼
       Redirect
```

---

# ✅ Toggle Task Status

The application can switch a task between completed and incomplete.

The requested task is safely retrieved using:

```python
get_object_or_404(Task, pk=task_id)
```

Its status is then reversed:

```python
task.completed = not task.completed
```

and saved using:

```python
task.save(update_fields=['completed'])
```

This means:

```text
Incomplete ──────► Completed
     ▲                 │
     └─────────────────┘
```

The same operation works in both directions.

---

# 🗑️ Delete Tasks

Tasks can also be permanently removed.

The application first retrieves the requested task safely and then performs:

```python
task.delete()
```

The user is redirected to the updated task list afterward.

---

# 🔐 POST-Only Operations

The task toggle and delete views use:

```python
@require_POST
```

This ensures that state-changing operations are handled only through **POST requests** rather than ordinary GET requests.

It demonstrates better HTTP method usage for backend operations.

---

# 🧩 Django Templates

The project uses multiple templates rather than placing the complete interface in a single HTML file.

```text
templates/
└── todo/
    ├── base.html
    ├── header.html
    ├── footer.html
    ├── task_list.html
    └── add_task.html
```

### `base.html`

Provides the common page structure.

### `header.html`

Contains reusable header content.

### `footer.html`

Contains reusable footer content.

### `task_list.html`

Displays Todo tasks.

### `add_task.html`

Contains the form for creating new tasks.

This structure demonstrates **template reuse and separation of presentation components**.

---

# 🎨 Static Files

The Todo application also contains a structured static directory:

```text
static/
└── todo/
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   └── app.js
    │
    └── images/
        └── logo.png
```

This separates presentation assets from backend Python code.

```text
Django Application
      │
      ├── Backend Logic
      │      ├── models.py
      │      └── views.py
      │
      ├── Templates
      │      └── HTML
      │
      └── Static Files
             ├── CSS
             ├── JavaScript
             └── Images
```

---

# 🌐 Part 2 — External API Integration

One of the most important additions in Experiment 15B is the `student_api` Django application.

It demonstrates how a Django backend can communicate with an **external web API** and return the result to its own client.

The external service used is:

```text
JSONPlaceholder
/posts/{post_id}
```

---

# 🔗 API Endpoint

The Django application defines:

```text
GET /api/students/external/<post_id>/
```

For example:

```text
/api/students/external/1/
```

The integer `post_id` is passed to the external service.

---

# 🔄 External API Flow

```text
                  Client
                    │
                    ▼
       /api/students/external/1/
                    │
                    ▼
               Django URL
                    │
                    ▼
          external_data_view()
                    │
                    ▼
          get_external_data()
                    │
                    ▼
             HTTP Request
                    │
                    ▼
             JSONPlaceholder
                    │
                    ▼
              JSON Response
                    │
                    ▼
             Django Backend
                    │
                    ▼
              JsonResponse
                    │
                    ▼
                  Client
```

This demonstrates a backend acting as an intermediary between a client and another service.

---

# 🧰 Separation of API Logic

External request logic is separated into:

```text
student_api/utils.py
```

while the Django response logic remains in:

```text
student_api/views.py
```

This gives the application a cleaner structure:

```text
urls.py
   │
   ▼
views.py
   │
   ▼
utils.py
   │
   ▼
External API
```

---

# 📡 External Request Handling

The application uses Python's `requests` library to retrieve external data:

```python
response = requests.get(url, timeout=2)
```

A **2-second timeout** prevents the Django application from waiting indefinitely for the external service.

The response status is validated using:

```python
response.raise_for_status()
```

and successful JSON is returned using:

```python
response.json()
```

---

# ⚠️ API Error Handling

The implementation handles multiple external-service failures.

### Timeout

If the service takes too long:

```text
External service timed out
```

### Request Failure

If the service cannot be reached:

```text
External service is unavailable
```

### Invalid JSON

If the response cannot be parsed:

```text
External service returned invalid JSON
```

This demonstrates an important backend principle:

> A backend should not assume that an external service will always respond successfully.

---

# 📤 JSON Response

When external data is retrieved successfully, Django returns it using:

```python
JsonResponse(result["data"])
```

If an external error occurs, the application responds with:

```python
JsonResponse(
    {"error": result["error"]},
    status=503,
)
```

The HTTP `503 Service Unavailable` response indicates that the application cannot currently complete the operation because the external dependency failed.

---

# 🏗️ Overall Architecture

```text
                         USER
                           │
                           ▼
                     Django Server
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
         Todo Application          Student API
              │                         │
              ▼                         ▼
          Django ORM                 utils.py
              │                         │
              ▼                         ▼
           SQLite                External API
              │                         │
              ▼                         ▼
       Django Templates           JSON Response
              │                         │
              └────────────┬────────────┘
                           ▼
                         Client
```

---

# 🐍 Part 3 — Django with `uv`

Experiment 15B also contains a separate project:

```text
uv exp/college/
```

This project explores creating and managing a Python/Django project using **`uv`**.

The project contains:

```text
college/
│
├── config/
├── students/
├── src/
├── manage.py
├── pyproject.toml
└── db.sqlite3
```

---

# ⚡ What is `uv`?

`uv` is used here for Python project and dependency management.

Instead of maintaining project dependencies only through traditional manual `pip` commands, project information is defined in:

```text
pyproject.toml
```

The experiment's configuration includes Django as a dependency.

This demonstrates a more structured Python project setup.

---

# 🏫 College Django Project

The `uv` example creates a Django project configured with a `students` application.

```text
config/
│
├── settings.py
├── urls.py
├── asgi.py
└── wsgi.py

students/
│
├── admin.py
├── apps.py
├── models.py
├── tests.py
├── views.py
└── migrations/
```

The `students` application is registered in Django's:

```python
INSTALLED_APPS
```

This part of the experiment focuses primarily on **project initialization and environment/dependency organization** rather than implementing the full Todo functionality.

---

# 📁 Complete Project Structure

```text
Experiment15B/
│
├── django todo app/
│   │
│   ├── manage.py
│   ├── db.sqlite3
│   │
│   ├── todo_project/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   │
│   ├── todo/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   │
│   │   ├── templates/
│   │   │   └── todo/
│   │   │       ├── base.html
│   │   │       ├── header.html
│   │   │       ├── footer.html
│   │   │       ├── task_list.html
│   │   │       └── add_task.html
│   │   │
│   │   └── static/
│   │       └── todo/
│   │           ├── css/
│   │           ├── js/
│   │           └── images/
│   │
│   ├── tasks/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── migrations/
│   │
│   └── student_api/
│       ├── views.py
│       ├── urls.py
│       ├── utils.py
│       └── migrations/
│
├── uv exp/
│   └── college/
│       ├── config/
│       ├── students/
│       ├── src/
│       ├── manage.py
│       ├── pyproject.toml
│       └── db.sqlite3
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
| **Python** | Backend programming |
| **Django** | Web application framework |
| **SQLite** | Relational database |
| **Django ORM** | Database abstraction |
| **Django Templates** | Server-side HTML rendering |
| **HTML5** | Interface structure |
| **CSS3** | Application styling |
| **JavaScript** | Client-side interaction |
| **Requests** | External HTTP/API requests |
| **JSON** | API data exchange |
| **uv** | Python project and dependency management |

---

# 🚀 Running the Django Todo Project

Navigate to:

```bash
cd "BackendDevelopment/Backend Lab/Experiment15B/django todo app"
```

Install the required packages if needed:

```bash
pip install django requests
```

Apply migrations:

```bash
python manage.py migrate
```

Start the server:

```bash
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/
```

---

# 🧪 Testing the External API

Once the Django server is running, the external API endpoint can be tested using a route such as:

```text
http://127.0.0.1:8000/api/students/external/1/
```

The request flow is:

```text
Browser
   ↓
Django
   ↓
JSONPlaceholder
   ↓
Django
   ↓
JSON
```

---

# 📸 Final Output

The final implementation demonstrates a structured Django Todo application with persistent storage, reusable templates and static assets, together with external API integration and JSON response handling.

<p align="center">
  <img src="./Images/screenshot.png" alt="Experiment 15B Django Application Output" width="900">
</p>

<p align="center">
  <i>Final output of Experiment 15B — Advanced Django Application Development.</i>
</p>

---

# 🧠 Concepts Practiced

This experiment provides hands-on practice with:

- Django project structure
- Multiple Django applications
- Models
- Views
- URL routing
- Django ORM
- SQLite
- CRUD operations
- POST request handling
- `get_object_or_404`
- Django templates
- Template reuse
- Static files
- CSS and JavaScript integration
- JSON responses
- External APIs
- Python `requests`
- HTTP timeouts
- Exception handling
- HTTP status codes
- Separation of concerns
- Python project configuration
- `pyproject.toml`
- `uv`

---

# 🎓 Learning Outcomes

After completing this experiment, I was able to:

- Structure a Django project using multiple applications
- Build a database-backed Todo application
- Define and manage Django models
- Use Django ORM for persistent storage
- Process GET and POST requests
- Implement task creation, toggling and deletion
- Organize reusable Django templates
- Manage CSS, JavaScript and images through Django static files
- Build endpoints that return JSON
- Retrieve information from an external API
- Handle API timeouts and failures
- Return appropriate HTTP error responses
- Separate API utility logic from Django views
- Understand how Django can communicate with third-party services
- Explore modern Python dependency and project management using `uv`

---

## 📚 Course Information

**Course:** Backend Development Lab  
**Experiment:** 15B  
**Topic:** Advanced Django & External API Integration  
**Framework:** Django  
**Database:** SQLite  
**Additional Concepts:** REST/JSON, External APIs, Error Handling & `uv`

---

## 👩‍💻 Author

**Ritkriti Goyal**

Backend Development Lab — Experiment 15B

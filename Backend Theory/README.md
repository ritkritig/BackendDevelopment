# Backend Development — Theory & Implementations

This folder contains the **theory-class implementations, demonstrations, assignments, and practical examples** completed as part of the Backend Development course.

The content progresses from basic server-side development and routing to database integration, RESTful API development, Django, middleware, and containerization using Docker.

---

## 📚 Topics Covered

### 🔹 Theory Class

The `Theory_class1` folder contains introductory material and examples used during the initial Backend Development theory classes.

---

## 1️⃣ Unit 1 — Backend Fundamentals & Web Frameworks

Unit 1 introduces the fundamentals of server-side development using both **JavaScript and Python-based backend frameworks**.

### Topics & Implementations

- Node.js and Express.js
- Server creation and routing
- Request–response handling
- EJS template rendering
- Flask fundamentals
- FastAPI fundamentals
- REST-style endpoints
- CRUD operations
- Query parameters
- Path parameters
- Pydantic models
- Jinja2 templates
- Cookies
- Sessions
- Basic frontend–backend interaction

### Key Implementations

#### Express + EJS Student Application

A simple Express server demonstrating:

- Express routing
- EJS as the view engine
- Dynamic rendering of student information
- Server-side template rendering

#### Flask Student Management API

A basic Flask API implementing routes such as:

```text
GET /
GET /students
GET /students/<student_id>
```

It demonstrates JSON responses, route parameters, and HTTP `404` handling.

#### FastAPI Student Management API

A more complete REST-style student API implementing:

```text
GET    /students
GET    /students/{student_id}
POST   /students
PUT    /students/{student_id}
DELETE /students/{student_id}
```

Concepts demonstrated include:

- Pydantic models
- Request validation
- Query parameters
- Response models
- HTTP status codes
- Exception handling

#### Cookies & Sessions

Express examples demonstrate how backend applications maintain state using:

- Cookie creation
- Cookie retrieval
- Cookie deletion
- Session creation
- Session data access
- Session destruction

#### FastAPI + Jinja2

Server-side HTML rendering is demonstrated using **FastAPI with Jinja2 templates** to dynamically display student information.

---

## 2️⃣ Unit 2 — Data Management, Validation & RESTful APIs

Unit 2 focuses on how backend applications **validate, store, retrieve, and manage structured data**.

### Topics & Implementations

- Data model validation
- Pydantic
- ORM concepts
- ODM concepts
- SQLAlchemy
- SQLite
- MongoDB
- Mongoose
- PostgreSQL
- JSONB
- CRUD database operations
- RESTful API design
- Pagination
- Filtering and searching
- Database relationships
- Dependency injection

### Data Model Validation

FastAPI and Pydantic are used to validate incoming data.

Validation examples include:

- Required fields
- Email validation
- String length restrictions
- Allowed branch values
- Optional fields
- Date handling
- Response models

### ORM — Object Relational Mapping

The ORM examples demonstrate interaction with relational databases through Python objects rather than directly writing every SQL operation.

The implementations explore database operations using **SQLAlchemy and SQLite**.

### ODM — Object Document Mapping

MongoDB interaction is demonstrated using **Mongoose**, including operations such as:

```text
Create
Find
Update
Delete
```

The examples demonstrate how JavaScript objects can be mapped to MongoDB documents.

### PostgreSQL & JSONB Assignment

The unit also contains an assignment exploring **PostgreSQL JSONB**, combining relational database capabilities with flexible JSON-based data storage.

### RESTful Student Management API

A larger **FastAPI + SQLAlchemy** implementation manages:

- Students
- Courses
- Departments
- Enrollments

The API demonstrates:

- CRUD operations
- Database sessions
- SQLAlchemy models
- Pydantic schemas
- Filtering
- Searching
- Pagination
- Query parameters
- Database relationships
- HTTP error handling
- Duplicate-resource validation

---

## 3️⃣ Unit 3 — Express & Django Backend Development

Unit 3 extends backend development concepts through **Express.js and Django**.

### Express API

A basic Student Management API demonstrates:

- Express application setup
- JSON middleware
- Route definition
- HTTP request handling
- Server configuration

Example endpoint:

```text
GET /
```

### Django Student System

A Django-based Student Management project introduces the structure of a Django backend application.

The project contains:

```text
student_system/
│
├── manage.py
├── student_system/
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
└── students/
    ├── models.py
    ├── views.py
    ├── urls.py
    ├── middleware.py
    ├── admin.py
    └── apps.py
```

Concepts demonstrated include:

- Django project structure
- Django applications
- URL routing
- Views
- JSON responses
- Path parameters
- Middleware
- Request/response lifecycle

### Custom Django Middleware

A custom logging middleware records:

- HTTP request method
- Requested path
- Response status
- Request processing time

This demonstrates how middleware can intercept and process requests and responses globally.

---

## 4️⃣ Unit 4 — Docker & Containerization

Unit 4 introduces **containerization of backend applications using Docker**.

### Dockerized FastAPI Student API

A FastAPI Student API is packaged inside a Docker container.

The application provides:

```text
GET /
GET /health
GET /students
```

### Docker Concepts Demonstrated

- Writing a `Dockerfile`
- Using a Python base image
- Setting a container working directory
- Installing dependencies
- Copying application files
- Exposing application ports
- Running FastAPI with Uvicorn
- `.dockerignore`
- Building backend application images
- Running backend services inside containers

Example structure:

```text
docker-student-api/
└── fastapi-app/
    ├── Dockerfile
    ├── .dockerignore
    ├── requirements.txt
    └── main.py
```

---

## 📂 Folder Structure

```text
Backend Theory/
│
├── Theory_class1/
│   └── README.md
│
├── Unit1/
│   ├── Assignment1_notesApp/
│   ├── demo1/
│   │   ├── server.js
│   │   └── views/
│   ├── demo2/
│   │   └── backend-project/
│   │       └── app.py
│   ├── demo3/
│   │   └── main.py
│   ├── lecture06/
│   │   ├── cookies/
│   │   └── session/
│   ├── lecture07_to do list/
│   └── lecture08/
│       ├── main.py
│       └── templates/
│
├── Unit2/
│   ├── Assignment2_PostgreSQL_JSONB/
│   ├── Data model validation/
│   ├── ORM/
│   ├── ODM/
│   └── Lecture19_restfulapi/
│       └── student_api/
│
├── Unit3/
│   ├── Lecture25/
│   │   └── express-api/
│   └── Lecture26/
│       └── student_system/
│
├── unit4/
│   └── docker-student-api/
│       └── fastapi-app/
│           ├── Dockerfile
│           ├── .dockerignore
│           ├── requirements.txt
│           └── main.py
│
└── README.md
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **JavaScript** | Server-side development with Node.js |
| **Python** | Backend development and API implementation |
| **Node.js** | JavaScript runtime for backend applications |
| **Express.js** | Building web servers and APIs |
| **EJS** | Server-side template rendering |
| **Flask** | Lightweight Python web development |
| **FastAPI** | REST API development |
| **Pydantic** | Data validation and API schemas |
| **Jinja2** | HTML template rendering |
| **Django** | Full-featured Python web framework |
| **SQLAlchemy** | ORM and relational database interaction |
| **SQLite** | Lightweight relational database |
| **PostgreSQL** | Relational database and JSONB exploration |
| **MongoDB** | NoSQL document database |
| **Mongoose** | ODM for MongoDB |
| **Docker** | Application containerization |
| **Uvicorn** | ASGI server for FastAPI |

---

## 💡 Key Concepts Practiced

Throughout these implementations, the following backend concepts are explored:

- Client–server architecture
- Server-side programming
- HTTP request and response handling
- Routing
- RESTful API design
- CRUD operations
- Path and query parameters
- Data validation
- Error handling
- HTTP status codes
- Template rendering
- Cookies and sessions
- Relational and NoSQL databases
- ORM and ODM
- Database relationships
- API filtering and pagination
- Django application architecture
- Middleware
- Dependency management
- Containerization with Docker

---

## 🎯 Learning Progression

```text
Backend Fundamentals
        ↓
Node.js / Express / Flask / FastAPI
        ↓
Routing & Request–Response Handling
        ↓
Templates, Cookies & Sessions
        ↓
Data Validation
        ↓
Databases
        ↓
ORM & ODM
        ↓
RESTful APIs
        ↓
Django & Middleware
        ↓
Docker & Containerization
```

This progression demonstrates the development of backend applications from **basic server creation to structured APIs, persistent data management, framework-based development, and containerized deployment**.

---

## 📌 Purpose

This directory serves as a record of the concepts and implementations covered during the **Backend Development theory course**. Each unit combines conceptual learning with code demonstrations to understand how modern backend applications are designed, developed, and deployed.

# 🚀 Experiment 12 — Node.js, Express.js & EJS

A hands-on backend development experiment demonstrating how to build a web server using **Node.js and Express.js**, handle different types of HTTP requests, process user input, and dynamically render webpages using **EJS**.

This experiment introduces the core concepts behind server-side web development and demonstrates how a backend application receives a request, processes it, and generates an appropriate response.

---

## 📌 Experiment

**Experiment 12: Backend Development using Node.js, Express.js and EJS**

### Technologies Used

![Node.js](https://img.shields.io/badge/Node.js-JavaScript_Runtime-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Web_Framework-000000?logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Template_Engine-B4CA65)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

---

# 🎯 Objective

The objective of this experiment is to understand the fundamentals of backend development using **Node.js and Express.js**.

The experiment demonstrates how to:

- Create an Express web server
- Define application routes
- Handle `GET` and `POST` requests
- Send different response formats
- Work with route parameters
- Work with query parameters
- Process form/request data
- Return HTTP status codes
- Implement basic login and registration handling
- Use EJS for server-side rendering
- Pass dynamic data from Express to webpages

---

# 🌐 How the Application Works

The application follows the basic **client-server request/response model**:

```text
        Client / Browser
               │
               │ HTTP Request
               ▼
        ┌──────────────┐
        │  Express.js  │
        │    Server    │
        └──────┬───────┘
               │
               │ Process Route
               ▼
        Application Logic
               │
        ┌──────┴────────┐
        │               │
        ▼               ▼
 Direct Response    EJS Template
        │               │
        └──────┬────────┘
               ▼
          HTTP Response
               │
               ▼
        Client / Browser
```

Express receives an HTTP request, identifies the matching route, executes the associated logic, and sends a response back to the client.

---

# ✨ Concepts Implemented

## 1️⃣ Express Server Setup

The application uses **Express.js** to create the backend server.

A basic Express application follows the structure:

```javascript
const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

Express provides a simple interface for defining routes and processing HTTP requests.

---

# 2️⃣ GET Requests

Several `GET` routes demonstrate different types of server responses.

Examples include:

```text
GET /
GET /text
GET /html
GET /json
```

These routes demonstrate how the server can return different content depending on the request.

---

## 📝 Plain Text Response

A route can return simple text directly to the client.

```text
GET /text
        ↓
Express Server
        ↓
Plain Text Response
```

This demonstrates the simplest form of an HTTP response.

---

## 🌐 HTML Response

The server can also return HTML content.

```text
GET /html
        ↓
Express
        ↓
HTML Response
        ↓
Rendered by Browser
```

This demonstrates how backend applications can generate content that is interpreted by the browser as HTML.

---

## 📦 JSON Response

Express can return structured JSON data.

```text
GET /json
        ↓
{
    "message": "...",
    "status": "..."
}
```

JSON is commonly used when developing APIs because it provides a lightweight format for exchanging structured data between applications.

---

# 3️⃣ Route Parameters

The experiment demonstrates **dynamic routes** using route parameters.

Example:

```text
GET /user/:id
```

A request such as:

```text
/user/101
```

allows the server to retrieve:

```javascript
req.params.id
```

### Request Flow

```text
/user/101
     │
     ▼
Express Route
/user/:id
     │
     ▼
req.params.id
     │
     ▼
"101"
```

Route parameters are useful when identifying a specific resource through the URL.

---

# 4️⃣ Query Parameters

The experiment also demonstrates retrieving values from the URL query string.

Example:

```text
GET /search
```

A request may contain query data such as:

```text
/search?keyword=nodejs
```

Express can access this information using:

```javascript
req.query
```

Query parameters are commonly used for:

- Searching
- Filtering
- Sorting
- Pagination
- Optional request parameters

---

# 5️⃣ Calculator / Request Processing

The application also demonstrates processing values supplied through a request.

Example route:

```text
GET /calculate
```

This demonstrates the basic backend workflow:

```text
Receive Input
     ↓
Extract Parameters
     ↓
Process Data
     ↓
Calculate Result
     ↓
Return Response
```

This shows that backend routes can perform application logic instead of simply returning static content.

---

# 6️⃣ POST Requests

The experiment demonstrates handling `POST` requests.

Examples include:

```text
POST /register
POST /login
```

Unlike a typical `GET` request, a `POST` request can send data to the server in the request body.

Express middleware is used to process incoming request data.

---

# 👤 7️⃣ Registration Handling

The registration route demonstrates how user information can be received by the backend.

```text
User Input
    │
    ▼
POST /register
    │
    ▼
Request Body
    │
    ▼
Express Server
    │
    ▼
Process Information
    │
    ▼
Response
```

This introduces the basic structure used by real-world registration APIs.

---

# 🔐 8️⃣ Login Handling

The `/login` route demonstrates basic credential processing.

```text
POST /login
```

The server receives login information and determines which response should be returned.

This introduces concepts such as:

- Request-body processing
- Conditional backend logic
- Authentication flow
- HTTP responses
- Status codes

> This experiment demonstrates the basic request-handling concept of authentication rather than a production authentication system.

---

# 📡 9️⃣ HTTP Status Codes

The application demonstrates how a backend can return different HTTP status codes depending on the result of a request.

Common examples include:

| Status | Meaning |
|---|---|
| `200` | Request successful |
| `201` | Resource successfully created |
| `400` | Invalid client request |
| `401` | Authentication required / failed |
| `404` | Resource not found |
| `500` | Internal server error |

Status codes allow the client to understand the outcome of an HTTP request.

---

# 🎨 1️⃣0️⃣ Server-Side Rendering with EJS

The second major part of the experiment introduces **EJS (Embedded JavaScript)**.

Instead of sending fixed HTML directly from Express, the backend can pass data to an EJS template.

```text
Express Route
      │
      ▼
Application Data
      │
      ▼
  EJS Template
      │
      ▼
Generated HTML
      │
      ▼
    Browser
```

This allows webpages to display dynamic information generated by the backend.

---

# 🏠 EJS Home Page

The application includes a dynamically rendered home page:

```text
GET /home
```

Express renders:

```text
home.ejs
```

This demonstrates how a route can render an EJS view rather than directly sending a response.

---

# 👥 Dynamic Users Page

The application also contains:

```text
GET /users
```

which renders:

```text
users.ejs
```

The server can pass user data to the template, and EJS can generate HTML dynamically from that data.

This introduces the idea of:

```text
Backend Data
      +
EJS Template
      =
Dynamic Webpage
```

---

# 👤 Dynamic Profile Page

Individual profiles are handled using a dynamic route:

```text
GET /profile/:id
```

and rendered using:

```text
profile.ejs
```

The route parameter identifies the requested profile.

```text
/profile/1
     │
     ▼
req.params.id
     │
     ▼
Find User
     │
     ▼
profile.ejs
     │
     ▼
Dynamic Profile Page
```

This combines two important concepts from the experiment:

**Route Parameters + Server-Side Rendering**

---

# 📁 Project Structure

```text
nodejs-express-lab/
│
├── app.js
│   ├── Express server setup
│   ├── GET routes
│   ├── POST routes
│   ├── Route parameters
│   ├── Query parameters
│   ├── Login / registration handling
│   └── EJS rendering
│
├── package.json
├── package-lock.json
│
├── views/
│   ├── home.ejs
│   ├── users.ejs
│   └── profile.ejs
│
├── images/
│   └── screenshot.png
│
└── README.md
```

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **Node.js** | Executes JavaScript on the server |
| **Express.js** | Handles HTTP requests, routes and responses |
| **EJS** | Generates dynamic HTML on the server |
| **JavaScript** | Implements backend application logic |
| **npm** | Manages project dependencies |
| **HTML** | Structures rendered webpages |

---

# 🔄 Request–Response Lifecycle

One of the main concepts demonstrated by this experiment is the backend request-response lifecycle.

```text
1. User sends request
          │
          ▼
2. Express receives request
          │
          ▼
3. Router finds matching endpoint
          │
          ▼
4. Server processes input
          │
          ▼
5. Application logic executes
          │
          ▼
6. Express prepares response
          │
          ▼
7. Text / HTML / JSON / EJS returned
          │
          ▼
8. Browser receives response
```

---

# 🚀 Installation & Setup

## Prerequisites

Make sure you have installed:

- **Node.js**
- **npm**
- **Visual Studio Code** or another code editor

Check your installation using:

```bash
node --version
npm --version
```

---

## 1. Clone the Repository

```bash
git clone https://github.com/ritkritig/BackendDevelopment.git
```

Navigate to Experiment 12:

```bash
cd "BackendDevelopment/Backend Lab/Experiment12/nodejs-express-lab"
```

---

## 2. Install Dependencies

```bash
npm install
```

This installs the dependencies defined in `package.json`.

---

## 3. Run the Application

```bash
node app.js
```

The Express application can then be accessed through the local server configured in `app.js`.

For example:

```text
http://localhost:3000
```

---

# 🧪 Testing the Routes

Once the server is running, the routes can be tested through a browser or an API testing tool such as Postman.

Examples:

```text
http://localhost:3000/
http://localhost:3000/text
http://localhost:3000/html
http://localhost:3000/json

http://localhost:3000/user/1
http://localhost:3000/search
http://localhost:3000/calculate

http://localhost:3000/home
http://localhost:3000/users
http://localhost:3000/profile/1
```

`POST` endpoints such as `/register` and `/login` can be tested using an API client by sending the appropriate request body.

---


## 📸 Final Output

<p align="center">
  <img src="./Images/screenshot.png" alt="Experiment 12 - Node.js Express and EJS Output" width="900">
</p>

<p align="center">
  <i>Final output of the Node.js, Express.js and EJS backend application.</i>
</p>

---

# 🧠 Concepts Practiced

Through this experiment, the following backend concepts were practiced:

- Node.js runtime
- Express.js framework
- Backend server creation
- HTTP requests and responses
- GET requests
- POST requests
- Express routing
- Route parameters
- Query parameters
- Request-body processing
- JSON responses
- HTML responses
- HTTP status codes
- Basic authentication flow
- Dynamic routes
- Server-side rendering
- EJS templates
- Passing data from backend to views
- npm dependency management

---

# 🎓 Learning Outcomes

After completing this experiment, I was able to:

- Create and run a Node.js backend server
- Build routes using Express.js
- Handle different HTTP methods
- Send text, HTML and JSON responses
- Extract route and query parameters
- Process data sent by clients
- Understand basic login and registration request handling
- Work with HTTP status codes
- Configure EJS as a template engine
- Render dynamic webpages from the backend
- Pass server-side data to EJS templates
- Understand the basic client-server request/response lifecycle

---

## 📚 Course Information

**Course:** Backend Development Lab  
**Experiment:** 12  
**Topic:** Node.js, Express.js and EJS  
**Focus:** Routing, HTTP Requests/Responses & Server-Side Rendering

---

## 👩‍💻 Author

**Ritkriti Goyal**

Backend Development Lab — Experiment 12

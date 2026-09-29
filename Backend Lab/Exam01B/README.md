# Eisenhower Matrix Todo Application

A server-side rendered (SSR) Todo application built using **Node.js, Express.js, EJS, and MongoDB**. The application helps users organize and prioritize tasks using the **Eisenhower Matrix**, which categorizes tasks based on their urgency and importance.

This project was developed as part of the **Backend Development Lab Examination**.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Eisenhower Matrix Logic](#eisenhower-matrix-logic)
- [Database Configuration](#database-configuration)
- [BSON Document Schema](#bson-document-schema)
- [Application Routes](#application-routes)
- [Setup and Execution](#setup-and-execution)
- [Architecture Highlights](#architecture-highlights)
- [Application Workflow](#application-workflow)

---

## Overview

The **Eisenhower Matrix Todo Application** is a task management web application that allows users to create, organize, complete, redo, and delete tasks.

Each task is categorized into one of four quadrants of the Eisenhower Matrix based on two properties:

- **Urgency**
- **Importance**

The four categories are:

| Quadrant | Urgent | Important |
|----------|--------|-----------|
| **Do** | Yes | Yes |
| **Schedule** | No | Yes |
| **Delegate** | Yes | No |
| **Eliminate** | No | No |

The application uses **Express.js** for backend routing, **MongoDB** for persistent data storage, and **EJS** for server-side rendering.

---

## Features

### 1. Eisenhower Matrix Dashboard

The main dashboard displays tasks in a **2x2 matrix**:

- **Do** - Urgent and Important
- **Schedule** - Not Urgent and Important
- **Delegate** - Urgent and Not Important
- **Eliminate** - Not Urgent and Not Important

Tasks are automatically placed into the appropriate quadrant based on their urgency and importance values.

### 2. Add New Tasks

Users can create new tasks by providing:

- Task title
- Task description
- Is Urgent checkbox
- Is Important checkbox

The server validates that the task title is not empty before storing the task.

### 3. Complete Tasks

Users can mark a task as completed.

Completed tasks are displayed with custom styling such as:

- Dimmed appearance
- Line-through text
- Redo button

### 4. Redo Tasks

A completed task can be restored using the **Redo** button.

This changes the `isCompleted` value from `true` back to `false`.

### 5. Delete Tasks

Users can permanently delete tasks from the MongoDB database.

---

## Tech Stack

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB Native Driver** - MongoDB database connectivity

### Frontend

- **EJS (Embedded JavaScript)** - Server-side template engine
- **HTML5**
- **CSS3**
- **CSS Grid** - 2x2 Eisenhower Matrix layout
- **Flexbox** - Task card and component alignment

### Database

- **MongoDB**
- **MongoClient**
- **ObjectId**

---

## Project Structure

```text
Exam01B/
├── app.js                  # Server initialization, Express routes & MongoDB connection
├── package.json            # Project dependencies
├── public/
│   └── style.css           # Matrix layout and task card styling
├── views/
│   ├── index.ejs           # Main Eisenhower Matrix dashboard
│   └── new.ejs             # New task creation form
└── README.md               # Project documentation

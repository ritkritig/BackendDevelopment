# Assignment 1 - Notes App

## Overview

A responsive browser-based Notes Application built using HTML, CSS, and JavaScript.

The application allows users to create, organize, search, edit, complete, delete, reorder, import, and export notes. Notes and theme preferences are stored in the browser using LocalStorage, allowing them to persist even after the page is refreshed.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage
- FileReader API
- Blob API
- HTML Drag and Drop API

---

## Project Structure

```text
Assignment1/
│
├── notes-app/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── screenshots/
│   ├── notes-app.png
│   ├── dark-mode.png
│   ├── completed-note.png
│   ├── search-filter.png
│   └── import-export.png
│
└── README.md
```

---

## Features

### Create Notes

Users can create a note by entering:

- Note content
- Category

If no category is entered, the note is automatically assigned to:

```text
General
```

Empty notes are not allowed.

---

### Persistent Storage

Notes are stored in the browser using:

```javascript
localStorage
```

This allows notes to remain available even after refreshing or reopening the page.

The notes are stored under:

```text
notes
```

---

### Note Information

Each note contains:

- Unique ID
- Note text
- Category
- Completion status
- Creation timestamp
- Last updated timestamp

Example structure:

```javascript
{
    id: Date.now(),
    text: "Complete Backend Assignment",
    category: "Study",
    completed: false,
    createdAt: "...",
    updatedAt: "..."
}
```

---

## Edit Notes

Existing notes can be edited using the **Edit** button.

Users can modify:

- Note text
- Category

Whenever a note is edited, its `updatedAt` timestamp is updated automatically.

Empty note content is not accepted.

---

## Delete Notes

Notes can be removed using the **Delete** button.

A confirmation dialog is displayed before deletion:

```text
Are you sure you want to delete this note?
```

The note is deleted only after confirmation.

---

## Complete / Incomplete Notes

Users can mark a note as:

```text
Complete
```

or return it to:

```text
Incomplete
```

Completed notes are visually represented using a line-through effect.

The completion status is also stored in LocalStorage.

---

## Categories

Every note can be assigned a category such as:

```text
Study
Work
Personal
```

If no category is provided, the application uses:

```text
General
```

Categories are displayed along with each note and can also be used while searching.

---

## Search Notes

The application provides real-time searching.

Users can search using:

- Note content
- Category

The displayed notes update automatically while typing in the search field.

---

## Filter Notes

Notes can be filtered according to their completion status.

Available filters:

```text
All Notes
Active
Completed
```

### All Notes

Displays every note.

### Active

Displays notes that have not been completed.

### Completed

Displays only completed notes.

---

## Dark and Light Mode

The application supports both:

- Light Mode
- Dark Mode

The theme can be changed using the button in the application header.

The selected theme is stored using LocalStorage under:

```text
theme
```

Therefore, the selected theme remains active after refreshing the page.

---

## Drag and Drop Reordering

Notes can be reordered using drag and drop.

Each note is draggable and can be moved relative to another note.

After reordering, the new order is saved in LocalStorage. This means the reordered notes remain in the same order after refreshing the page.

---

## Export Notes

Users can export all their notes as a JSON file.

Click:

```text
Export JSON
```

The application converts the notes array into JSON and creates a downloadable file named:

```text
notes.json
```

The export functionality uses:

- `JSON.stringify()`
- `Blob`
- `URL.createObjectURL()`

---

## Import Notes

Previously exported notes can be imported using:

```text
Import JSON
```

The application uses the FileReader API to read the selected `.json` file.

The imported data is checked to ensure that it contains an array.

If the file is valid:

```text
Notes imported successfully.
```

is displayed.

If the JSON is invalid:

```text
Invalid JSON file.
```

is displayed.

Imported notes are then stored in LocalStorage.

---

## LocalStorage

The application uses LocalStorage for two main purposes.

### Notes

```javascript
localStorage.setItem("notes", JSON.stringify(notes));
```

Notes are retrieved using:

```javascript
JSON.parse(localStorage.getItem("notes"))
```

### Theme

The selected theme is stored using:

```javascript
localStorage.setItem("theme", newTheme);
```

This provides client-side persistence without requiring a backend or database.

---

## Responsive Design

The interface is responsive and includes styling for smaller screens.

On devices with a width below `600px`:

- Header elements stack vertically
- Search and filter controls stack vertically
- Import/export buttons stack vertically
- Container spacing is reduced

---

## Application Workflow

```text
User Opens Notes App
        ↓
Load Notes from LocalStorage
        ↓
Display Existing Notes
        ↓
User Creates / Edits / Deletes Notes
        ↓
Update Notes Array
        ↓
Save to LocalStorage
        ↓
Render Updated Notes
```

Searching and filtering operate on the stored notes before displaying them.

---

## Major JavaScript Functions

| Function | Purpose |
|---|---|
| `saveNotes()` | Saves notes to LocalStorage |
| `displayNotes()` | Filters and displays notes |
| `editNote(id)` | Edits note text and category |
| `deleteNote(id)` | Deletes a note after confirmation |
| `toggleComplete(id)` | Changes completion status |
| `applyTheme(theme)` | Applies light/dark theme |
| `handleDragStart()` | Starts note dragging |
| `handleDragOver()` | Allows drag-over behavior |
| `handleDrop()` | Reorders notes |
| `handleDragEnd()` | Ends drag operation |

---

## User Interface

The application contains:

- Notes heading
- Dark/Light Mode toggle
- Note text area
- Category input
- Add Note button
- Search bar
- Status filter
- Export JSON button
- Import JSON button
- Dynamically generated note cards

Each note card displays:

```text
Note Text
Category
Created Date
Updated Date

[Mark Complete] [Edit] [Delete]
```

---

## Screenshots

### Notes App

The main interface allows users to create notes, assign categories, search notes, filter them by status, and perform different note actions.

![Notes App](screenshots/notes-app.png)

---

### Dark Mode

The application supports a persistent dark mode using LocalStorage.

![Dark Mode](screenshots/dark-mode.png)

---

### Completed Note

Notes can be marked as completed or incomplete. Completed notes are displayed with a line-through effect.

![Completed Note](screenshots/completed-note.png)

---

### Search and Filter

Notes can be searched by their content or category and filtered as All, Active, or Completed.

![Search and Filter](screenshots/search-filter.png)

---

### Import and Export

Notes can be exported as a JSON file and imported back into the application.

![Import Export](screenshots/import-export.png)

---

## How to Run

No package installation or server is required.

### Step 1

Open the `notes-app` directory.

### Step 2

Open:

```text
index.html
```

in a web browser.

### Step 3

Start creating and managing notes.

---

## Learning Outcomes

Through this assignment, I learned how to:

- Manipulate the DOM using JavaScript
- Handle browser events
- Create dynamic HTML elements
- Store data using LocalStorage
- Convert JavaScript objects to and from JSON
- Implement CRUD-like operations on client-side data
- Search and filter arrays
- Work with timestamps
- Implement light and dark themes
- Persist user preferences
- Import and export JSON files
- Use the FileReader and Blob APIs
- Implement HTML drag and drop
- Build responsive layouts using CSS

---

## Result

Successfully developed a responsive Notes Application using HTML, CSS, and JavaScript.

The application supports persistent note storage, categories, editing and deletion, completion tracking, searching and filtering, drag-and-drop reordering, dark/light themes, and JSON import/export without requiring a backend or database.

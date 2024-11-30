# Simple To-Do App

This project is a To-Do application that allows users to manage their tasks. The app is built with an Object-Oriented Programming (OOP) approach to ensure the code is modular and maintainable. 

## Functionality

The Simple To-Do App enables users to:
- **View and manage a list of tasks** with real-time updates.
- **Add new tasks** through a popup form with validation to ensure correct input.
- **Mark tasks as complete** to visually distinguish finished items with checkbox.
- **Delete tasks** that are no longer needed.
- Ensure **form resets** after successful submissions to improve user experience.

The app uses unique IDs for each task, generated with the `uuid` library, ensuring no two tasks conflict. 

## Technology

This project leverages modern web development tools and techniques, including:

### **JavaScript Modules**
- Organized the project into separate files for components and utilities.
- Used `import` and `export` to share and reuse code efficiently.

### **Object-Oriented Programming**
- **Todo Class**: Encapsulates logic for creating and managing individual tasks, including generating HTML and event handlers.
- **FormValidator Class**: Handles form validation, including input checks and resetting the form after submission.

### **UUID for Unique Identifiers**
- Implemented unique IDs for tasks using the `uuid` library to simulate backend-like ID generation.



## Deployment

This project is deployed on GitHub Pages:

[-CLICK HERE-](https://medfera.github.io/se_project_todo-app/)

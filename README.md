# To-Do List Web App

A dynamic to-do list application built with vanilla HTML, CSS, and JavaScript for managing daily tasks efficiently.

##  Features

- **Add Tasks**: Create new tasks with input validation
- **Mark Complete**: Toggle completion status with checkboxes
- **Delete Tasks**: Remove tasks with delete button
- **Live Statistics**: Real-time counters for total, pending, and completed tasks
- **Visual Feedback**: Shake animation for invalid input, strike-through for completed tasks
- **Empty State**: Clean placeholder when no tasks exist
- **Responsive Design**: Works on all devices

##  Tools and Tech Stack Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - DOM manipulation and event handling
- **VS Code** - Development environment
- **Live Server** - Local development server

##  Project Structure

```
todo-app/
├── index.html
├── styles.css
├── script.js
└── README.md
```

##  Functionalities Implemented

### Core Functions
- `addTodo()` - Adds new task to array and updates UI
- `displayTodoElement()` - Renders all tasks or empty state
- `createTodoElement()` - Creates individual task DOM elements
- `countTasks()` - Updates statistics counters
- `handleAddButton()` - Processes new task input with validation
- `shakeElement()` - Provides visual feedback for errors

### Event Handling
- Add button click events
- Checkbox change events for task completion
- Delete button click events
- Input validation with shake animation

### State Management
- `todoArray` - Stores all tasks with ID, text, and completion status
- Real-time UI updates without page refresh
- Dynamic statistics calculation

##  How to Run

1. Open `index.html` in your browser
2. Or use Live Server in VS Code for development

## Technical Implementation

- **DOM Manipulation**: Dynamic element creation and removal
- **Event Listeners**: Efficient event handling for user interactions
- **CSS Classes**: Toggle completion states and animations
- **Array Methods**: forEach, splice for data management
- **Input Validation**: Prevents empty task creation

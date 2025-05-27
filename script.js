let todoCounter = 1;
const statsTotal = document.getElementById("total");
const statsPending = document.getElementById("pending");
const statsCompleted = document.getElementById("completed");
const addButton = document.getElementsByClassName("add-button")[0];
const inputField = document.getElementsByClassName("todo-input")[0];
const todoListContainer = document.getElementById("todo-list");
const emptyList = document.getElementsByClassName("empty-state")[0];

let todoArray = [];

function countTasks() {
  let pending = 0;
  let completed = 0;
  let total = todoArray.length;

  todoArray.forEach((item) => {
    if (item.isCompleted) {
      completed++;
    } else {
      pending++;
    }
  });

  statsCompleted.textContent = completed;
  statsPending.textContent = pending;
  statsTotal.textContent = total;
}

function createTodoElement(todoItem, index) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");
  todoDiv.setAttribute("data-id", todoItem.id);

  if (todoItem.isCompleted) {
    todoDiv.classList.add("completed");
  }

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");
  checkbox.checked = todoItem.isCompleted;

  const todoSpan = document.createElement("span");
  todoSpan.textContent = todoItem.todo;
  todoSpan.classList.add("todo-text");
  if (todoItem.isCompleted) {
    todoSpan.classList.add("completed");
  }

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    todoArray.splice(index, 1);
    displayTodoElement();
    countTasks();
  });

  checkbox.addEventListener("change", () => {
    todoItem.isCompleted = checkbox.checked;
    todoSpan.classList.toggle("completed", checkbox.checked);
    todoDiv.classList.toggle("completed", checkbox.checked); // ✅ Toggle border class
    countTasks();
  });

  todoDiv.appendChild(checkbox);
  todoDiv.appendChild(todoSpan);
  todoDiv.appendChild(deleteButton);

  return todoDiv;
}

function displayTodoElement() {
  todoListContainer.innerHTML = "";

  if (todoArray.length > 0) {
    todoArray.forEach((todo, index) => {
      const todoElement = createTodoElement(todo, index);
      todoListContainer.appendChild(todoElement);
    });
  } else {
    todoListContainer.appendChild(emptyList);
  }
}

function addTodo(id, task, isCompleted = false) {
  const todo = { id, todo: task, isCompleted };
  todoArray.push(todo);
  todoCounter++;
  countTasks();
}

function shakeElement(elementToShake) {
  elementToShake.classList.add("shake");
  elementToShake.addEventListener(
    "animationend",
    () => {
      elementToShake.classList.remove("shake");
    },
    { once: true }
  );
}

function handleAddButton() {
  let todo = inputField.value.trim();
  if (!todo) {
    shakeElement(inputField);
  } else {
    addTodo(todoCounter, todo);
    inputField.value = "";
    displayTodoElement();
  }
}

addButton.addEventListener("click", handleAddButton);

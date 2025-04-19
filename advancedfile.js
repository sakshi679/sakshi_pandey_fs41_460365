const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const incompleteCount = document.getElementById("incompleteCount");

const showAllBtn = document.getElementById("showAll");
const showCompletedBtn = document.getElementById("showCompleted");
const showIncompleteBtn = document.getElementById("showIncomplete");
const sortBtn = document.getElementById("sortTasks");

let tasks = [];
let currentFilter = "all";

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: Date.now(),
    text,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
});

taskList.addEventListener("click", (e) => {
  const id = Number(e.target.closest("li")?.dataset?.id);

  if (e.target.classList.contains("delete")) {
    tasks = tasks.filter(task => task.id !== id);
  }

  if (e.target.classList.contains("toggle")) {
    tasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  renderTasks();
});

showAllBtn.addEventListener("click", () => {
  currentFilter = "all";
  renderTasks();
});

showCompletedBtn.addEventListener("click", () => {
  currentFilter = "completed";
  renderTasks();
});

showIncompleteBtn.addEventListener("click", () => {
  currentFilter = "incomplete";
  renderTasks();
});

sortBtn.addEventListener("click", () => {
  tasks = [...tasks].sort((a, b) => a.text.localeCompare(b.text));
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks.filter(task => {
    if (currentFilter === "completed") return task.completed;
    if (currentFilter === "incomplete") return !task.completed;
    return true; 
  });

  filteredTasks.map(task => {
    const li = document.createElement("li");
    li.dataset.id = task.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.classList.add("toggle");

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.style.textDecoration = "line-through";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);
  });

  updateCounters();
}


function updateCounters() {
  totalCount.textContent = tasks.length;
  completedCount.textContent = tasks.filter(t => t.completed).length;
  incompleteCount.textContent = tasks.filter(t => !t.completed).length;
}

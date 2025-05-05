const apiUrl = "https://jsonplaceholder.typicode.com/todos";
const todosPerPage = 10; // Items per page
let currentPage = 1;

// Fetch todos with pagination
async function fetchTodos(page) {
  const start = (page - 1) * todosPerPage;
  const response = await fetch(`${apiUrl}?_start=${start}&_limit=${todosPerPage}`);
  const todos = await response.json();
  return todos;
}

// Render todos in the DOM
function renderTodos(todos) {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // Clear the previous list

  todos.forEach(todo => {
    const listItem = document.createElement("li");
    listItem.textContent = todo.title;
    todoList.appendChild(listItem);
  });
}

// Render pagination buttons
function renderPagination(totalItems) {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(totalItems / todosPerPage);

  pagination.innerHTML = ""; // Clear previous pagination buttons

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.onclick = () => {
      currentPage = i;
      loadTodos(currentPage);
    };
    pagination.appendChild(button);
  }
}

// Fetch the total number of todos to calculate pagination
async function fetchTotalTodos() {
  const response = await fetch(apiUrl);
  const todos = await response.json();
  return todos.length;
}

// Load todos and pagination
async function loadTodos(page) {
  const todos = await fetchTodos(page);
  renderTodos(todos);
  const totalTodos = await fetchTotalTodos();
  renderPagination(totalTodos);
}

// Initial load
loadTodos(currentPage);

const apiUrl = "https://jsonplaceholder.typicode.com/users";
const usersPerPage = 6;
let currentPage = 1;

async function fetchUsers(page) {
  const response = await fetch(`${apiUrl}?_page=${page}&_limit=${usersPerPage}`);
  const users = await response.json();
  return users;
}

function renderUsers(users) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";
  users.forEach(user => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${user.name}</strong><br>Email: ${user.email}<br>City: ${user.address.city}`;
    userList.appendChild(listItem);
  });
}

function renderPagination(totalItems) {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(totalItems / usersPerPage);

  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.onclick = () => {
      currentPage = i;
      loadUsers(currentPage);
    };
    pagination.appendChild(button);
  }
}

async function fetchTotalUsers() {
  const response = await fetch(apiUrl);
  const users = await response.json();
  return users.length;
}

async function loadUsers(page) {
  const users = await fetchUsers(page);
  renderUsers(users);
  const totalUsers = await fetchTotalUsers();
  renderPagination(totalUsers);
}

loadUsers(currentPage);

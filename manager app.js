const firebaseConfig = {
  apiKey: "AIzaSyARKQQnUI9gc0bupsqX7mHTtZFVPLhytMk",
  authDomain: "manager-app-51d59.firebaseapp.com",
  projectId: "manager-app-51d59",
  storageBucket: "manager-app-51d59.appspot.com",
  messagingSenderId: "218434623615",
  appId: "1:218434623615:web:3229fa68b991b45066074a",
  measurementId: "G-E7Y9CP0D55"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const authSection = document.getElementById("auth-section");
const taskSection = document.getElementById("task-section");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const logoutBtn = document.getElementById("logoutBtn");
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

let userToken = "";

signupBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Signup successful!");
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
});

loginBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userToken = userCredential.user.uid;
      authSection.style.display = "none";
      taskSection.style.display = "block";
      loadTasks();
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});

logoutBtn.addEventListener("click", () => {
  auth.signOut().then(() => {
    authSection.style.display = "block";
    taskSection.style.display = "none";
  });
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const task = { title, body: description, userId: userToken };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then(() => {
      loadTasks();
      taskForm.reset();
    });
});

function loadTasks() {
  taskList.innerHTML = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const filtered = data.filter((d) => d.userId === userToken);
      taskList.innerHTML = "";

      filtered.forEach((task) => {
        const card = document.createElement("div");
        card.className = "card mb-2";
        card.innerHTML = `
          <div class="card-body">
            <h5>${task.title}</h5>
            <p>${task.body}</p>
            <button onclick="markComplete(${task.id})" class="btn btn-sm btn-success">✅</button>
            <button onclick="editTask(${task.id})" class="btn btn-sm btn-warning">📝</button>
            <button onclick="deleteTask(${task.id})" class="btn btn-sm btn-danger">❌</button>
          </div>
        `;
        taskList.appendChild(card);
      });
    });
}
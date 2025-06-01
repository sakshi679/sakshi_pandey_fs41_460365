import { app } from './firebase-config.js';
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase(app);

function registerUser() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!name || !email || !password) {
    alert('Please fill in all fields!');
    return;
  }

  // Create unique ID for user (timestamp based)
  const userId = Date.now();

  set(ref(db, 'users/' + userId), {
    name,
    email,
    password
  })
  .then(() => {
    alert('Registration Successful! Please log in.');
    window.location.href = 'login.html';
  })
  .catch((error) => {
    alert('Error: ' + error.message);
  });
}

window.registerUser = registerUser;  // Make function accessible in HTML button

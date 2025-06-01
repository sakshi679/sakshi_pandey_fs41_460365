import { app } from './firebase-config.js';
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase(app);

async function loginUser() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert('Please fill in all fields!');
    return;
  }

  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, 'users'));
    if (snapshot.exists()) {
      const users = snapshot.val();
      let loggedIn = false;

      // Loop through users to check credentials
      for (const userId in users) {
        if (users[userId].email === email && users[userId].password === password) {
          loggedIn = true;
          // Store logged in user info in localStorage for dashboard check
          localStorage.setItem('loggedInUser', JSON.stringify(users[userId]));
          break;
        }
      }

      if (loggedIn) {
        window.location.href = 'dashboard.html';
      } else {
        alert('Wrong credentials! Try again.');
      }
    } else {
      alert('No users found, please register first.');
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
}

window.loginUser = loginUser; // make function available to HTML

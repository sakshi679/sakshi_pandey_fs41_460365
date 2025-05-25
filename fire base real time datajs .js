const tableBody = document.querySelector("#userTable tbody");
const errorDiv = document.getElementById("error");


const firebaseURL = "https://userlistapp-21360-default-rtdb.firebaseio.com/users.json";
;

async function fetchUsers() {
  try {
    const response = await fetch(firebaseURL);

    if (!response.ok) {
      throw new Error("Failed to fetch data. HTTP Status: " + response.status);
    }

    const data = await response.json();

    if (!data) {
      tableBody.innerHTML = "<tr><td colspan='2'>No users found</td></tr>";
      return;
    }

    // Add each user to table
    for (let id in data) {
      const user = data[id];
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;

      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;

      row.appendChild(nameCell);
      row.appendChild(emailCell);
      tableBody.appendChild(row);
    }

  } catch (error) {
    errorDiv.textContent = "Error: " + error.message;
  }
}

fetchUsers();

const form = document.getElementById("feedbackForm");
const statusMsg = document.getElementById("status");

// Replace this with your Firebase DB URL
const firebaseURL = "https://userlistapp-21360-default-rtdb.firebaseio.com/feedbacks.json";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const message = document.getElementById("message").value.trim();

  const feedbackData = {
    username,
    message
  };

  fetch("https://feedback-app-99ff7-default-rtdb.firebaseio.com/feedbacks.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(feedbackData)
  })
    .then((response) => {
      if (response.ok) {
        statusMsg.textContent = "✅ Feedback submitted successfully!";
        statusMsg.style.color = "green";
        form.reset();
      } else {
        throw new Error("Failed to submit feedback");
      }
    })
    .catch((error) => {
      statusMsg.textContent = "❌ Error: " + error.message;
      statusMsg.style.color = "red";
    });
});

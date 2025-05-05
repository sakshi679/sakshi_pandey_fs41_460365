import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, get, update, remove } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCS3Sb9e9G6C84GH97GSurfG1q7-nnRV7I",
    authDomain: "liberary-management-project.firebaseapp.com",
    databaseURL: "https://liberary-management-project-default-rtdb.firebaseio.com",
    projectId: "liberary-management-project",
    storageBucket: "liberary-management-project.firebasestorage.app",
    messagingSenderId: "182449810696",
    appId: "1:182449810696:web:1515200e5404c81e8150bd",
    measurementId: "G-4NS4XKXV82"

  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  // State variables
  let page = 1;
  let itemsPerPage = 5;
  let currentSort = "title";
  let filterGenre = "";
  let filterAuthor = "";

  function addBook(id, book) {
    console.log("Adding book:", id, book);  // Optional: For debugging
    set(ref(db, "books/" + id), book);
  }
  

  // Function to add a book to Firebase
  function addBook(id, book) {
    set(ref(db, "books/" + id), book);
  }

  // Function to load books from Firebase
  function loadBooks() {
    get(ref(db, "books"))
      .then(snap => {
        const all = snap.val() || {};
        const arr = Object.values(all)
          .filter(b => (filterGenre ? b.genre === filterGenre : true) && (filterAuthor ? b.author === filterAuthor : true))
          .sort((a, b) => a[currentSort] > b[currentSort] ? 1 : -1);
        const slice = arr.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        displayBooks(slice);
        saveState();
      })
      .catch(console.error);
  }

  // Function to display books
  function displayBooks(books) {
    const container = document.getElementById("bookListContainer");
    container.innerHTML = "";
    books.forEach(b => {
      const li = document.createElement("li");
      li.textContent = `${b.title} by ${b.author}`;
      container.appendChild(li);
    });
  }

  // Function to save the current state
  function saveState() {
    localStorage.page = page;
    localStorage.currentSort = currentSort;
    localStorage.filterGenre = filterGenre;
    localStorage.filterAuthor = filterAuthor;
  }

  // Function to load the saved state
  function loadState() {
    page = +localStorage.page || 1;
    currentSort = localStorage.currentSort || "title";
    filterGenre = localStorage.filterGenre || "";
    filterAuthor = localStorage.filterAuthor || "";
  }

  // Event listeners for UI actions
  document.getElementById("addBookForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    const id = Date.now().toString();
    addBook(id, {
      title: f.title.value,
      author: f.author.value,
      genre: f.genre.value,
      publishedYear: +f.publishedYear.value,
      available: f.available.checked
    });
    loadBooks();
    f.reset();
  });

  document.getElementById("filterGenre").addEventListener("change", e => {
    filterGenre = e.target.value;
    loadBooks();
  });

  document.getElementById("filterAuthor").addEventListener("change", e => {
    filterAuthor = e.target.value;
    loadBooks();
  });

  document.getElementById("sortField").addEventListener("change", e => {
    currentSort = e.target.value;
    loadBooks();
  });

  document.getElementById("prevPage").addEventListener("click", () => {
    if (page > 1) page--, loadBooks();
  });

  document.getElementById("nextPage").addEventListener("click", () => {
    page++, loadBooks();
  });

  // Initial load
  loadState();
  loadBooks();
});

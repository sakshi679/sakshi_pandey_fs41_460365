import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDtqRiJ9uErXq51ZnGXIHH4dIzl4Hgwb3U",
  authDomain: "novel-list-project.firebaseapp.com",
  projectId: "novel-list-project",
  storageBucket: "novel-list-project.firebasestorage.app",
  messagingSenderId: "446504626730",
  appId: "1:446504626730:web:0244741def1d89ab3a7153",
  measurementId: "G-KKZ3JPWT26"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const yearFilter = document.getElementById('yearFilter');
const searchInput = document.getElementById('search');
const sortAscBtn = document.getElementById('sortAsc');
const sortDescBtn = document.getElementById('sortDesc');
const novelList = document.getElementById('novelList').getElementsByTagName('tbody')[0];

async function loadBooks(year = '', search = '', order = 'asc') {
  let booksQuery = query(collection(db, 'novels'));

  if (year) {
    booksQuery = query(booksQuery, where("release_year", "==", Number(year)));
  }

  booksQuery = query(booksQuery, orderBy("price", order));

  const snapshot = await getDocs(booksQuery);
  let novels = snapshot.docs.map(doc => doc.data());

  if (search) {
    const term = search.toLowerCase();
    novels = novels.filter(n =>
      n.title.toLowerCase().includes(term) ||
      n.author.toLowerCase().includes(term)
    );
  }

  displayBooks(novels);
}

function displayBooks(novels) {
  novelList.innerHTML = "";
  novels.forEach(n => {
    const row = novelList.insertRow();
    row.insertCell(0).textContent = n.title;
    row.insertCell(1).textContent = n.author;
    row.insertCell(2).textContent = `$${n.price.toFixed(2)}`;
    row.insertCell(3).textContent = n.release_year;
    row.insertCell(4).textContent = n.genre;
  });
}

yearFilter.addEventListener('change', () => {
  loadBooks(yearFilter.value, searchInput.value, sortAscBtn.disabled ? 'desc' : 'asc');
});
searchInput.addEventListener('input', () => {
  loadBooks(yearFilter.value, searchInput.value, sortAscBtn.disabled ? 'desc' : 'asc');
});
sortAscBtn.addEventListener('click', () => {
  sortAscBtn.disabled = true;
  sortDescBtn.disabled = false;
  loadBooks(yearFilter.value, searchInput.value, 'asc');
});
sortDescBtn.addEventListener('click', () => {
  sortAscBtn.disabled = false;
  sortDescBtn.disabled = true;
  loadBooks(yearFilter.value, searchInput.value, 'desc');
});

window.addEventListener('DOMContentLoaded', () => {
  sortDescBtn.disabled = true;
  loadBooks();
});


const heading = document.getElementById('main-heading');
heading.textContent = "Welcome to the DOM World!";

const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'blue';
}

const container = document.querySelector('.container');
container.style.backgroundColor = 'yellow';

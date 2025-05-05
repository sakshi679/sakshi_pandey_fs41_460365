const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
let page = 1;
const limit = 10;

async function fetchImages() {
  loader.style.display = 'block';
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    const data = await res.json();
    data.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.url;
      img.alt = photo.title;
      gallery.appendChild(img);
    });
    page++;
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    loader.style.display = 'none';
  }
}

function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    fetchImages();
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('DOMContentLoaded', fetchImages);

const item2 = document.getElementById("item2");

item2.addEventListener("click", function () {
  
  alert(item2.parentNode.textContent);

  if (item2.previousElementSibling) {
    console.log("Previous:", item2.previousElementSibling.textContent);
  }

  if (item2.nextElementSibling) {
    console.log("Next:", item2.nextElementSibling.textContent);
  }
});

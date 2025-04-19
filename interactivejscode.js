const div = document.getElementById("myDiv");
const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const bgButton = document.getElementById("bgButton");
const textButton = document.getElementById("textButton");

// Validate color using dummy element
function isValidColor(color) {
  const temp = document.createElement("div");
  temp.style.color = color;
  return temp.style.color !== "";
}

bgButton.addEventListener("click", () => {
  const color = colorInput.value.trim();
  if (isValidColor(color)) {
    div.style.backgroundColor = color;
  } else {
    alert("Invalid color name!");
  }
});

textButton.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (text) {
    div.textContent = text;
  } else {
    alert("Please enter some text!");
  }
});

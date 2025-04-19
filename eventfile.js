
const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

const outerBtn = document.getElementById("outerBtn");
const middleBtn = document.getElementById("middleBtn");
const innerBtn = document.getElementById("innerBtn");

outer.addEventListener("click", () => alert("Outer Div Clicked (Bubbling)"));
middle.addEventListener("click", () => alert("Middle Div Clicked (Bubbling)"));
inner.addEventListener("click", () => alert("Inner Div Clicked (Bubbling)"));

outer.addEventListener("click", () => alert("Outer Div Clicked (Capturing)"), true);
middle.addEventListener("click", () => alert("Middle Div Clicked (Capturing)"), true);
inner.addEventListener("click", () => alert("Inner Div Clicked (Capturing)"), true);

// Buttons inside each div
outerBtn.addEventListener("click", (e) => {
  alert("Outer Button Clicked");
});
middleBtn.addEventListener("click", (e) => {
  alert("Middle Button Clicked");
});
innerBtn.addEventListener("click", (e) => {
  alert("Inner Button Clicked");
  e.stopPropagation(); 
});

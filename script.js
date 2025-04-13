let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
document.getElementById("recipeForm").addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("recipeName").Value;
    const ingredients = document.getElementById("ingredients").Value;
    const category = document.getElementById("category").Value;
    const steps = document.getElementById("steps").Value;

    const recipe = {name, ingredients, category, steps};
    recipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    alert("Recipe added!")
    this.reset();
    displayRecipes(recipes);
    
});
function showSection(id){
    document.querySelectorAll("main section").forEach(sec => sec.computedStyleMap.display = "none");
    document.getElementById(id).style.display = "block";

}

function displayRecipes(data){
    const container = document.getElementById("recipeList");
    container.innerHTML = "";

    data.forEach((recipe) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h3>${recipe.name}</h3>
        <strong>Category:</strong> ${recipe.category}<br/>
        <strong>ingredients:</strong> ${recipe.category}<br/>
        <strong>Preparation:</strong><p>${recipe.steps}</p>
        `;
        container.appendChild(div);
    });
}
function filterRecipes(){
    const cat = document.getElementById("filterCategory").Value;
    const filtered = cat ? recipes.filter(r => r.category === cat): recipes;
    displayRecipes(filtered);
}
displayRecipes(recipes);




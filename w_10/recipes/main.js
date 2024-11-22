import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNumber = random(listLength);
    return list[randomNumber];
}

function recipeTemplate(recipe) {
    return `
    <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" />
        <div class="recipe-info">
            <span class="category">${recipe.tags.join(", ")}</span>
            <h2>${recipe.name}</h2>
            <span
                class="rating"
                role="img"
                aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${generateStars(recipe.rating)}
            </span>
            <div class="recipe-description">
                <p>${recipe.description}</p>
            </div>
        </div>
    </div>`;
}

function generateStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "⭐" : "☆";
    }
    return stars;
}

function renderRecipes(list) {
    const recipesContainer = document.querySelector("#recipes");
    const recipesHtml = list.map(recipeTemplate).join("");
    recipesContainer.innerHTML = recipesHtml;
}

function filter(query) {
	const filtered = recipes.filter(filterFunction)
	// sort by name
	const sorted = filtered.sort(sortFunction)
		return sorted
}

function searchRecipes(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    renderRecipes(filteredRecipes);
}

function init() {
    console.log(recipes);
    const searchBar = document.querySelector(".search-bar");
    searchBar.addEventListener("input", searchRecipes);

    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

init();

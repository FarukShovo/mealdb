function searchFood() {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
        `;

    fetch(url)
        .then(response => response.json())
        .then(data => displayFood(data.meals));



}
const displayFood = meals => {

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {
        const searchResult = document.getElementById('search-result');
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>No result found</h1>
        `;
        searchResult.appendChild(div);
    }
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div)
    })
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetais(data.meals[0]))
}

const displayMealDetais = meal => {
    //to show the details on top and go to display top immedietly 
    window.scrollTo(0, 40)
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    `;
    mealDetails.appendChild(div);
}
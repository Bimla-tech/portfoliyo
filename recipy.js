const searchBox=document.querySelector('.searchBox');
const searchBtn=document.querySelector('.searchBtn');
const reciptContainer=document.querySelector('.recipe-container');
const recipeDetail=document.querySelector('.recipe-detail');
const recipeCloseBtn=document.querySelector('.recipe-close-btn');

const fetchRecipes=async(query ) => {
    reciptcontainer.innerHTML="<h2>Fetching recipes..</h2>";
    const data=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${query}');
    const response=await data.json();


    reciptcontainer.innerHTML="";
    response.meals.forEach(meal=>{
      const recipeDiv=document.createElement('div');
      recipeDiv.classList.add('recipe');
      recipeDiv.innerHTML='<img src="${meal.strMealThumb}"><h3>${meal.strMeal}</h3><p><span>${meal.strArea}</span>Dish</p><p>Belong to<span>${meal.strCategory}</span>Category<p/>'
     const button=document.createElement('button');
     button.TextContent="view Recipe";
     recipeDiv.appendChild(button);
     //add event listener to recipe button
     button.addEventListener('click',()=>{
       openRecipePopup(meal);
     });
       reciptContainer.appendChild(recipeDiv);
    });
}
const openRecipePopup=(meal)=>{
  recipeDetail.textContent='<h2>${meal.str'
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const searchInput=searchBox.value.trim();

    fetchRecipes(searchInput);
});
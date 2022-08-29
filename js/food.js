const loadFood= (search)=>{
  const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=>res.json())
    .then(data => displayFood(data.meals))
    .catch(error=>console.log(error))
}

const displayFood=(foods)=>{

    const foodContainer=document.getElementById('food-container')
    foodContainer.innerHTML=``
for (const food of foods) {
    const mealDiv=document.createElement('div')
    console.log(food)
    mealDiv.classList.add('col') 
    mealDiv.innerHTML=`
    <div class="card" onclick='foodDetails(${food.idMeal})'>
      <img src="${food.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"}">${food.strMeal}</h5>
        <p class="card-text">${food.strInstructions.slice(0,200)}</p>
      </div>
    </div>
    
    `
    foodContainer.appendChild(mealDiv)

}
}

const searchFood=()=>{
const  searchInputId=document.getElementById('search-input')
const searchInputText= searchInputId.value
console.log(searchInputText)
loadFood(searchInputText)
searchInputId.value='';
}

const foodDetails=(idMeal)=>{

  const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`

  fetch(url)
  .then(res=>res.json())
  .then(data=>displayFoodDetails(data.meals[0]))
  .catch(error=>console.log(error))
}

const displayFoodDetails=food=>{

  const foodContainerdetails=document.getElementById('food-container-details')
  foodContainerdetails.innerHTML=``

  const mealDiv=document.createElement('div')
  console.log(food)
  mealDiv.classList.add('col') 
  mealDiv.innerHTML=`
  <div class="card" onclick='foodDetails(${food.idMeal})'>
    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"}">${food.strMeal}</h5>
      <p class="card-text">${food.strInstructions}</p>
    </div>
  </div>
  
  `
  foodContainerdetails.appendChild(mealDiv)


  
}


// click handler on search section 
document.getElementById('searchBtn').addEventListener('click', clickEvent => {

    let searchValue = document.getElementById('input').value ;
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchValue)
    .then(res=>res.json())
    .then(data=>getInfo(data.meals))//getinfo fuction call by ES6
    
})

////function declaration
const getInfo = name =>{
    if (name === null) {
        
        const div = document.createElement('div');
            const foodCarts = `
                    <h3 class="text-info"> I will kill you if you search this type of food again. Thank you!!</h3>
            `
            div.innerHTML = foodCarts;
            const mainDiv = document.getElementById('main');
            mainDiv.appendChild(div);
    }else{
        ////adding for each for array element
        name.forEach(food => {
            const foodName = food.strMeal;
            const imgUrl = food.strMealThumb;
            const foodId = food.idMeal;
            const div = document.createElement('div');
            const foodCarts = `
                <div onclick ="getDetails(${foodId},'${imgUrl}','${foodName}')" id='foodCart' class = 'foodCart'>
                    <img src="${imgUrl}" alt="">
                    <h3>${foodName}</h3>
                </div>
            `
            div.innerHTML = foodCarts;
            div.className = 'foodCarts';
            const mainDiv = document.getElementById('main');
            mainDiv.appendChild(div);
        });
}
}

////declaring getDetails funtion for food ingredient
const getDetails =(foodId , imgUrl, foodName) =>{
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+foodId)
    .then(res=>res.json())
    .then(data=>{
            //storing food ingredient to variable
            const ingredient1= data.meals[0].strIngredient1;
            const ingredient2= data.meals[0].strIngredient2;
            const ingredient3= data.meals[0].strIngredient3;
            const ingredient4= data.meals[0].strIngredient4;
            const ingredient5= data.meals[0].strIngredient5;
            const ingredient6= data.meals[0].strIngredient6;
            const ingredient7= data.meals[0].strIngredient7;
            const ingredient8= data.meals[0].strIngredient8;
            const ingredient9= data.meals[0].strIngredient9;
            const li = `
            <div class = 'foodCart half-width'>
                <img src="${imgUrl}" alt="">
                <h3>${foodName}</h3>
            </div>
            <div class = 'half-width'>
                <h1>Meal Ingredient</h1>
                <ul>
                    <li>${ingredient1}</li>
                    <li>${ingredient2}</li>
                    <li>${ingredient3}</li>
                    <li>${ingredient4}</li>
                    <li>${ingredient5}</li>
                    <li>${ingredient6}</li>
                    <li>${ingredient7}</li>
                    <li>${ingredient8}</li>
                    <li>${ingredient9}</li>
                </ul>
            </div>
            `
        const div = document.createElement('div');
        div.innerHTML = li;
        div.className='cartInfo';
        const foodDetailsDiv = document.getElementById('foodDetails');
        foodDetailsDiv.appendChild(div); 
    
    })
}

//thank you!!
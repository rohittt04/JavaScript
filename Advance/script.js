// eg 1
document.getElementById("changeTextButton").addEventListener('click', function() {
    let paragrph = document.getElementById("MyParagraph");
    paragrph.textContent = "the paragraph is changed"
    
})

//eg 2

document.getElementById("HighLightFirstCity").addEventListener('click', function(){
    let CityList = document.getElementById("citiesList");
    CityList.firstElementChild.classList.add('highlight')
});

// eg 3
document.getElementById("ChangeOrder").addEventListener('click', function(){
    let CoffeeType  = document.getElementById("CoffeeType");
    CoffeeType.textContent = "Espresso";
})

//eg 4
document.getElementById("addNewItem").addEventListener('click', function(){

    let newItem = document.createElement("li")
    newItem.textContent = "Honey"
    document.getElementById("ShoppingList").appendChild(newItem);

})

//eg 5
document.getElementById("removeLastTask").addEventListener('click', function(){
    let TaskList = document.getElementById("TaskList")
    TaskList.lastElementChild.remove();
})

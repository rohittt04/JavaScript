// click events

// eg 1
document.getElementById("changeTextButton").addEventListener('click', function () {
    let paragrph = document.getElementById("MyParagraph");
    paragrph.textContent = "the paragraph is changed"

})

//eg 2

document.getElementById("HighLightFirstCity").addEventListener('click', function () {
    let CityList = document.getElementById("citiesList");
    CityList.firstElementChild.classList.add('highlight')
});

// eg 3
document.getElementById("ChangeOrder").addEventListener('click', function () {
    let CoffeeType = document.getElementById("CoffeeType");
    CoffeeType.textContent = "Espresso";
})

//eg 4
document.getElementById("addNewItem").addEventListener('click', function () {

    let newItem = document.createElement("li")
    newItem.textContent = "Honey"
    document.getElementById("ShoppingList").appendChild(newItem);

})

//eg 5
document.getElementById("removeLastTask").addEventListener('click', function () {
    let TaskList = document.getElementById("TaskList")
    TaskList.lastElementChild.remove();
})

//eg 6
document.getElementById("clickMeButton").addEventListener('dblclick', function () {
    alert("button clicked")
})

//eg 7
document.getElementById("TeaList").addEventListener('click', function(event){
      if(event.target ){
        alert("you selected: " + event.target.textContent );
      }
});

//eg 8 from handeling

document.getElementById("FeedBackForm").addEventListener('submit', function(event){
    event.preventDefault();
    let FeedBack = document.getElementById("feedBackInput").value;
    // alert(FeedBack);
    document.getElementById("feedBackDisplay").textContent = `your feedback is:  ${FeedBack}` 
})

//eg 9

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('domStatus').textContent =  "DOM Fully Loaded!!"
})

//eg 10

document.getElementById("ToggleHighlight").addEventListener('click', function(){
    let descriptinoText = document.getElementById("descriptionText");
    descriptinoText.classList.toggle('highlight')
})

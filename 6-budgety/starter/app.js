
//BUDGET CONTROLLER
var budgetController = (function() {

  // some code

})();




//UI CONTROLLER
var UIController = (function(){

  //some code

})();







/*   *********GLOBAL APP CONTROLLER*******************
// THE CONTROLLER MEANING THE PERSON CONTROLLING THE APP
*/
var controller = (function(budgetCtrl, UICtrl){


/*for the input field, what we want to happen when somebody
  enters it, or clicks is with a mouse is below
*/
var ctrlAddItem = function(){
  //1. get the input field input data

  //2/.  add the item to the budget CONTROLLER

  // 3. add item to the UI

  //4. caculate the budget__title


  // 5. disiplay the budget to the UI
console.log("heyjkl")
}

document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

document.addEventListener("keypress", function(event){
    //definine which key to respond to usein gthe keycode property
    //on the event object
      if (event.keyCode === 13  || event.which === 13){
        console.log("enter");
      }

  });

})(budgetController, UIController);

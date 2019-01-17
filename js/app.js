// Budget controller
var budgetController = (function() {
  // Some code
})();

// UI Controller
var UIController = (function() {

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// Global app controller
var controller = (function(budgetCtrl, UIctrl) {

  var setUpEventListeners = function() {
    var DOM = UIctrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    // TODO: 1. Get the field input data
    var input = UIController.getInput();

    // TODO: 2. Add the item to the budget controller

    // TODO: 3. Add the item to the UI

    // TODO: 4. Calculate budget

    //// TODO: 5. display the budget on the UI
  };

  return {
    init: function(){
      console.log('Application has started.');
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();

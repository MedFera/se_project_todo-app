class FormValidator {
    /*
    - Its constructor should accept two parameters: the first is a settings 
    object that stores the necessary selectors and classes; the second takes 
    a form element to be validated.
    - It should have private methods for processing the form, which include: 
    checking the field's validity, changing the state of the Submit button, 
    and adding all the necessary handlers.
    - It should have a public method enableValidation(), which enables form 
    validation.
    - It should have a public method to disable the submit button and reset 
    the form fields; see below for details. */


    constructor(settings, formEl){
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._formEl = formEl;
        this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
        //console.log(settings);
        //console.log(formEl);
    }

    _showInputError (inputElement, errorMessage) {
        const errorElementId = `#${inputElement.id}-error`;
        const errorElement = this._formEl.querySelector(errorElementId);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }
      
    _hideInputError (inputElement) {
        const errorElementId = `#${inputElement.id}-error`;
        const errorElement = this._formEl.querySelector(errorElementId);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    }

    _checkInputValidity(inputElement){
        if (!inputElement.validity.valid) {
            //FIX HERE
            //console.log(!inputElement.validity.valid);
            //console.log(inputElement.validationMessage)
            this._showInputError(
                inputElement,
                inputElement.validationMessage
            );
          } else {
            //FIX HERE
            this._hideInputError(inputElement);
          }
    }

    _hasInvalidInput (inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }

    _enableButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    }

    _disableButton(){
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    }

    _toggleButtonState (inputList) {
        if (this._hasInvalidInput(inputList)) {
            this._disableButton()
        } else {
            this._enableButton()
        }
    }

    _setEventListeners(){
        const inputList = Array.from(
            this._formEl.querySelectorAll(this._inputSelector),
          );

          this._toggleButtonState(inputList);
        
          inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(inputList, this._submitButton);
            });
          });
    }

    _resetValidation(){
        this._formEl.reset();
        this._disableButton();
    }

    enableValidation(){
        this._formEl.addEventListener("submit", (evt) =>{
            evt.preventDefault();
            this._resetValidation();
        })
        this._setEventListeners();
    }
}


export default FormValidator;
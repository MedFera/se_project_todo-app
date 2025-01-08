import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor({popupSelector, handleSubmitForm}){
        super({popupSelector});
        this._handleSubmitForm = handleSubmitForm;
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    }

    _getInputValues(){
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
        const values = {};
        this._inputList.forEach(input => {
            const key = input.name;
            const value = input.value;
            values[key] = value;
        });
        //console.log(values);
        return values;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmitForm(this._getInputValues());
            this.close()
        });
        
        this._popupCloseBtn.addEventListener("click", (evt) => {
            this.close();
        })
    }
}

export default PopupWithForm;
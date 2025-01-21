class Popup{
    constructor({popupSelector}){
        this._popupElement = document.querySelector(popupSelector);
        console.log(this._popupElement);
        this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
        
    }

    open(){
        this._popupElement.classList.add("popup_visible");
        this._popupElement.focus();
        this._popupElement.addEventListener("keydown", this._handleEscapeClose);
    }

    close(){
        this._popupElement.classList.remove("popup_visible");
        this._popupElement.removeEventListener("keydown", this._handleEscapeClose);
    }

    _handleEscapeClose = (evt) =>{
            if (evt.key === 'Escape') {
                this.close();
            }
    }


    setEventListeners(){
        this._popupElement.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("popup_visible")){
                this.close();
            }
        });
        
        this._popupCloseBtn.addEventListener("click", (evt) => {
            this.close();
        });
        
    }
}

export default Popup;
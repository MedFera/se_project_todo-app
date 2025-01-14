

class Todo {
    constructor(data, selector, handleCheckBox, handleDeleteBtn){
        this._data = data;
        this._templateElement = document.querySelector(selector);
        this._handleCheckBox = handleCheckBox;
        this._handleDeleteBtn = handleDeleteBtn;
    }

    _setEventListeners(){
        this._todoCheckboxEl.addEventListener("change", ()=>{
            this._data.completed = !this._data.completed
            this._handleCheckBox(this._data.completed);
        });

        this._todoDeleteBtn.addEventListener("click", () => {
            this._todoElement.remove();
            this._handleDeleteBtn(false);
        });

    }

    _generateCheckboxEl(){
        this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        this._todoLabel = this._todoElement.querySelector(".todo__label");
        this._todoCheckboxEl.checked = this._data.completed;
        this._todoCheckboxEl.id = `todo-${this._data.id}`;
        this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
    }

    _generateDeleteButtonEl(){
        this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    }

    _generateDates(){
        if (!isNaN(this._data.date)) {
            const todoDate = this._todoElement.querySelector(".todo__date");
            todoDate.textContent = `Due: ${this._data.date.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            })}`;
        }
        
    }

    getView(){
        this._todoElement = this._templateElement.content
            .querySelector(".todo")    
            .cloneNode(true);

        const todoNameEl = this._todoElement.querySelector(".todo__name");
        todoNameEl.textContent = this._data.name;

        this._generateCheckboxEl();
        this._generateDeleteButtonEl();
        this._setEventListeners();
        this._generateDates();

        return this._todoElement;
    }
}


export default Todo;
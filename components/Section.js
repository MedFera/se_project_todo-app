class Section {
    constructor({items, renderer, containerSelector}){
        this._items = items;
        this._renderer = renderer;
        //Selector used to access specific container
        this._container = document.querySelector(containerSelector);
    }

    addItem(element){
        this._container.appendChild(element);
    }

    /*
    const generateTodo = (data) => {
        const todo = new Todo(data, todoTemplate);
        const todoElement = todo.getView();
        return todoElement
    };
    */
    renderItems(){
        this._items.forEach(item => {
            const new_element = this._renderer(item);
            this.addItem(new_element);
        });
    }

    /*
    const populateTodo = (data, todoList) => {
        const todo = generateTodo(data);
        todoList.append(todo)
    }
    */
    

}

export default Section;
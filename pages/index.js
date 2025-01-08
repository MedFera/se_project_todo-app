import { initialTodos, validationConfig, todoTemplate} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");

const section = new Section({
items: initialTodos,
renderer: (item_data) => {
  const todo = new Todo(item_data, todoTemplate);
  const todoElement = todo.getView();
  return todoElement
},
containerSelector: ".todos__list",
})

const counter = new TodoCounter(initialTodos, ".counter__text");

const modalPopup = new PopupWithForm(
  {
    popupSelector: "#add-todo-popup", 
    handleSubmitForm: (values) => {
      const name = values["name"];
      const dateInput = values["date"];
      const completed = false;
      const id = uuidv4()
        
      // Create a date object and adjust for timezone
      const date = new Date(dateInput);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        
      const obj = { id, name, completed, date };
      const todo = new Todo(obj, todoTemplate);
      const todoElement = todo.getView();
      section.addItem(todoElement);
      
    }
  }
);



addTodoButton.addEventListener("click", () => {
  modalPopup.open();
});





section.renderItems();
modalPopup.setEventListeners();

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
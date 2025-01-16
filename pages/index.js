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


const counter = new TodoCounter(initialTodos, ".counter__text");

function counterHandlerCheckBox(completed) {
  counter.updateCompleted(completed);
}

function counterHandlerDeleteBtn(completed) {
  if (completed === true){
    counter.updateCompleted(!completed);
  }
  
  counter.updateTotal(false);
}

function generateTodo(enterData){
  const todo = new Todo(enterData, todoTemplate, counterHandlerCheckBox, counterHandlerDeleteBtn);
  const todoElement = todo.getView();
  return todoElement
}

const section = new Section({
items: initialTodos,
renderer: (item_data) => generateTodo(item_data),
containerSelector: ".todos__list",
})



const todoPopup = new PopupWithForm(
  {
    popupSelector: "#add-todo-popup", 
    handleSubmitForm: (values) => {
      const name = values["name"];
      const dateInput = values["date"];
      const completed = false;
      const id = uuidv4();
        
      // Create a date object and adjust for timezone
      const date = new Date(dateInput);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
        
      const obj = { id, name, completed, date };
      section.addItem(generateTodo(obj));
      counter.updateTotal(true);
    }
  }
);



addTodoButton.addEventListener("click", () => {
  todoPopup.open();
});





section.renderItems();
todoPopup.setEventListeners();

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
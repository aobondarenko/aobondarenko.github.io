const classNames = {  
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
//unique id`s
const list = document.getElementById('todo-list'); 
const itemCountSpan = document.getElementById('item-count'); 
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() { //on click
  //create a new TODO item container
  const todoItem = document.createElement('div'); 
  todoItem.classList.add(classNames.TODO_ITEM); //add class for ccs styling
  //create a checkbox for the TODO item 
  const checkbox = document.createElement('input'); //create ckeckbox
  checkbox.type = 'checkbox'; //checkbox type
  checkbox.classList.add(classNames.TODO_CHECKBOX); 
  checkbox.addEventListener('change', updateItemCount); // onclick call updateitemcount

  //create a text input for the TODO item
  const todoText = document.createElement('input'); //create new el to input text
  todoText.type = 'text';
  todoText.classList.add(classNames.TODO_TEXT); 

  //create a delete button for the TODO item
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add(classNames.TODO_DELETE); 
  deleteButton.onclick = function() { //event handler on the button
    //remove the todo item when the delete button is clicked
    list.removeChild(todoItem); 
  };

  //append the elements to the todo item container
  todoItem.appendChild(checkbox); 
  todoItem.appendChild(todoText); 
  todoItem.appendChild(deleteButton); 

  //append the todo item container to the list
  list.appendChild(todoItem); 

  //update the item count spans
  updateItemCount();
}

function updateItemCount() { //update amount of tasks & display
  const itemCount = list.getElementsByClassName(classNames.TODO_ITEM).length; //finds all items in the TODO list with the TODO_ITEM class and calculates their number = total number of items in the list
  itemCountSpan.textContent = itemCount; //update the displayed
  
  // get the number of checked checkboxes
  const checkedCount = list.querySelectorAll(`.${classNames.TODO_CHECKBOX}:checked`).length; //finds all checkedfrom TODO with class TODO_CHECKBOX & sum up.

  //valculate the number of unchecked checkboxes
  const uncheckedCount = itemCount - checkedCount; //num of unchecked
    uncheckedCountSpan.textContent = uncheckedCount; //update the displayed
}
let input = document.getElementById('user-input');
let div = document.getElementById('todo-list');
let enterBtn = document.getElementById('enter');

/*
 * This function creates and manipulates the elements on the todo list.
 * Inside this function are nested functions that toggle when the item has been completed,
 * that allow the list elementd to be edited,
 * and...
 */
function createNewListItem() {
    // BEGIN - CREATE NEW INPUT ELEMENT
    let label = document.createElement('label');
    label.className = "checkbox-container";
    let inputText = document.createTextNode(input.value);
    label.appendChild(inputText);
    
    // Only append the new ToDo item if the string added is longer than 0 characters
    if  (inputText.length > 0) {
        // ul.appendChild(item);
        div.appendChild(label);
        input.value = '';
    }
    // END - CREATE NEW INPUT ELEMENT

    // BEGIN - CREATE CHECKBOX ON INPUT ELEMENT
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    let checkmark = document.createElement('span');
    checkmark.className = "checkmark";
    label.appendChild(checkbox);
    label.appendChild(checkmark);
    // END - CREATE CHECKBOX ON INPUT ELEMENT

    // BEGIN - TOGGLING THE COMPLETION OF AN ITEM
    checkbox.addEventListener('click', function(e) {
        if (checkbox.checked == true) {
            // Sends the element to the bottom of the list
            div.appendChild(label);
        }
    });
    // END - TOGGLING THE COMPLETION OF AN ITEM

    // BEGIN - Create delete button on list item
    // let deleteBtn = document.createElement('button');
    // deleteBtn.className = "bttn";
    // deleteBtn.appendChild(document.createTextNode('X'));
    // item.appendChild(deleteBtn);

    // deleteBtn.addEventListener('click', function(e) {
    //     let btn = e.target;
    //     if (btn.tagName.toUpperCase() == 'BUTTON') {
    //         item.parentNode.removeChild(item);
    //     }
    // });
    // END - Create delete button on list item

    // BEGIN - Set list item as complete
    // function completeListItem() {
    //     item.classList.toggle('complete'); // CSS class named .complete
    // }

    // item.addEventListener('click', completeListItem);
    // END - Set list item as complete
}

/*
 * The functions that the events called to trigger the creation of a new item after clicking on "Enter" or pressing Enter on the keyboard.
 */
function createNewListItemOnClick() {
    createNewListItem();
}

function createNewListItemOnKeyPress(event) {
    // Use e.keyCode or e.which for browser support.
    // e.keyCode does not work on Firefox, but e.which does.
    if ((event.keyCode || event.which) === 13) {
        createNewListItem();
    }
}

enterBtn.addEventListener('click', createNewListItemOnClick);
input.addEventListener('keypress', createNewListItemOnKeyPress);
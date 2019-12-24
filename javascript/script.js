/*
 * TODO:
 * Remove the bullet point from new items created
 * Use bootstrap to put everything on the page into proper columns
 * Make the text input and "Enter" button better looking
 * Make the "X" button better-looking and space it between the string inside the new item
 */

let input = document.getElementById('user-input');
let ul = document.getElementById('todo-list');
let enterBtn = document.getElementById('enter');
let items = document.getElementsByTagName('li');

/*
 * This function primarly creates and also manipulates the list items.
 * Inside this function are nested functions that toggle when the item has been completed
 * and removing it from the list after pressing the 'X' button. 
 */
function createNewListItem() {
    // BEGIN - Create new list item
    let item = document.createElement('li'); 
    let itemValue = document.createTextNode(input.value);
    item.appendChild(itemValue);
    
    if (itemValue.length > 0) {
        ul.appendChild(item);
        input.value = '';
    }
    // END - Create new list item

    // BEGIN - Set list item as complete
    function completeListItem() {
        item.classList.toggle('complete'); // CSS class named .complete
    }

    item.addEventListener('click', completeListItem);
    // END - Set list item as complete

    // BEGIN - Create delete button on list item
    let deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    item.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function(e) {
        let btn = e.target;
        if (btn.tagName.toUpperCase() == 'BUTTON') {
            item.parentNode.removeChild(item);
        }
    });
    // END - Create delete button on list item
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
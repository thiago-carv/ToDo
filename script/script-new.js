const input = document.getElementById('userInput');
const enterButton = document.getElementById('enter');
const list = document.getElementById('list');

function createNewListItem() {
    // BEGIN - CREATE NEW INPUT ELEMENT
    let listItem = document.createElement('li');
    let inputText = document.createTextNode(input.value);
    listItem.appendChild(inputText);

    /* Only append if input value is not empty */
    if (inputText.length > 0) {
        list.appendChild(listItem);
        input.value = "";
    }
    // END - CREATE NEW INPUT ELEMENT

    // BEGIN - MARK ITEM AS COMPLETE
    function complete() {
        listItem.classList.toggle('done');
    }

    /* Allows for the item to be unmarked */
    listItem.addEventListener('click', complete);
    // END - MARK ITEM AS COMPLETE

    // BEGIN - DELETE BUTTON
    let deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('X'));
    listItem.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteItem);

    function deleteItem() {
        listItem.classList.add('delete');
    }
    // END - DELETE BUTTON
}

/*
 * Creates a new list item.
 * Function triggers when enter button is either clicked or button on keyboard is pressed.
 */
function createNewListItemOnClick() {
    createNewListItem();
}

function createNewListItemOnKeypress(event) {
    /* Using event.keyCode or event.which for browser support. */
    if ((event.keyCode || event.which) === 13) {
        createNewListItem();
    }
}

enterButton.addEventListener('click', createNewListItemOnClick);
input.addEventListener('keypress', createNewListItemOnKeypress);
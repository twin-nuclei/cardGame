import {createCardOverview} from "./overview.js";

let cardElements;

function createControls(cards) {
    cardElements = cards;
    let parent = document.getElementById('controls');
    let ascendingButton = createAscendingButton();
    let descendingButton = createDescendingButton();
    let submitButton = createSubmitButton();
    parent.appendChild(ascendingButton);
    parent.appendChild(descendingButton);
    parent.appendChild(submitButton);
}

function createAscendingButton() {
    let button = document.createElement('button');
    button.innerHTML = "Sort Ascending";
    button.id = "sortAsc";
    button.onclick = createOverviewAscending;
    return button;
}

function createDescendingButton() {
    let button = document.createElement('button');
    button.innerHTML = "Sort Descending";
    button.id = "sortDesc";
    button.onclick = createOverViewDescending;
    return button;
}

function createSubmitButton() {
    let button = document.createElement('button');
    button.innerHTML = "Submit";
    button.id = "submit";
    button.onclick = submit;
    return button;
}

function createOverviewAscending() {
    createCardOverview(sortAscending());
}

function createOverViewDescending() {

    createCardOverview(sortDescending());
}

function sortAscending() {
    return cardElements.slice().sort(compare);
}

function sortDescending() {
    return sortAscending().reverse();
}

function submit() {
    let selectedCardId = sessionStorage.getItem('selectedCardId');
    let allCardsData = JSON.parse(sessionStorage.getItem('dataAllCards'));
    let selectedCardData = allCardsData.filter(card => card.id.toString() === selectedCardId);
    let init = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(selectedCardData)
    }
    let response = fetch('localhost:8080/card', init)
        .then(resp => resp.json())
        .then(data => console.log('Success: ', data))
        .catch(error => console.log('Error: ', error))
}

function compare(a ,b) {
    if ( a.realName < b.realName ){
        return -1;
    }
    if ( a.realName > b.realName ){
        return 1;
    }
    return 0;
}

export { createControls }
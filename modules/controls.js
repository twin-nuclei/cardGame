import { cards } from "../main.js";
import {createCardOverview} from "./overview.js";

function createControls() {
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
    return cards.slice().sort(compare);
}

function sortDescending() {
    return sortAscending().reverse();
}

function submit() {
    return true;
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
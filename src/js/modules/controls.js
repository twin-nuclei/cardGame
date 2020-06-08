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
    button.className = 'btn btn-secondary';
    button.innerHTML = "Sort Ascending";
    button.id = "sortAsc";
    button.onclick = createOverviewAscending;
    return button;
}

function createDescendingButton() {
    let button = document.createElement('button');
    button.className = 'btn btn-secondary';
    button.innerHTML = "Sort Descending";
    button.id = "sortDesc";
    button.onclick = createOverViewDescending;
    return button;
}

function createSubmitButton() {
    let button = document.createElement('button');
    button.className = 'btn btn-danger';
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
    let myHeaders = new Headers();
    let myRequest = new Request('http://127.0.0.1:5000/receiveCard', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify(selectedCardData[0]),
        cache: 'default',
    });

    let response = fetch(myRequest)
        .then(resp => resp)
        .then(data => {
            console.log('Success: ', data);
            submitModal(data);
            sessionStorage.removeItem('selectedCardId');
        })
        .catch(error => {
            console.log(error);
            submitModal(error);
        })
}


function submitModal(response) {
    var test = response.status;
    if (response.status === 201) {
        var messageText = 'Your card was successfully submitted.'
    } else if (response.status === 400) {
        var messageText = 'You did not select a card yet. Please select a card'
    }
    else {
        var messageText = 'An error occured, please try again later.'
    }
    let modal = document.getElementById('submitModal');
    let span = document.getElementsByClassName('close')[0];
    let message = document.getElementsByClassName('message')[0];
    message.innerHTML = messageText;
    modal.style.display = 'block';
    span.onclick = () => modal.style.display = 'none';
    window.onclick = event => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
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
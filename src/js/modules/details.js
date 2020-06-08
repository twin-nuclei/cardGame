import { createCard } from "./cards.js";

let selectedCard;

function displayInDetailView(event) {
    let details = document.getElementById('details');
    while (details.hasChildNodes()) {
        details.removeChild(details.firstChild);
    }
    let cards = JSON.parse(sessionStorage.getItem('dataAllCards'));
    selectedCard = cards.filter(item => item.id.toString() === event.currentTarget.id);
    let cardCopy = createCard(selectedCard[0]);
    cardCopy.id = cards.length + 1;
    cardCopy.className = 'cardCopy border border-primary rounded';
    details.appendChild(cardCopy);
}


export { displayInDetailView };
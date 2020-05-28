import { createCard } from "./cards.js";


function displayInDetailView(event) {
    let details = document.getElementById('details');
    while (details.hasChildNodes()) {
        details.removeChild(details.firstChild);
    }
    let cards = JSON.parse(sessionStorage.getItem('dataAllCards'))
    let card = cards.filter(item => item.id.toString() === event.currentTarget.id);
    let cardCopy = createCard(card[0]);
    cardCopy.id = cards.length + 1;
    details.appendChild(cardCopy);
}


export { displayInDetailView };
import { createCard } from "./cards.js";

let selectedCard;

function displayInDetailView(event) {
    let details = document.getElementById('details');
    details.innerText = '';
    let cards = JSON.parse(sessionStorage.getItem('dataAllCards'));
    selectedCard = cards.filter(item => item.id.toString() === event.currentTarget.id);
    let cardCopy = createCard(selectedCard[0]);
    cardCopy.onclick = () => {};
    cardCopy.id = cards.length + 1;
    cardCopy.className = 'cardCopy card-body col-sm-12 border border-primary rounded';
    details.appendChild(cardCopy);
}


export { displayInDetailView };
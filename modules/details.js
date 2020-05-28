import { cards } from "./cards.js";


function displayInDetailView(event) {
    let details = document.getElementById('details');
    while (details.hasChildNodes()) {
        details.removeChild(details.firstChild);
    }
    let card = cards.filter(item => item.id.toString() === event.currentTarget.id);
    let cardCopy = card[0].cloneNode(true);
    details.appendChild(cardCopy);
}


export { displayInDetailView };
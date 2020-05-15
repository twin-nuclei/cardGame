import { cards } from "./cards.js";


function displayInDetailView(event) {
    let details = document.getElementById('details');
    while (details.hasChildNodes()) {
        details.removeChild(details.firstChild);
    }
    //todo: why does this not work with an arrow function?
    let card = cards.filter(function(item) {
        return item.id.toString() === event.currentTarget.id;
    });
    let cardCopy = card[0].cloneNode(true);
    details.appendChild(cardCopy);
}


export { displayInDetailView };
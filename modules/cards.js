import {displayInDetailView} from "./details.js";


const url = 'players.json';

function mapCards (players) {
    return players.map((player, id) => ({
            'id': id,
            ...player
        })
    )
}

function createCard(cardData) {
    let card = document.createElement('div');
    card.className = 'card';
    addCardContent(card, cardData);
    card.onclick = displayInDetailView;
    return card;
}

function addCardContent(card, cardData) {
    for (let prop in cardData) {
        let element = document.createElement('p');
        if (prop !== 'id') {
            element.innerHTML = prop + ': ' + cardData[prop];
            card.prop = cardData.prop;
        }
        element.className = 'cardElement';
        card.id = cardData.id;
        card.appendChild(element);
    }
}

function createCards(dataAllCards) {
    return dataAllCards.map(data => createCard(data));
}

function getCardData() {
    return new Promise( function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => resolve(JSON.parse(request.responseText));
        request.onerror = () => reject(request.response)
        request.responseType = 'text';
        request.send();
    })
}

async function createAllCards() {
    return await getCardData()
        .then(cardData => mapCards(cardData))
        .then(mappedCards => createCards(mappedCards))
        .then(result => result)
        .catch(err => console.log(err));
}

const cards = createAllCards();

export { cards };
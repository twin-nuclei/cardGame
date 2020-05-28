import {displayInDetailView} from "./details.js";


const url = 'players.json';


async function getCardData() { return await requestCardData() }

function saveToSession(dataAllCards) {
    sessionStorage.setItem('dataAllCards', JSON.stringify(dataAllCards));
}

function addIdToCardData (players) {
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
    console.log(typeof dataAllCards);
    return dataAllCards.map(data => createCard(data));
}

function requestCardData() {
    return new Promise( function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => resolve(JSON.parse(request.responseText));
        request.onerror = () => reject(request.response)
        request.responseType = 'text';
        request.send();
    })
}

function getAndSaveCardDataToSession() {
    getCardData()
        .then(dataAllCards => addIdToCardData(dataAllCards))
        //todo: ich dachte ich muss hier json.strinify benutzen, wenn ich das aber mache, bekomm ich später nach
        // json.parse wieder einen string zurück. Muss das nicht serialisiert werden, um es in der session zu speichern?
        .then(dataAllCards => saveToSession(dataAllCards));
}

export { createCard, createCards, getAndSaveCardDataToSession };
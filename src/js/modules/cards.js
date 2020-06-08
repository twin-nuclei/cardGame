import {displayInDetailView} from "./details.js";
import {markSelectedCardAndRefreshOverview} from "./overview.js";

const players = [
  {"realName": "Brianna Forbes", "playerName": "Dreamlurk The Unstoppable", "asset": "Foghammer Lead"},
  {"realName": "Darcy Candice Ball", "playerName": "Crystaldash", "asset": "Secret Glowquake Gold"},
  {"realName": "Hillary Gibbs", "playerName": "Speedsoul", "asset": "Shifting Rainshadow Iron"},
  {"realName": "Elva Becky Hammond", "playerName": "Seekvenom The Mystic", "asset": "Valkyries' Opal Adamant"},
  {"realName": "Enid Rose", "playerName": "Coincurse The Ghoul", "asset": "Jewelevil Bronze Of Goddesses"},
  {"realName": "Esmeralda Carrillo", "playerName": "Skulldart", "asset": "Yellow Orichalcum Of Paladins"}
];

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
    card.className = 'card col-4 m-1 border border-primary rounded';
    addCardContent(card, cardData);
    card.onclick = event => { displayInDetailView(event); markSelectedCardAndRefreshOverview(event)};
    return card;
}


function addCardContent(card, cardData) {
    for (let prop in cardData) {
        let element = document.createElement('p');
        if (prop !== 'id') {
            element.innerHTML = prop + ': ' + cardData[prop];
            card[prop] = cardData[prop];
        }
        element.className = 'cardElement';
        card.id = cardData.id;
        card.appendChild(element);
    }
}

function createCards(dataAllCards) {
    return dataAllCards.map(data => createCard(data));
}

const requestCardData = (url) => {
    return new Promise( function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = (response) => {
            console.log(request);
            resolve(JSON.parse(request.responseText));
        };
        request.onerror = () => reject(request.response)
        request.responseType = 'text';
        request.send();
    })
};

function getCardData() {
    return new Promise( function (resolve, reject) {
        resolve(players);
    })
}

const getAndSaveCardDataToSession = () => {
    return getCardData()
        .then(dataAllCards => addIdToCardData(dataAllCards))
        //todo: ich dachte ich muss hier json.strinify benutzen, wenn ich das aber mache, bekomm ich später nach
        // json.parse wieder einen string zurück. Muss das nicht serialisiert werden, um es in der session zu speichern?
        .then(dataAllCards => saveToSession(dataAllCards));
}

export { createCard, createCards, getAndSaveCardDataToSession };
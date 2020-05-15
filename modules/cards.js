import {displayInDetailView} from "./details.js";

const players = [
    {"realName": "Brianna Forbes", "playerName": "Dreamlurk The Unstoppable", "asset": "Foghammer Lead"},
    {"realName": "Darcy Candice Ball", "playerName": "Crystaldash", "asset": "Secret Glowquake Gold"},
    {"realName": "Hillary Gibbs", "playerName": "Speedsoul", "asset": "Shifting Rainshadow Iron"},
    {"realName": "Elva Becky Hammond", "playerName": "Seekvenom The Mystic", "asset": "Valkyries' Opal Adamant"},
    {"realName": "Enid Rose", "playerName": "Coincurse The Ghoul", "asset": "Jewelevil Bronze Of Goddesses"},
    {"realName": "Esmeralda Carrillo", "playerName": "Skulldart", "asset": "Yellow Orichalcum Of Paladins"},
];

const dataAllCards = players.map((player, id) => ({
        'id': id,
        'realName': player.realName,
        'playerName': player.playerName,
        'asset': player.asset,
    })
);

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
            card[prop] = cardData[prop];
        }
        element.className = 'cardElement';
        card.id = cardData['id'];
        card.appendChild(element);
    }
}

function createCards(dataAllCards) {
    let cards = [];
    for (let i = 0; i < dataAllCards.length; i++) {
        cards.push(createCard(dataAllCards[i]));
    }
    return cards;
}

const cards = createCards(dataAllCards);

export { cards };
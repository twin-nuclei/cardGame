

let cards;

function createCardOverview(allCards) {
    cards = allCards;
    let overview = document.getElementsByClassName('overview-row');
    while (overview[0].hasChildNodes()) {
        overview[0].removeChild(overview.firstChild);
    }
    cards.forEach(card => overview[0].appendChild(card));
}

function markSelectedCardAndRefreshOverview(event) {
    if (sessionStorage.getItem('selectedCardId')) {
        let previousSelectedCard = document.getElementById(sessionStorage.getItem('selectedCardId'))
        previousSelectedCard.className = 'card';
    }
    let selectedCard = document.getElementById(event.currentTarget.id);
    selectedCard.className = 'card selected';
    sessionStorage.setItem('selectedCardId', event.currentTarget.id);
}


export { createCardOverview, markSelectedCardAndRefreshOverview };
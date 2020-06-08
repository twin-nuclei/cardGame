

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
        previousSelectedCard.className = 'card col-sm m-1 border border-primary rounded';
    }
    let selectedCard = document.getElementById(event.currentTarget.id);
    selectedCard.className = 'card col-sm m-1 border border-warning rounded';
    sessionStorage.setItem('selectedCardId', event.currentTarget.id);
}


export { createCardOverview, markSelectedCardAndRefreshOverview };
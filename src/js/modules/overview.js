

let cards;

function createCardOverview(allCards) {
    cards = allCards;
    let overview = document.getElementsByClassName('overview-row');
    overview[0].innerHTML = ''
    requestAnimationFrame(() => {
        cards.forEach(card => overview[0].appendChild(card))});
}

function markSelectedCardAndRefreshOverview(event) {
    if (sessionStorage.getItem('selectedCardId')) {
        let previousSelectedCard = document.getElementById(sessionStorage.getItem('selectedCardId'))
        previousSelectedCard.className = 'card card card col-4 border border-primary rounded';
    }
    let selectedCard = document.getElementById(event.currentTarget.id);
    selectedCard.className = 'card card col-4 border border-primary rounded';
    sessionStorage.setItem('selectedCardId', event.currentTarget.id);
}


export { createCardOverview, markSelectedCardAndRefreshOverview };
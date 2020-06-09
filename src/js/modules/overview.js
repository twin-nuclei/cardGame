

let cards;

function createCardOverview(allCards) {
    cards = allCards;
    let overview = document.getElementsByClassName('overview-row');
    overview[0].innerHTML = ''
    requestAnimationFrame(() => {
        cards.forEach(card => {
            let cardColumn = document.createElement('div');
            cardColumn.className = 'col-sm-4 mt-3';
            cardColumn.appendChild(card);
            overview[0].appendChild(cardColumn);

        })});
}

function markSelectedCardAndRefreshOverview(event) {
    if (sessionStorage.getItem('selectedCardId')) {
        let previousSelectedCard = document.getElementById(sessionStorage.getItem('selectedCardId'))
        previousSelectedCard.className = 'card h-100 border border-primary rounded';
    }
    let selectedCard = document.getElementById(event.currentTarget.id);
    selectedCard.className = 'card h-100 border border-primary rounded';
    sessionStorage.setItem('selectedCardId', event.currentTarget.id);
}


export { createCardOverview, markSelectedCardAndRefreshOverview };
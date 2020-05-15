
function createCardOverview(cards) {
    let overview = document.getElementById('overview');
    while (overview.hasChildNodes()) {
        overview.removeChild(overview.firstChild);
    }
    for (let i = 0; i < cards.length; i++) {
        overview.appendChild(cards[i]);
    }
}


export { createCardOverview };

function createCardOverview(cards) {
    let overview = document.getElementById('overview');
    while (overview.hasChildNodes()) {
        overview.removeChild(overview.firstChild);
    }
    cards.forEach(card => overview.appendChild(card));
}


export { createCardOverview };
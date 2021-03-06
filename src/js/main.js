import {createCards, getAndSaveCardDataToSession} from "./modules/cards.js";
import {createCardOverview} from "./modules/overview.js";
import {createControls} from "./modules/controls.js";

const url = 'assets/players.json';


getAndSaveCardDataToSession()
    .then(() => {
        sessionStorage.removeItem('selectedCardId');
        const cards = createCards(JSON.parse(sessionStorage.getItem('dataAllCards')));
        createCardOverview(cards);
        createControls(cards);
    });








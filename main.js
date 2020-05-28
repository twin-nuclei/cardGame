import {createCards, getAndSaveCardDataToSession } from "./modules/cards.js";
import {createCardOverview} from "./modules/overview.js";
import {createControls} from "./modules/controls.js";

getAndSaveCardDataToSession();
const cards = createCards(JSON.parse(sessionStorage.getItem('dataAllCards')));
createCardOverview(cards);
createControls();

export { cards };





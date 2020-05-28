import {cards} from "./modules/cards.js";
import {createCardOverview} from "./modules/overview.js";
import {createControls} from "./modules/controls.js";

cards.then((cardData) => {
    createCardOverview(cardData);
    createControls();
});




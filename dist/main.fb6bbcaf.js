// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/modules/details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayInDetailView = displayInDetailView;

var _cards = require("./cards.js");

var selectedCard;

function displayInDetailView(event) {
  var details = document.getElementById('details');

  while (details.hasChildNodes()) {
    details.removeChild(details.firstChild);
  }

  var cards = JSON.parse(sessionStorage.getItem('dataAllCards'));
  selectedCard = cards.filter(function (item) {
    return item.id.toString() === event.currentTarget.id;
  });
  var cardCopy = (0, _cards.createCard)(selectedCard[0]);
  cardCopy.id = cards.length + 1;
  cardCopy.className = 'cardCopy border border-primary rounded';
  details.appendChild(cardCopy);
}
},{"./cards.js":"js/modules/cards.js"}],"js/modules/overview.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCardOverview = createCardOverview;
exports.markSelectedCardAndRefreshOverview = markSelectedCardAndRefreshOverview;
var cards;

function createCardOverview(allCards) {
  cards = allCards;
  var overview = document.getElementsByClassName('overview-row');

  while (overview[0].hasChildNodes()) {
    overview[0].removeChild(overview.firstChild);
  }

  cards.forEach(function (card) {
    return overview[0].appendChild(card);
  });
}

function markSelectedCardAndRefreshOverview(event) {
  if (sessionStorage.getItem('selectedCardId')) {
    var previousSelectedCard = document.getElementById(sessionStorage.getItem('selectedCardId'));
    previousSelectedCard.className = 'card';
  }

  var selectedCard = document.getElementById(event.currentTarget.id);
  selectedCard.className = 'card selected';
  sessionStorage.setItem('selectedCardId', event.currentTarget.id);
}
},{}],"js/modules/cards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCard = createCard;
exports.createCards = createCards;
exports.getAndSaveCardDataToSession = void 0;

var _details = require("./details.js");

var _overview = require("./overview.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var players = [{
  "realName": "Brianna Forbes",
  "playerName": "Dreamlurk The Unstoppable",
  "asset": "Foghammer Lead"
}, {
  "realName": "Darcy Candice Ball",
  "playerName": "Crystaldash",
  "asset": "Secret Glowquake Gold"
}, {
  "realName": "Hillary Gibbs",
  "playerName": "Speedsoul",
  "asset": "Shifting Rainshadow Iron"
}, {
  "realName": "Elva Becky Hammond",
  "playerName": "Seekvenom The Mystic",
  "asset": "Valkyries' Opal Adamant"
}, {
  "realName": "Enid Rose",
  "playerName": "Coincurse The Ghoul",
  "asset": "Jewelevil Bronze Of Goddesses"
}, {
  "realName": "Esmeralda Carrillo",
  "playerName": "Skulldart",
  "asset": "Yellow Orichalcum Of Paladins"
}];

function saveToSession(dataAllCards) {
  sessionStorage.setItem('dataAllCards', JSON.stringify(dataAllCards));
}

function addIdToCardData(players) {
  return players.map(function (player, id) {
    return _objectSpread({
      'id': id
    }, player);
  });
}

function createCard(cardData) {
  var card = document.createElement('div');
  card.className = 'card col border border-primary rounded';
  addCardContent(card, cardData);

  card.onclick = function (event) {
    (0, _details.displayInDetailView)(event);
    (0, _overview.markSelectedCardAndRefreshOverview)(event);
  };

  return card;
}

function addCardContent(card, cardData) {
  for (var prop in cardData) {
    var element = document.createElement('p');

    if (prop !== 'id') {
      element.innerHTML = prop + ': ' + cardData[prop];
      card[prop] = cardData[prop];
    }

    element.className = 'cardElement';
    card.id = cardData.id;
    card.appendChild(element);
  }
}

function createCards(dataAllCards) {
  return dataAllCards.map(function (data) {
    return createCard(data);
  });
}

var requestCardData = function requestCardData(url) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);

    request.onload = function (response) {
      console.log(request);
      resolve(JSON.parse(request.responseText));
    };

    request.onerror = function () {
      return reject(request.response);
    };

    request.responseType = 'text';
    request.send();
  });
};

function getCardData() {
  return new Promise(function (resolve, reject) {
    resolve(players);
  });
}

var getAndSaveCardDataToSession = function getAndSaveCardDataToSession() {
  return getCardData().then(function (dataAllCards) {
    return addIdToCardData(dataAllCards);
  }) //todo: ich dachte ich muss hier json.strinify benutzen, wenn ich das aber mache, bekomm ich später nach
  // json.parse wieder einen string zurück. Muss das nicht serialisiert werden, um es in der session zu speichern?
  .then(function (dataAllCards) {
    return saveToSession(dataAllCards);
  });
};

exports.getAndSaveCardDataToSession = getAndSaveCardDataToSession;
},{"./details.js":"js/modules/details.js","./overview.js":"js/modules/overview.js"}],"js/modules/controls.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createControls = createControls;

var _overview = require("./overview.js");

var cardElements;

function createControls(cards) {
  cardElements = cards;
  var parent = document.getElementById('controls');
  var ascendingButton = createAscendingButton();
  var descendingButton = createDescendingButton();
  var submitButton = createSubmitButton();
  parent.appendChild(ascendingButton);
  parent.appendChild(descendingButton);
  parent.appendChild(submitButton);
}

function createAscendingButton() {
  var button = document.createElement('button');
  button.innerHTML = "Sort Ascending";
  button.id = "sortAsc";
  button.onclick = createOverviewAscending;
  return button;
}

function createDescendingButton() {
  var button = document.createElement('button');
  button.innerHTML = "Sort Descending";
  button.id = "sortDesc";
  button.onclick = createOverViewDescending;
  return button;
}

function createSubmitButton() {
  var button = document.createElement('button');
  button.innerHTML = "Submit";
  button.id = "submit";
  button.onclick = submit;
  return button;
}

function createOverviewAscending() {
  (0, _overview.createCardOverview)(sortAscending());
}

function createOverViewDescending() {
  (0, _overview.createCardOverview)(sortDescending());
}

function sortAscending() {
  return cardElements.slice().sort(compare);
}

function sortDescending() {
  return sortAscending().reverse();
}

function submit() {
  var selectedCardId = sessionStorage.getItem('selectedCardId');
  var allCardsData = JSON.parse(sessionStorage.getItem('dataAllCards'));
  var selectedCardData = allCardsData.filter(function (card) {
    return card.id.toString() === selectedCardId;
  });
  var myHeaders = new Headers();
  var myRequest = new Request('http://127.0.0.1:5000/receiveCard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(selectedCardData[0]),
    cache: 'default'
  });
  var response = fetch(myRequest).then(function (resp) {
    return resp;
  }).then(function (data) {
    console.log('Success: ', data);
    submitModal(data);
    sessionStorage.removeItem('selectedCardId');
  }).catch(function (error) {
    console.log(error);
    submitModal(error);
  });
}

function submitModal(response) {
  var test = response.status;

  if (response.status === 201) {
    var messageText = 'Your card was successfully submitted.';
  } else if (response.status === 400) {
    var messageText = 'You did not select a card yet. Please select a card';
  } else {
    var messageText = 'An error occured, please try again later.';
  }

  var modal = document.getElementById('submitModal');
  var span = document.getElementsByClassName('close')[0];
  var message = document.getElementsByClassName('message')[0];
  message.innerHTML = messageText;
  modal.style.display = 'block';

  span.onclick = function () {
    return modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}

function compare(a, b) {
  if (a.realName < b.realName) {
    return -1;
  }

  if (a.realName > b.realName) {
    return 1;
  }

  return 0;
}
},{"./overview.js":"js/modules/overview.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

var _cards = require("./modules/cards.js");

var _overview = require("./modules/overview.js");

var _controls = require("./modules/controls.js");

var url = 'assets/players.json';
(0, _cards.getAndSaveCardDataToSession)().then(function () {
  sessionStorage.removeItem('selectedCardId');
  var cards = (0, _cards.createCards)(JSON.parse(sessionStorage.getItem('dataAllCards')));
  (0, _overview.createCardOverview)(cards);
  (0, _controls.createControls)(cards);
});
},{"./modules/cards.js":"js/modules/cards.js","./modules/overview.js":"js/modules/overview.js","./modules/controls.js":"js/modules/controls.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61290" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map
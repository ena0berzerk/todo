/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container{height:70vh;width:700px;padding:21px;margin:5% auto;border:1px solid #323232;border-radius:5px;background-color:#fff;box-shadow:rgba(149,157,165,.15) 0px 3px 6px 0px}.form-task{display:flex;flex-direction:column;width:300px;gap:12px;padding:12px;margin:0 auto}.form-task #add-task{margin-top:8px;cursor:pointer;display:inline-block;outline:none;cursor:pointer;border-radius:3px;font-size:14px;font-weight:500;line-height:16px;padding:2px 16px;height:38px;min-width:96px;min-height:38px;border:none;color:#fff;background-color:#5865f2;transition:background-color .17s ease,color .17s ease}.form-task #add-task:hover{background-color:#4752c4}.form-task input{font-size:14px;border-radius:6px;line-height:1.5;padding:5px 10px;transition:box-shadow 100ms ease-in,border 100ms ease-in,background-color 100ms ease-in;border:2px solid #dee1e2;color:#0e0e10;background:#dee1e2;display:block;height:36px}.form-task input:hover{border-color:#ccc}.form-task input:focus{border-color:#9147ff;background:#fff}.form-task textarea{font-size:14px;border-radius:6px;line-height:1.5;resize:none;padding:5px 10px;transition:box-shadow 100ms ease-in,border 100ms ease-in,background-color 100ms ease-in;border:2px solid #dee1e2;color:#0e0e10;background:#dee1e2;display:block}.form-task textarea:hover{border-color:#ccc}.form-task textarea:focus{border-color:#9147ff;background:#fff}.open-task-form{height:92px;width:92px;cursor:pointer;color:#323232;transition:color .2s ease}.open-task-form:hover{color:#5865f2}.container{display:grid;grid-template:.1fr 3fr .5fr/4fr}.container h1{grid-row:1;grid-column:1/3}.container .open-task-form{grid-row:3;grid-column:2;align-self:center;justify-self:center}.container .todo-lists{grid-row:2;grid-column:1/3}.modal{display:none;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;background-color:#000;background-color:rgba(0,0,0,.4)}.modal .modal-content{animation-name:animatetop;animation-duration:.5s;background-color:#fefefe;margin:12% auto;padding:20px;border:1px solid #888;width:18%;border-radius:5px;box-shadow:rgba(0,0,0,0) 0px 0px 0px 0px,rgba(0,0,0,0) 0px 0px 0px 0px,rgba(0,0,0,.1) 0px 10px 15px -3px,rgba(0,0,0,.05) 0px 4px 6px -2px}.modal .modal-content .close{color:#aaa;font-size:28px;font-weight:bold;float:right}.modal .modal-content .close:hover,.modal .modal-content .closeclose:focus{color:#000;text-decoration:none;cursor:pointer}@keyframes animatetop{from{bottom:-300px;opacity:0}to{top:0;opacity:1}}.todo-lists{display:none;font-size:24px;overflow:auto}.todo-lists .todo-wrap{display:flex;align-items:center;padding:12px;border:3px solid #323232;border-radius:5px;gap:12px;margin-bottom:12px}.todo-lists .todo-done-border{border:3px solid #6f6f6f}.todo-lists .p-done{text-decoration:line-through #6f6f6f;color:#6f6f6f}.todo-lists .circle{height:30px;width:30px;border-radius:100%;display:inline-block;border:3px solid #323232;cursor:pointer}.todo-lists .circle-done{background-color:#6f6f6f;border-color:#6f6f6f}.todo-lists .description-p{font-size:18px;margin-top:12px}.todo-lists .date-p{font-size:14px;margin-top:4px;color:rgba(50,50,50,.8470588235)}*{padding:0;margin:0;box-sizing:border-box;font-family:"Quicksand",sans-serif}body{background-color:#323232}h1{color:#5865f2;margin-bottom:12px;padding-bottom:6px;border-bottom:1px solid #eee;user-select:none}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss
var style = __webpack_require__(380);
;// CONCATENATED MODULE: ./src/css/style.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const css_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/is-dev.js
function isDevWebpackMode() {
  if (false) {}
}
isDevWebpackMode();
;// CONCATENATED MODULE: ./src/todo.js
function Todo(title, description, dueDate) {
  return {
    title,
    description,
    dueDate
  };
}
;// CONCATENATED MODULE: ./src/components/form-task.js
const formTask = {
  form: document.querySelector('.form-task'),
  title: document.querySelector('#title'),
  description: document.querySelector('#description'),
  priority: document.querySelector('#priority'),
  dueDate: document.querySelector('#due-date')
};
;// CONCATENATED MODULE: ./src/components/dom-tasks.js

const container = document.querySelector('.container');
const wrapperTodos = document.createElement('div');
wrapperTodos.classList.add('todo-lists');
wrapperTodos.style.display = 'block';
function todoElement(taskList) {
  const wrapTodo = document.createElement('div');
  wrapTodo.classList.add('todo-wrap');

  // circle
  const circle = document.createElement('span');
  circle.classList.add('circle');

  // title
  const titleP = document.createElement('p');
  titleP.classList.add('title-p');
  titleP.textContent = formTask.title.value;

  // description
  const descriptionP = document.createElement('p');
  descriptionP.classList.add('description-p');
  descriptionP.textContent = formTask.description.value;

  // date
  const dateP = document.createElement('p');
  dateP.classList.add('date-p');
  dateP.textContent = formTask.dueDate.value;
  const wrapForTitleDateDescription = document.createElement('div');
  wrapForTitleDateDescription.classList.add('wrap-tdd');
  wrapForTitleDateDescription.append(titleP, dateP, descriptionP);
  circle.addEventListener('click', _ => {
    _.target.parentNode.classList.toggle('todo-done-border');
    circle.classList.toggle('circle-done');
    titleP.classList.toggle('p-done');
    descriptionP.classList.toggle('p-done');
    dateP.classList.toggle('p-done');
    taskList.forEach(task => {
      if (task.priority === _.target.parentNode.dataset.priority) {
        taskList.splice(task, 1);
        console.log(taskList);
      }
      console.log(_.target.parentNode);
    });
  });
  container.appendChild(wrapperTodos);
  wrapperTodos.appendChild(wrapTodo);
  wrapTodo.append(circle, wrapForTitleDateDescription);
}
;// CONCATENATED MODULE: ./src/new-task.js



const tasksList = [];
function newTask() {
  const createTask = Todo(formTask.title.value, formTask.description.value, formTask.dueDate.value);
  tasksList.push(createTask);
  return createTask;
}
function submitFormTask() {
  formTask.form.addEventListener('submit', _ => {
    _.preventDefault();
    newTask();
    todoElement(tasksList);
    console.log(tasksList);
    formTask.form.reset();
  });
}
;// CONCATENATED MODULE: ./src/components/modal.js
const openForm = document.querySelector('.open-task-form');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
function openModal() {
  openForm.addEventListener('click', _ => {
    modal.style.display = 'block';
  });
}
function closeModal() {
  modal.style.display = 'none';
}
closeBtn.addEventListener('click', _ => {
  closeModal();
});
window.addEventListener('click', _ => {
  if (_.target === modal) {
    closeModal();
  }
});
window.addEventListener('keydown', _ => {
  if (_.key === 'Escape') {
    closeModal();
  }
});
;// CONCATENATED MODULE: ./src/script.js





openModal();
closeModal();
submitFormTask();
})();

/******/ })()
;
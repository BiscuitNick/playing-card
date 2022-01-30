/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _biscuitnick_playing_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @biscuitnick/playing-card */ \"../package/dist/playing-card.umd.min.js\");\n/* harmony import */ var _biscuitnick_playing_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_biscuitnick_playing_card__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "../package/dist/playing-card.umd.min.js":
/*!***********************************************!*\
  !*** ../package/dist/playing-card.umd.min.js ***!
  \***********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}((function(){\"use strict\";customElements.define(\"playing-card\",class extends HTMLElement{constructor(){self=super(),this.card=this.getAttribute(\"card\"),this.width=this.getAttribute(\"width\")||100,this.height=this.getAttribute(\"height\")||140,this.wrapStyle=this.getAttribute(\"wrapStyle\")||!1,this.frontStyle=this.getAttribute(\"frontStyle\")||!1,this.backStyle=this.getAttribute(\"backStyle\")||!1,this.imageStyle=this.getAttribute(\"imageStyle\")||!1,this.flipped=this.getAttribute(\"flipped\")||!1,this.transition=this.getAttribute(\"transition\")||.8;const t=document.createElement(\"template\").content;self.attachShadow({mode:\"open\"}).appendChild(t.cloneNode(!0))}static get observedAttributes(){return[\"card\",\"width\",\"height\",\"wrapStyle\",\"frontStyle\",\"backStyle\",\"imageStyle\",\"flipped\",\"transition\"]}connectedCallback(){const t=this.shadowRoot,e=this.card,i=this.width,a=this.height,s=this.imageStyle,r=this.wrapperStyle,c=this.frontStyle,l=this.backStyle,n=this.transition,d=document.createElement(\"div\");r&&(d.style=r),d.className=\"cardWrapper\",d.style.width=`${i}px`,d.style.height=`${a}px`,d.style.perspective=\"1000px\",d.style.transition=`transform ${n}s`,d.addEventListener(\"click\",(()=>{this.flip()}));const h=document.createElement(\"div\");h.className=\"cardInner\",h.style.transformStyle=\"preserve-3d\",h.style.transition=`transform ${n}s`,h.style.width=\"100%\",h.style.height=\"100%\";const o=document.createElement(\"div\");o.className=\"cardFront\",c&&(o.style=c),o.style.position=\"absolute\",o.style.backfaceVisibility=\"hidden\",o.style.width=\"100%\",o.style.height=\"100%\";const p=document.createElement(\"img\");p.className=\"cardImage\",p.src=`https://raw.githubusercontent.com/BiscuitNick/playing-card/master/deck/${e}.png`,p.alt=e,s&&(p.style=s),p.style.width=\"100%\",p.style.height=\"100%\";const y=document.createElement(\"div\");y.style.background=\"black\",l&&(y.style=l),y.style.position=\"absolute\",y.style.width=\"100%\",y.style.height=\"100%\",y.style.transform=\"rotateY(180deg)\",y.style.backfaceVisibility=\"hidden\",this.cardWrapper=d,this.cardInner=h,this.cardFront=o,this.cardImage=p,this.cardBack=y,d.appendChild(h),h.appendChild(o),h.appendChild(y),o.appendChild(p),t.appendChild(d)}attributeChangedCallback(t,e,i){if(!e)return null;console.log(t,e,i),cardWrapper=this.cardWrapper,cardInner=this.cardInner,cardFront=this.cardFront,cardBack=this.cardBack,cardImage=this.cardImage,this.wrapperStyle&&(cardWrapper.style=this.wrapperStyle),cardWrapper.className=\"cardWrapper\",cardWrapper.style.width=`${this.width}px`,cardWrapper.style.height=`${this.height}px`,cardWrapper.style.perspective=\"1000px\",cardWrapper.style.transition=`transform ${this.transition}s`,cardInner.style.transition=`transform ${this.transition}s`,this.frontStyle&&(cardFront.style=this.frontStyle),cardFront.style.position=\"absolute\",cardFront.style.backfaceVisibility=\"hidden\",cardFront.style.width=\"100%\",cardFront.style.height=\"100%\",cardImage.src=`https://raw.githubusercontent.com/BiscuitNick/playing-card/master/deck/${this.card}.png`,cardImage.alt=this.card,this.imageStyle&&(cardImage.style=this.imageStyle),cardImage.style.width=\"100%\",cardImage.style.height=\"100%\",cardBack.style.background=\"black\",this.backStyle&&(cardBack.style=this.backStyle),cardBack.style.position=\"absolute\",cardBack.style.width=\"100%\",cardBack.style.height=\"100%\",cardBack.style.transform=\"rotateY(180deg)\",cardBack.style.backfaceVisibility=\"hidden\"}flip(){const t=!this.flipped,e=this.cardWrapper,i=this.cardInner;this.flipped=t,e.style.transform=t?\"rotateY(-180deg)\":null,i.style.transform=t?\"rotateY(-180deg)\":null}})}));\n\n\n//# sourceURL=webpack:///../package/dist/playing-card.umd.min.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
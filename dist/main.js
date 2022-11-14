/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/loadHomeDOM.js":
/*!**********************************!*\
  !*** ./src/pages/loadHomeDOM.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomeDOM": () => (/* binding */ loadHomeDOM)
/* harmony export */ });
const loadHomeDOM = () => {
    const createDivElement = (identifier,identifierName) => {
        const div = document.createElement('div');
        if(identifier==='class'){
            div.classList.add(identifierName);
            return div;
        }else if(identifier==='id'){
            div.setAttribute(identifier,identifierName);
            return div;
        }
    }
    const createImageElement = (source,alternativeText) => {
        const img = document.createElement('img');
        img.setAttribute('src',source);
        img.setAttribute('alt',alternativeText);
        return img;
    }

    const createLogoElement = () => {
        const logo = createDivElement('class','logo');
        const restaurantLogo = createImageElement('./restaurant-logo.png','Restaurant Logo');
        logo.appendChild(restaurantLogo)
        return logo;
    }

    const createListElement = () => {
        const list = createDivElement('class','list');
        const home = createDivElement('id','home');
        home.textContent = 'Home';
        const menu = createDivElement('id','menu');
        menu.textContent = 'Menu';
        const contact = createDivElement('id','contact');
        contact.textContent = 'Contact';
        list.appendChild(home);
        list.appendChild(menu);
        list.appendChild(contact);
        return list;
    }

    const createSocialMediaElement = () => {
        const socialMediaDiv = createDivElement('class','social-media');
        const facebookDiv = createDivElement('id','facebook');
        const facebookLogo = createImageElement('./social-media-icons/facebook.png','Facebook');
        facebookDiv.appendChild(facebookLogo);
        const instagramDiv = createDivElement('id','instagram');
        const instagramLogo = createImageElement('./social-media-icons/instagram.png','Instagram');
        instagramDiv.appendChild(instagramLogo);
        const tiktokDiv = createDivElement('id','tiktok');
        const tiktokLogo = createImageElement('./social-media-icons/tiktok.png','Tiktok');
        tiktokDiv.appendChild(tiktokLogo);
        const youtubeDiv = createDivElement('id','youtube');
        const youtubeLogo = createImageElement('./social-media-icons/youtube.png','Youtube');
        youtubeDiv.appendChild(youtubeLogo);
        socialMediaDiv.appendChild(facebookDiv);
        socialMediaDiv.appendChild(instagramDiv);
        socialMediaDiv.appendChild(tiktokDiv);
        socialMediaDiv.appendChild(youtubeDiv);
        return socialMediaDiv;
    }

    const createNavBarElement = () => {
        const navBar = createDivElement('class','nav-bar');
        const logo = createLogoElement();
        const list = createListElement();
        const socialMedia = createSocialMediaElement();
        navBar.appendChild(logo);
        navBar.appendChild(list);
        navBar.appendChild(socialMedia);
        return navBar;
    }

    const createSpanHighlightElement = () => {
        const spanContainer = document.createElement('span');
        spanContainer.classList.add('highlight-container');
        const regularSpan = document.createElement('span');
        regularSpan.classList.add('highlight');
        regularSpan.textContent = 'One ';
        spanContainer.appendChild(regularSpan);
        return spanContainer;
    }

    const createTitleElement = () => {
        const title = createDivElement('class','title');
        const text = document.createElement('h1');
        const spanContainer = createSpanHighlightElement();
        text.appendChild(document.createTextNode('The Number '));
        text.appendChild(spanContainer);
        text.appendChild(document.createTextNode('Pasta Restaurant In The World'));
        title.appendChild(text);
        return title;
    }

    const createSubTitleElement = () => {
        const subTitle = createDivElement('class','subtitle');
        const paragraph = document.createElement('p');
        paragraph.textContent = 'Get a unique culinary experience. Reserve a table to satisfy your hunger and enjoy a gourmet dish prepared by one of the best chefs in the world.';
        subTitle.appendChild(paragraph);
        return subTitle;
    }

    const createAwardSection = () => {
        const award = createDivElement('class','award');
        const awardText = createDivElement('class', 'award-text');
        const awardTitle = createDivElement('class', 'award-title');

        const titleText = document.createElement('h1');
        titleText.textContent = 'Awards winner';
        awardTitle.appendChild(titleText);

        const awardParagraph = document.createElement('p');
        awardParagraph.textContent = "Best pasta restaurant in the world for 107th consecutive years. Best lasagna restaurant for second consecutive year, even we don't have lasagna!";
        awardText.appendChild(awardTitle);
        awardText.appendChild(awardParagraph);

        const awardImageDiv = createDivElement('class', 'award-image');
        const awardImage = createImageElement('./award.png','Restaurant Logo');
        awardImageDiv.appendChild(awardImage);

        award.appendChild(awardText);
        award.appendChild(awardImageDiv);

        return award;
    }

    const createTextSection = () => {
        const textContainer = createDivElement('class','text-container');

        const title = createTitleElement();
        const subTitle = createSubTitleElement();
        const awardSection = createAwardSection();

        textContainer.appendChild(title);
        textContainer.appendChild(subTitle);
        textContainer.appendChild(awardSection);

        return textContainer;
    }

    const createBannerSection = () => {
        const bannerContainer = createDivElement('class','banner-container');
        const bannerImage = createImageElement('./pastas.png','Pasta Banner');
        bannerContainer.appendChild(bannerImage);
        return bannerContainer;
    }

    const createHomeContent = () => {
        const contentContainer = createDivElement('class','content-container');
        const textContainer = createTextSection();
        const bannerContainer = createBannerSection();

        contentContainer.appendChild(textContainer);
        contentContainer.appendChild(bannerContainer);

        return contentContainer;
    }

    const content = document.querySelector('#content');
    const navBar = createNavBarElement();
    const contentContainer = createHomeContent();

    content.appendChild(navBar);
    content.appendChild(contentContainer);
    
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_loadHomeDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/loadHomeDOM.js */ "./src/pages/loadHomeDOM.js");

(0,_pages_loadHomeDOM_js__WEBPACK_IMPORTED_MODULE_0__.loadHomeDOM)();
console.log('Hello World');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbktBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUU7QUFDbkUsa0VBQVk7QUFDWiwyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9sb2FkSG9tZURPTS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZEhvbWVET00gPSAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRGl2RWxlbWVudCA9IChpZGVudGlmaWVyLGlkZW50aWZpZXJOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZihpZGVudGlmaWVyPT09J2NsYXNzJyl7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChpZGVudGlmaWVyTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gZGl2O1xuICAgICAgICB9ZWxzZSBpZihpZGVudGlmaWVyPT09J2lkJyl7XG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKGlkZW50aWZpZXIsaWRlbnRpZmllck5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjcmVhdGVJbWFnZUVsZW1lbnQgPSAoc291cmNlLGFsdGVybmF0aXZlVGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJyxzb3VyY2UpO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLGFsdGVybmF0aXZlVGV4dCk7XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlTG9nb0VsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBjcmVhdGVEaXZFbGVtZW50KCdjbGFzcycsJ2xvZ28nKTtcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudExvZ28gPSBjcmVhdGVJbWFnZUVsZW1lbnQoJy4vcmVzdGF1cmFudC1sb2dvLnBuZycsJ1Jlc3RhdXJhbnQgTG9nbycpO1xuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRMb2dvKVxuICAgICAgICByZXR1cm4gbG9nbztcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVMaXN0RWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGNyZWF0ZURpdkVsZW1lbnQoJ2NsYXNzJywnbGlzdCcpO1xuICAgICAgICBjb25zdCBob21lID0gY3JlYXRlRGl2RWxlbWVudCgnaWQnLCdob21lJyk7XG4gICAgICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBjcmVhdGVEaXZFbGVtZW50KCdpZCcsJ21lbnUnKTtcbiAgICAgICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICAgICAgY29uc3QgY29udGFjdCA9IGNyZWF0ZURpdkVsZW1lbnQoJ2lkJywnY29udGFjdCcpO1xuICAgICAgICBjb250YWN0LnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTb2NpYWxNZWRpYUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNvY2lhbE1lZGlhRGl2ID0gY3JlYXRlRGl2RWxlbWVudCgnY2xhc3MnLCdzb2NpYWwtbWVkaWEnKTtcbiAgICAgICAgY29uc3QgZmFjZWJvb2tEaXYgPSBjcmVhdGVEaXZFbGVtZW50KCdpZCcsJ2ZhY2Vib29rJyk7XG4gICAgICAgIGNvbnN0IGZhY2Vib29rTG9nbyA9IGNyZWF0ZUltYWdlRWxlbWVudCgnLi9zb2NpYWwtbWVkaWEtaWNvbnMvZmFjZWJvb2sucG5nJywnRmFjZWJvb2snKTtcbiAgICAgICAgZmFjZWJvb2tEaXYuYXBwZW5kQ2hpbGQoZmFjZWJvb2tMb2dvKTtcbiAgICAgICAgY29uc3QgaW5zdGFncmFtRGl2ID0gY3JlYXRlRGl2RWxlbWVudCgnaWQnLCdpbnN0YWdyYW0nKTtcbiAgICAgICAgY29uc3QgaW5zdGFncmFtTG9nbyA9IGNyZWF0ZUltYWdlRWxlbWVudCgnLi9zb2NpYWwtbWVkaWEtaWNvbnMvaW5zdGFncmFtLnBuZycsJ0luc3RhZ3JhbScpO1xuICAgICAgICBpbnN0YWdyYW1EaXYuYXBwZW5kQ2hpbGQoaW5zdGFncmFtTG9nbyk7XG4gICAgICAgIGNvbnN0IHRpa3Rva0RpdiA9IGNyZWF0ZURpdkVsZW1lbnQoJ2lkJywndGlrdG9rJyk7XG4gICAgICAgIGNvbnN0IHRpa3Rva0xvZ28gPSBjcmVhdGVJbWFnZUVsZW1lbnQoJy4vc29jaWFsLW1lZGlhLWljb25zL3Rpa3Rvay5wbmcnLCdUaWt0b2snKTtcbiAgICAgICAgdGlrdG9rRGl2LmFwcGVuZENoaWxkKHRpa3Rva0xvZ28pO1xuICAgICAgICBjb25zdCB5b3V0dWJlRGl2ID0gY3JlYXRlRGl2RWxlbWVudCgnaWQnLCd5b3V0dWJlJyk7XG4gICAgICAgIGNvbnN0IHlvdXR1YmVMb2dvID0gY3JlYXRlSW1hZ2VFbGVtZW50KCcuL3NvY2lhbC1tZWRpYS1pY29ucy95b3V0dWJlLnBuZycsJ1lvdXR1YmUnKTtcbiAgICAgICAgeW91dHViZURpdi5hcHBlbmRDaGlsZCh5b3V0dWJlTG9nbyk7XG4gICAgICAgIHNvY2lhbE1lZGlhRGl2LmFwcGVuZENoaWxkKGZhY2Vib29rRGl2KTtcbiAgICAgICAgc29jaWFsTWVkaWFEaXYuYXBwZW5kQ2hpbGQoaW5zdGFncmFtRGl2KTtcbiAgICAgICAgc29jaWFsTWVkaWFEaXYuYXBwZW5kQ2hpbGQodGlrdG9rRGl2KTtcbiAgICAgICAgc29jaWFsTWVkaWFEaXYuYXBwZW5kQ2hpbGQoeW91dHViZURpdik7XG4gICAgICAgIHJldHVybiBzb2NpYWxNZWRpYURpdjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVOYXZCYXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZCYXIgPSBjcmVhdGVEaXZFbGVtZW50KCdjbGFzcycsJ25hdi1iYXInKTtcbiAgICAgICAgY29uc3QgbG9nbyA9IGNyZWF0ZUxvZ29FbGVtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0RWxlbWVudCgpO1xuICAgICAgICBjb25zdCBzb2NpYWxNZWRpYSA9IGNyZWF0ZVNvY2lhbE1lZGlhRWxlbWVudCgpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKHNvY2lhbE1lZGlhKTtcbiAgICAgICAgcmV0dXJuIG5hdkJhcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTcGFuSGlnaGxpZ2h0RWxlbWVudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3BhbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3BhbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHJlZ3VsYXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICByZWd1bGFyU3Bhbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcbiAgICAgICAgcmVndWxhclNwYW4udGV4dENvbnRlbnQgPSAnT25lICc7XG4gICAgICAgIHNwYW5Db250YWluZXIuYXBwZW5kQ2hpbGQocmVndWxhclNwYW4pO1xuICAgICAgICByZXR1cm4gc3BhbkNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUaXRsZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRGl2RWxlbWVudCgnY2xhc3MnLCd0aXRsZScpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3Qgc3BhbkNvbnRhaW5lciA9IGNyZWF0ZVNwYW5IaWdobGlnaHRFbGVtZW50KCk7XG4gICAgICAgIHRleHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1RoZSBOdW1iZXIgJykpO1xuICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHNwYW5Db250YWluZXIpO1xuICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQYXN0YSBSZXN0YXVyYW50IEluIFRoZSBXb3JsZCcpKTtcbiAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTdWJUaXRsZUVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YlRpdGxlID0gY3JlYXRlRGl2RWxlbWVudCgnY2xhc3MnLCdzdWJ0aXRsZScpO1xuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdHZXQgYSB1bmlxdWUgY3VsaW5hcnkgZXhwZXJpZW5jZS4gUmVzZXJ2ZSBhIHRhYmxlIHRvIHNhdGlzZnkgeW91ciBodW5nZXIgYW5kIGVuam95IGEgZ291cm1ldCBkaXNoIHByZXBhcmVkIGJ5IG9uZSBvZiB0aGUgYmVzdCBjaGVmcyBpbiB0aGUgd29ybGQuJztcbiAgICAgICAgc3ViVGl0bGUuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbiAgICAgICAgcmV0dXJuIHN1YlRpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUF3YXJkU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXdhcmQgPSBjcmVhdGVEaXZFbGVtZW50KCdjbGFzcycsJ2F3YXJkJyk7XG4gICAgICAgIGNvbnN0IGF3YXJkVGV4dCA9IGNyZWF0ZURpdkVsZW1lbnQoJ2NsYXNzJywgJ2F3YXJkLXRleHQnKTtcbiAgICAgICAgY29uc3QgYXdhcmRUaXRsZSA9IGNyZWF0ZURpdkVsZW1lbnQoJ2NsYXNzJywgJ2F3YXJkLXRpdGxlJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ0F3YXJkcyB3aW5uZXInO1xuICAgICAgICBhd2FyZFRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5cbiAgICAgICAgY29uc3QgYXdhcmRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGF3YXJkUGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJCZXN0IHBhc3RhIHJlc3RhdXJhbnQgaW4gdGhlIHdvcmxkIGZvciAxMDd0aCBjb25zZWN1dGl2ZSB5ZWFycy4gQmVzdCBsYXNhZ25hIHJlc3RhdXJhbnQgZm9yIHNlY29uZCBjb25zZWN1dGl2ZSB5ZWFyLCBldmVuIHdlIGRvbid0IGhhdmUgbGFzYWduYSFcIjtcbiAgICAgICAgYXdhcmRUZXh0LmFwcGVuZENoaWxkKGF3YXJkVGl0bGUpO1xuICAgICAgICBhd2FyZFRleHQuYXBwZW5kQ2hpbGQoYXdhcmRQYXJhZ3JhcGgpO1xuXG4gICAgICAgIGNvbnN0IGF3YXJkSW1hZ2VEaXYgPSBjcmVhdGVEaXZFbGVtZW50KCdjbGFzcycsICdhd2FyZC1pbWFnZScpO1xuICAgICAgICBjb25zdCBhd2FyZEltYWdlID0gY3JlYXRlSW1hZ2VFbGVtZW50KCcuL2F3YXJkLnBuZycsJ1Jlc3RhdXJhbnQgTG9nbycpO1xuICAgICAgICBhd2FyZEltYWdlRGl2LmFwcGVuZENoaWxkKGF3YXJkSW1hZ2UpO1xuXG4gICAgICAgIGF3YXJkLmFwcGVuZENoaWxkKGF3YXJkVGV4dCk7XG4gICAgICAgIGF3YXJkLmFwcGVuZENoaWxkKGF3YXJkSW1hZ2VEaXYpO1xuXG4gICAgICAgIHJldHVybiBhd2FyZDtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVUZXh0U2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGNyZWF0ZURpdkVsZW1lbnQoJ2NsYXNzJywndGV4dC1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBzdWJUaXRsZSA9IGNyZWF0ZVN1YlRpdGxlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCBhd2FyZFNlY3Rpb24gPSBjcmVhdGVBd2FyZFNlY3Rpb24oKTtcblxuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYXdhcmRTZWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gdGV4dENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVCYW5uZXJTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBiYW5uZXJDb250YWluZXIgPSBjcmVhdGVEaXZFbGVtZW50KCdjbGFzcycsJ2Jhbm5lci1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYmFubmVySW1hZ2UgPSBjcmVhdGVJbWFnZUVsZW1lbnQoJy4vcGFzdGFzLnBuZycsJ1Bhc3RhIEJhbm5lcicpO1xuICAgICAgICBiYW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVySW1hZ2UpO1xuICAgICAgICByZXR1cm4gYmFubmVyQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUhvbWVDb250ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gY3JlYXRlRGl2RWxlbWVudCgnY2xhc3MnLCdjb250ZW50LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gY3JlYXRlVGV4dFNlY3Rpb24oKTtcbiAgICAgICAgY29uc3QgYmFubmVyQ29udGFpbmVyID0gY3JlYXRlQmFubmVyU2VjdGlvbigpO1xuXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVyQ29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBuYXZCYXIgPSBjcmVhdGVOYXZCYXJFbGVtZW50KCk7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGNyZWF0ZUhvbWVDb250ZW50KCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50Q29udGFpbmVyKTtcbiAgICBcbn1cblxuZXhwb3J0IHtsb2FkSG9tZURPTX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2xvYWRIb21lRE9NIGFzIGxvYWRIb21lUGFnZX0gZnJvbSAnLi9wYWdlcy9sb2FkSG9tZURPTS5qcyc7XG5sb2FkSG9tZVBhZ2UoKTtcbmNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
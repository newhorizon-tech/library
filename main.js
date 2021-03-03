/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOption": () => (/* binding */ deleteOption),
/* harmony export */   "toggleStatus": () => (/* binding */ toggleStatus),
/* harmony export */   "myLibrary": () => (/* binding */ myLibrary)
/* harmony export */ });
let library = JSON.parse(localStorage.getItem('myLibrary'));

if (library == null) {
  library = [];
}

const myLibrary = library;

function deleteOption(button, book, card) {
  button.addEventListener('click', () => {
    card.parentNode.removeChild(card);
    if (myLibrary.indexOf(book) !== -1) {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    }
  });
}

function toggleStatus(button, book, card) {
  button.addEventListener('click', () => {
    const status = card.querySelector('.read-status');
    if (book.read === 'Read') {
      status.textContent = 'Not Read';
      book.read = 'Not Read';
    } else {
      status.textContent = 'Read';
      book.read = 'Read';
    }
  });
}




/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myLibrary": () => (/* reexport safe */ _app__WEBPACK_IMPORTED_MODULE_0__.myLibrary),
/* harmony export */   "showAlert": () => (/* binding */ showAlert),
/* harmony export */   "deleteGroup": () => (/* binding */ deleteGroup),
/* harmony export */   "readStatus": () => (/* binding */ readStatus),
/* harmony export */   "displayBook": () => (/* binding */ displayBook),
/* harmony export */   "displayLibrary": () => (/* binding */ displayLibrary)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");


function showAlert(message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;

  div.textContent = message;
  const container = document.querySelector('.container');
  const form = document.querySelector('#newBookForm');
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector('.alert').remove(), 3000);
  return false;
}

const deleteGroup = (book, card) => {
  const createBtn = document.createElement('button');
  (0,_app__WEBPACK_IMPORTED_MODULE_0__.deleteOption)(createBtn, book, card);
  createBtn.textContent = 'Delete';
  createBtn.setAttribute('class', 'btn btn-danger mr-2 ml-3');
  card.appendChild(createBtn);
};

const readStatus = (book, card) => {
  const createBtn = document.createElement('button');
  (0,_app__WEBPACK_IMPORTED_MODULE_0__.toggleStatus)(createBtn, book, card);
  createBtn.textContent = 'Toggle status';
  createBtn.setAttribute('class', 'btn btn-success');
  card.appendChild(createBtn);
};

const displayBook = (book) => {
  const BookGroup = document.querySelector('#book-group');
  const card = document.createElement('div');
  card.className = 'card m-2';

  const cardbody = document.createElement('div');
  cardbody.className = 'card-body';

  const title = document.createElement('p');
  title.className = 'card-title';

  const author = document.createElement('h5');
  author.className = 'card-text';

  const pages = document.createElement('p');
  pages.className = 'card-text';

  const read = document.createElement('p');
  read.className = 'card-text read-status';

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = `${book.pages} Pages`;
  read.textContent = book.read;

  cardbody.appendChild(author);
  cardbody.appendChild(title);
  cardbody.appendChild(pages);
  cardbody.appendChild(read);

  card.appendChild(cardbody);
  readStatus(book, card);
  deleteGroup(book, card);
  BookGroup.appendChild(card);
};

const displayLibrary = (myLibrary) => {
  const BookGroup = document.querySelector('#book-group');
  BookGroup.innerHTML = '';
  myLibrary.forEach((book) => displayBook(book));
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


const { newBookForm } = document.forms;
const submit = document.querySelector('#form-button');

function Book(author, title, pages, read) {
  return {
    author, title, pages, read,
  };
}

const addBookToLibrary = (CurrentBook) => {
  _dom__WEBPACK_IMPORTED_MODULE_0__.myLibrary.push(CurrentBook);
  localStorage.setItem('myLibrary', JSON.stringify(_dom__WEBPACK_IMPORTED_MODULE_0__.myLibrary));
  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayLibrary)(_dom__WEBPACK_IMPORTED_MODULE_0__.myLibrary);
  return false;
};

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayLibrary)(_dom__WEBPACK_IMPORTED_MODULE_0__.myLibrary);

submit.onclick = () => {
  const title = newBookForm.querySelector('input[name="title"').value;
  const author = newBookForm.querySelector('input[name="author"').value;
  const pages = newBookForm.querySelector('input[name="pages"').value;
  const possibleReadValues = newBookForm.querySelectorAll('input[name="read"]');
  let read;
  if (possibleReadValues[0].checked) {
    read = 'Read';
  } else {
    read = 'Not Read';
  }

  if (title === '' || author === '' || parseInt(pages, 10) < 1) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showAlert)('Invalid input', 'danger');
  } else {
    const book = Book(title, author, pages, read);
    addBookToLibrary(book);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showAlert)('Book added!', 'success');
  }

  return false;
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmE7O0FBRTlEO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLGtEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsa0RBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJRTs7Ozs7OztVQzNFRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNONkQ7O0FBRTdELE9BQU8sY0FBYztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxnREFBYztBQUNoQixtREFBbUQsMkNBQVM7QUFDNUQsRUFBRSxvREFBYyxDQUFDLDJDQUFTO0FBQzFCO0FBQ0E7O0FBRUEsb0RBQWMsQ0FBQywyQ0FBUzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBUztBQUNiLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSwrQ0FBUztBQUNiOztBQUVBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBsaWJyYXJ5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlMaWJyYXJ5JykpO1xuXG5pZiAobGlicmFyeSA9PSBudWxsKSB7XG4gIGxpYnJhcnkgPSBbXTtcbn1cblxuY29uc3QgbXlMaWJyYXJ5ID0gbGlicmFyeTtcblxuZnVuY3Rpb24gZGVsZXRlT3B0aW9uKGJ1dHRvbiwgYm9vaywgY2FyZCkge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2FyZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNhcmQpO1xuICAgIGlmIChteUxpYnJhcnkuaW5kZXhPZihib29rKSAhPT0gLTEpIHtcbiAgICAgIG15TGlicmFyeS5zcGxpY2UobXlMaWJyYXJ5LmluZGV4T2YoYm9vayksIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215TGlicmFyeScsIEpTT04uc3RyaW5naWZ5KG15TGlicmFyeSkpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVN0YXR1cyhidXR0b24sIGJvb2ssIGNhcmQpIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHN0YXR1cyA9IGNhcmQucXVlcnlTZWxlY3RvcignLnJlYWQtc3RhdHVzJyk7XG4gICAgaWYgKGJvb2sucmVhZCA9PT0gJ1JlYWQnKSB7XG4gICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSAnTm90IFJlYWQnO1xuICAgICAgYm9vay5yZWFkID0gJ05vdCBSZWFkJztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gJ1JlYWQnO1xuICAgICAgYm9vay5yZWFkID0gJ1JlYWQnO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZU9wdGlvbiwgdG9nZ2xlU3RhdHVzLCBteUxpYnJhcnkgfTtcbiIsImltcG9ydCB7IGRlbGV0ZU9wdGlvbiwgdG9nZ2xlU3RhdHVzLCBteUxpYnJhcnkgfSBmcm9tICcuL2FwcCc7XG5cbmZ1bmN0aW9uIHNob3dBbGVydChtZXNzYWdlLCBjbGFzc05hbWUpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSBgYWxlcnQgYWxlcnQtJHtjbGFzc05hbWV9YDtcblxuICBkaXYudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3Qm9va0Zvcm0nKTtcbiAgY29udGFpbmVyLmluc2VydEJlZm9yZShkaXYsIGZvcm0pO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0JykucmVtb3ZlKCksIDMwMDApO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IGRlbGV0ZUdyb3VwID0gKGJvb2ssIGNhcmQpID0+IHtcbiAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZU9wdGlvbihjcmVhdGVCdG4sIGJvb2ssIGNhcmQpO1xuICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuIGJ0bi1kYW5nZXIgbXItMiBtbC0zJyk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlQnRuKTtcbn07XG5cbmNvbnN0IHJlYWRTdGF0dXMgPSAoYm9vaywgY2FyZCkgPT4ge1xuICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdG9nZ2xlU3RhdHVzKGNyZWF0ZUJ0biwgYm9vaywgY2FyZCk7XG4gIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9ICdUb2dnbGUgc3RhdHVzJztcbiAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYnRuIGJ0bi1zdWNjZXNzJyk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlQnRuKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlCb29rID0gKGJvb2spID0+IHtcbiAgY29uc3QgQm9va0dyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stZ3JvdXAnKTtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkIG0tMic7XG5cbiAgY29uc3QgY2FyZGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZGJvZHkuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdjYXJkLXRpdGxlJztcblxuICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICBhdXRob3IuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XG5cbiAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhZ2VzLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xuXG4gIGNvbnN0IHJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHJlYWQuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCByZWFkLXN0YXR1cyc7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBib29rLnRpdGxlO1xuICBhdXRob3IudGV4dENvbnRlbnQgPSBib29rLmF1dGhvcjtcbiAgcGFnZXMudGV4dENvbnRlbnQgPSBgJHtib29rLnBhZ2VzfSBQYWdlc2A7XG4gIHJlYWQudGV4dENvbnRlbnQgPSBib29rLnJlYWQ7XG5cbiAgY2FyZGJvZHkuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcbiAgY2FyZGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjYXJkYm9keS5hcHBlbmRDaGlsZChwYWdlcyk7XG4gIGNhcmRib2R5LmFwcGVuZENoaWxkKHJlYWQpO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZGJvZHkpO1xuICByZWFkU3RhdHVzKGJvb2ssIGNhcmQpO1xuICBkZWxldGVHcm91cChib29rLCBjYXJkKTtcbiAgQm9va0dyb3VwLmFwcGVuZENoaWxkKGNhcmQpO1xufTtcblxuY29uc3QgZGlzcGxheUxpYnJhcnkgPSAobXlMaWJyYXJ5KSA9PiB7XG4gIGNvbnN0IEJvb2tHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLWdyb3VwJyk7XG4gIEJvb2tHcm91cC5pbm5lckhUTUwgPSAnJztcbiAgbXlMaWJyYXJ5LmZvckVhY2goKGJvb2spID0+IGRpc3BsYXlCb29rKGJvb2spKTtcbn07XG5cbmV4cG9ydCB7XG4gIG15TGlicmFyeSwgc2hvd0FsZXJ0LCBkZWxldGVHcm91cCwgcmVhZFN0YXR1cywgZGlzcGxheUJvb2ssIGRpc3BsYXlMaWJyYXJ5LFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG15TGlicmFyeSwgc2hvd0FsZXJ0LCBkaXNwbGF5TGlicmFyeSB9IGZyb20gJy4vZG9tJztcblxuY29uc3QgeyBuZXdCb29rRm9ybSB9ID0gZG9jdW1lbnQuZm9ybXM7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1idXR0b24nKTtcblxuZnVuY3Rpb24gQm9vayhhdXRob3IsIHRpdGxlLCBwYWdlcywgcmVhZCkge1xuICByZXR1cm4ge1xuICAgIGF1dGhvciwgdGl0bGUsIHBhZ2VzLCByZWFkLFxuICB9O1xufVxuXG5jb25zdCBhZGRCb29rVG9MaWJyYXJ5ID0gKEN1cnJlbnRCb29rKSA9PiB7XG4gIG15TGlicmFyeS5wdXNoKEN1cnJlbnRCb29rKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215TGlicmFyeScsIEpTT04uc3RyaW5naWZ5KG15TGlicmFyeSkpO1xuICBkaXNwbGF5TGlicmFyeShteUxpYnJhcnkpO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5kaXNwbGF5TGlicmFyeShteUxpYnJhcnkpO1xuXG5zdWJtaXQub25jbGljayA9ICgpID0+IHtcbiAgY29uc3QgdGl0bGUgPSBuZXdCb29rRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIicpLnZhbHVlO1xuICBjb25zdCBhdXRob3IgPSBuZXdCb29rRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYXV0aG9yXCInKS52YWx1ZTtcbiAgY29uc3QgcGFnZXMgPSBuZXdCb29rRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGFnZXNcIicpLnZhbHVlO1xuICBjb25zdCBwb3NzaWJsZVJlYWRWYWx1ZXMgPSBuZXdCb29rRm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwicmVhZFwiXScpO1xuICBsZXQgcmVhZDtcbiAgaWYgKHBvc3NpYmxlUmVhZFZhbHVlc1swXS5jaGVja2VkKSB7XG4gICAgcmVhZCA9ICdSZWFkJztcbiAgfSBlbHNlIHtcbiAgICByZWFkID0gJ05vdCBSZWFkJztcbiAgfVxuXG4gIGlmICh0aXRsZSA9PT0gJycgfHwgYXV0aG9yID09PSAnJyB8fCBwYXJzZUludChwYWdlcywgMTApIDwgMSkge1xuICAgIHNob3dBbGVydCgnSW52YWxpZCBpbnB1dCcsICdkYW5nZXInKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBib29rID0gQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZCk7XG4gICAgYWRkQm9va1RvTGlicmFyeShib29rKTtcbiAgICBzaG93QWxlcnQoJ0Jvb2sgYWRkZWQhJywgJ3N1Y2Nlc3MnKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
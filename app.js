/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calendar = /*#__PURE__*/function () {
  function Calendar(target) {
    _classCallCheck(this, Calendar);

    this.target = target;
    this.DOM = null;
    this.date = new Date();
    this.y = this.date.getFullYear(), this.m = this.date.getMonth(), this.d = this.date.getDay();
    this.lastDayM = new Date(this.y, this.m + 1, 0).getDate();
    var days = this.lastDayM;
    this.curentM = new Date(this.y, this.m + 1, 0).getMonth();
    this.curentDay = new Date(this.y, this.curentM, 1).getDay();
    var startDay = this.curentDay;
    this.init(days, startDay);
  }

  _createClass(Calendar, [{
    key: "init",
    value: function init(lastDayM, startDay) {
      var _this = this;

      var DOM = document.querySelector(this.target);

      if (DOM) {
        var a = 1;
        var lastMth = document.getElementById("calendar-month-last");
        var nextMth = document.getElementById("calendar-month-next");
        lastMth.addEventListener("click", function () {
          a = a - 1;

          _this.month(a);
        });
        nextMth.addEventListener("click", function () {
          a = a + 1;

          _this.month(a);
        });
        this.render(lastDayM, startDay);
      }
    }
  }, {
    key: "render",
    value: function render(lastDayM, curentDay, dataDate) {
      var today = this.date;

      if (curentDay == 0) {
        curentDay = 7;
      }

      var calendarDays = document.getElementById("dates");
      var exisitClassMonth = document.querySelector(".cview__month-current").textContent;

      if (exisitClassMonth == 1) {
        var nowM = new Date(this.y, this.date.getMonth());
        var nowY = nowM.toString().slice(11, -47);
        nowM = nowM.toString().slice(4, -55);
        nowM = this.translate(nowM);
        document.getElementById("calendar-month").innerHTML = nowY + ' ' + nowM;
      }

      var check = document.querySelectorAll(".cview--spacer");
      var check1 = document.querySelectorAll(".cview--date");

      if (check.length == 0 && check1.length == 0) {
        for (var i = 0; i < curentDay - 1; i++) {
          var spacer = document.createElement("div");
          spacer.className = "cview--spacer";
          calendarDays.appendChild(spacer);
        }

        for (var d = 1; d <= lastDayM; d++) {
          var _date = new Date(this.y, this.m, d);

          var day = document.createElement("div");
          day.className = "cview--date";
          day.textContent = d;
          day.setAttribute("data-date", _date);

          if (d == today.getDate() && this.y == today.getFullYear() && this.m == today.getMonth()) {
            day.classList.add("today");
          }

          calendarDays.appendChild(day);
        }
      } else {
        Array.from(document.querySelectorAll('.cview--spacer')).forEach(function (el) {
          return el.remove();
        });
        Array.from(document.querySelectorAll('.cview--date')).forEach(function (el) {
          return el.remove();
        });

        for (var x = 0; x < curentDay - 1; x++) {
          var _spacer = document.createElement("div");

          _spacer.className = "cview--spacer";
          calendarDays.appendChild(_spacer);
        }

        for (var _d = 1; _d <= lastDayM; _d++) {
          dataDate.setDate(_d);

          var _day = document.createElement("div");

          _day.className = "cview--date";
          _day.textContent = _d;

          _day.setAttribute("data-date", dataDate);

          calendarDays.appendChild(_day);
        }

        var aadToday = new Date(this.y, this.m, this.date.getDate());
        var isToday = document.querySelectorAll(".cview--date");
        console.log(dataDate);

        for (var _i = 0; _i < isToday.length; _i++) {
          if (isToday[_i].dataset.date == aadToday) {
            console.log(isToday[_i]);

            isToday[_i].classList.add("today");
          }
        }
      }
    }
  }, {
    key: "month",
    value: function month(a) {
      var curentMth = document.getElementById("calendar-month");
      var dataDate = new Date(this.y, this.m + a - 1);
      var y = this.date.getFullYear(),
          m = this.date.getMonth();
      var curentM = new Date(y, this.date.getMonth() + a, 0);
      var curentY = curentM.toString().slice(11, -47);
      curentM = curentM.toString().slice(4, -55);
      var curM = this.translate(curentM);
      curentMth.innerHTML = curentY + ' ' + curM;
      var lastDayM = new Date(y, m + a, 0).getDate();
      var newM = new Date(y, m + a, 0).getMonth();
      var startDay = new Date(curentY, newM, 1).getDay();
      this.render(lastDayM, startDay, dataDate);
    }
  }, {
    key: "translate",
    value: function translate(curentM) {
      switch (curentM) {
        case 'Jan':
          return curentM = 'Sausis';
          break;

        case 'Feb':
          return curentM = 'Vasaris';
          break;

        case 'Mar':
          return curentM = 'Kovas';
          break;

        case 'Apr':
          return curentM = 'Balandis';
          break;

        case 'May':
          return curentM = 'Gegužė';
          break;

        case 'Jun':
          return curentM = 'Birželis';
          break;

        case 'Jul':
          return curentM = 'Liepa';
          break;

        case 'Aug':
          return curentM = 'Rugpjūtis';
          break;

        case 'Sep':
          return curentM = 'Rugsėjis';
          break;

        case 'Oct':
          return curentM = 'Spalis';
          break;

        case 'Nov':
          return curentM = 'Lapkritis';
          break;

        case 'Dec':
          return curentM = 'Gruodis';
          break;
      }
    }
  }]);

  return Calendar;
}();

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var path = "/wordpress/wp-content/plugins/BIT_first/api/?route=";
var uri = document.location.origin;
var gallery = document.getElementById("loadeGallery");
var arraySend = [];
var isListener = true;

function startGallery() {
  if (gallery) {
    window.addEventListener("load", renderGallery, false);
  }
}

function renderGallery() {
  //Check File API support
  if (window.File && window.FileList && window.FileReader) {
    var filesInput = document.getElementById("files");
    filesInput.addEventListener("change", function (event) {
      var array = Array.from(event.target.files);
      renderImages(array);
    });
  } else {
    console.log("Your browser does not support File API");
  }
}

function renderImages(filesAll) {
  var currentDiv = document.getElementById("message");

  var _loop = function _loop(i) {
    if (filesAll[i].size < 1048576) {
      if (filesAll[i].type.match('image')) {
        var picReader = new FileReader();
        picReader.addEventListener("load", function (event) {
          var picFile = event.target;
          var deleteId = getID();
          var deleteBtn = getID();
          var output = document.getElementById("result");
          var div = document.createElement("div");
          div.className = "galleryDiv";
          div.id = deleteId;
          div.innerHTML = "<img class=\"uploadeImageGallery\" src=\" ".concat(picFile.result, " \"\n                      alt=\" \"/>\n                      <label for=\"").concat(deleteBtn, "\">Tag: </label>\n                      <input type=\"text\" id=\"").concat(filesAll[i].name, "\" class=\"altInput\" name=\"altImage\" value=\"\">\n                      <div class=\"deleteImd\" id=\"").concat(deleteBtn, "\">Trinti<div/>");
          output.insertBefore(div, currentDiv);
          var imgDeleteBtn = document.getElementById(deleteBtn);
          var deleteDiv = document.getElementById(deleteId);
          imgDeleteBtn.addEventListener("click", function () {
            filesAll.splice(i, 1);
            deleteDiv.remove();
          });
        });
        picReader.readAsDataURL(filesAll[i]);
      } else {
        alert("Tai nera paveikslelio tipo formatas");
      }
    } else {
      alert("Paveikslelio dydis virsija 1MB, rekomneduojamas dydis yra iki 200kb"); //  const newContent = document.createTextNode("Paveikslelio dydis virsija 1MB, rekomneduojamas dydis yra iki 200kb");
      //   currentDiv.appendChild(newContent);
    }
  };

  for (var i = 0; i < filesAll.length; i++) {
    _loop(i);
  }

  arraySend.push(filesAll);
  var uploadeImg = document.getElementById("submitImg");

  if (isListener) {
    uploadeImg.addEventListener('click', function () {
      arraySend = filter(arraySend);
      sendImageData(arraySend);
    });
    isListener = false;
  }
}

function sendImageData(filesAll) {
  var tagInput;
  var formData = new FormData();
  var album = document.getElementById('albumName');

  for (var i = 0; i < filesAll.length; i++) {
    tagInput = document.getElementById(filesAll[i].name);
    formData.append('files' + i, filesAll[i]);
    formData.append('tag' + i, tagInput.value + ' ');
  }

  formData.append('album', album.value);
  axios.post(uri + path + 'gallery-store-front', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(function (response) {})["catch"](function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }

    console.log(error);
  }); // location.reload();
}

function getID() {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

function filter(filesAll) {
  var file = [];

  for (var i = 0; i < filesAll.length; i++) {
    for (var j = 0; j < filesAll[i].length; j++) {
      if (filesAll[i][j] != undefined && filesAll[i][j] != null && filesAll[i][j] != "" && filesAll[i][j] != NaN && filesAll[i][j].size < 1048576) {
        file.push(filesAll[i][j]);
      }
    }
  }

  file = file.filter(function (power, toThe, yellowVests) {
    return yellowVests.map(function (updateDemocracy) {
      return updateDemocracy['name'];
    }).indexOf(power['name']) === toThe;
  });
  return file;
}

/* harmony default export */ __webpack_exports__["default"] = (startGallery());

/***/ }),

/***/ "./src/ideja.js":
/*!**********************!*\
  !*** ./src/ideja.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var uri = document.location.origin;
var path = '/wordpress/wp-content/plugins/BIT_first/api/?route=';
/*----------------------- save content axios----------------------------*/

function getText() {
  var textArea = document.getElementById("textArea");
  var txt = document.getElementById("textArea").value;

  if (txt != undefined && txt != null && txt.length >= 0 && txt != "" && txt != NaN) {
    var words = txt.split(/\s+/);
    textArea.value = '';
    axios.post(uri + path + 'idea-create-front', {
      idea: words
    })["catch"](function (err) {
      console.log(err instanceof TypeError);
    });
    setTimeout(renderTreeColons, 500);
  }
}

;
/*-----------------------like button and cookie------------------------------------------*/

function likeAdd(like) {
  if (like != undefined && like != null && like.length >= -1 && like != "" && like != NaN) {
    axios.post(uri + path + 'idea-create-front', {
      idea_like: like
    });
    setTimeout(renderTreeColons, 500);
  }
}

;

function getCookie(newCookie) {
  var checkCookie;
  var existCookie = [];
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    existCookie.push(cookies[i].split('=')[0].toLowerCase());

    if (existCookie[i] == newCookie) {
      return existCookie[i];
    }
  }
}
/*------------------------------render data  axios-----------------------------------------*/


var startIdea = document.getElementById("startIdeaFront");

function startHomeIdea() {
  if (startIdea) {
    window.addEventListener('load', renderTreeColons);
    var postBtn = document.getElementById("sendIdea");

    if (postBtn) {
      postBtn.addEventListener("click", getText);
    }

    textArea.addEventListener("input", function () {
      var maxlength = this.getAttribute("maxlength");
      var currentLength = this.value.length;

      if (currentLength >= maxlength) {
        document.getElementById("count").innerHTML = "0  simboliu liko";
      } else {
        document.getElementById("count").innerHTML = maxlength - currentLength + " simboliu liko"; //console.log(maxlength - currentLength + " chars left");
      }
    });

    var _clickFunction = function _clickFunction(event) {
      var like = this.getAttribute("data-custom-id");
      var likeId = ' idea_cookie-' + like;

      if (likeId != getCookie(likeId)) {
        likeAdd(like);
      }
    };
  }
}

function renderTreeColons() {
  axios.get(uri + path + 'idea-render-front', {}).then(function (response) {
    if (response.status == 200 && response.statusText == 'OK') {
      var data = response.data.allData;
      var keys = [];

      for (var key in data) {
        keys.push(key);
      }

      var rende = document.getElementById('box');
      var HTMLString = '';
      var count = 0;

      for (var i = keys.length - 1; i >= 0; i--) {
        var value = data[keys[i]];
        count++;

        if (count <= 3) {
          HTMLString += "<div class=\"box\"> \n          <div class=\"text\"><div class=\"data\" >".concat(value.post_date, "</div>                 \n            </div>\n            <div class=\"ideaContent\">\n                  ").concat(value.idea_content, "\n            </div>   \n            <div class=\"like\" data-custom-id=\"").concat(value.ID, "\">\n              <svg class=\"like__btn animated\" id=\"Capa_1\" enable-background=\"new 0 0 512 512\" height=\"40\" viewBox=\"0 0 512 512\" width=\"40\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><linearGradient id=\"SVGID_1_\" gradientUnits=\"userSpaceOnUse\" x1=\"256\" x2=\"256\" y1=\"512\" y2=\"0\"><stop offset=\"0\" stop-color=\"#fd3a84\"/><stop offset=\"1\" stop-color=\"#ffa68d\"/></linearGradient><linearGradient id=\"SVGID_2_\" gradientUnits=\"userSpaceOnUse\" x1=\"256\" x2=\"256\" y1=\"421\" y2=\"121\"><stop offset=\"0\" stop-color=\"#ffc2cc\"/><stop offset=\"1\" stop-color=\"#fff2f4\"/></linearGradient><g><g><g><circle cx=\"256\" cy=\"256\" fill=\"url(#SVGID_1_)\" r=\"256\"/></g></g><g><g><path d=\"m331 121c-32.928 0-58.183 18.511-75 46.058-16.82-27.552-42.077-46.058-75-46.058-25.511 0-48.788 10.768-65.541 30.32-15.772 18.409-24.459 42.993-24.459 69.225 0 28.523 10.698 54.892 33.666 82.986 20.138 24.632 49.048 49.971 82.524 79.313 12.376 10.848 25.174 22.065 38.775 34.306 2.853 2.567 6.444 3.85 10.035 3.85s7.182-1.283 10.035-3.851c13.601-12.241 26.398-23.458 38.775-34.306 33.476-29.341 62.386-54.681 82.524-79.313 22.968-28.092 33.666-54.462 33.666-82.985 0-53.637-36.748-99.545-90-99.545z\" fill=\"url(#SVGID_2_)\"/></g></g></g> \n                <span class=\"like__number\">").concat(value.idea_like, "</span>\n              </svg>\n          </div>            \n        </div>");
        } else {
          break;
        }
      }

      rende.innerHTML = HTMLString;
      var likeBtn = document.querySelectorAll(".like");

      for (var _i = 0; _i < likeBtn.length; _i++) {
        likeBtn[_i].addEventListener('click', clickFunction, false);
      }
    }

    return response;
  })["catch"](function (error) {
    // Error 
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }

    console.log(error);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (startHomeIdea());

/***/ }),

/***/ "./src/idejos.js":
/*!***********************!*\
  !*** ./src/idejos.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var uri = document.location.origin;
var path = '/wordpress/wp-content/plugins/BIT_first/api/?route=';
var startIdeas = document.getElementById('startIdeas');

function startAllIdeas() {
  if (startIdeas) {
    window.addEventListener('load', getData);
    var postBtn = document.getElementById("send");

    if (postBtn) {
      postBtn.addEventListener("click", getText);
    }

    textArea.addEventListener("input", function () {
      var maxlength = this.getAttribute("maxlength");
      var currentLength = this.value.length;

      if (currentLength >= maxlength) {
        document.getElementById("count").innerHTML = "0  simboliu liko";
      } else {
        document.getElementById("count").innerHTML = maxlength - currentLength + " simboliu liko";
      }
    });
  }
}

function getData() {
  axios.get(uri + path + 'ideas-render-front', {}).then(function (response) {
    if (response.status == 200 && response.statusText == 'OK') {
      var data = response.data.allData;
      return renderColons(data);
    }
  })["catch"](function (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message);
    }

    console.log(error);
  });
}

function renderColons(data) {
  var keys = [];

  for (var key in data) {
    keys.push(key);
  }

  var render = document.getElementById('renderIdeas');
  var HTMLString = '';
  var likenumber = [];
  var solution = [];
  var date = [];
  var content = [];
  var likeId = [];
  var count = 0;

  for (var i = keys.length - 1; i >= 0; i--) {
    count++;
    var value = data[keys[i]];
    solution.push(value.idea_solution);
    likenumber.push(value.idea_like);
    content.push(value.idea_content);
    date.push(value.post_date);
    likeId.push(value.ID);
    HTMLString += "<div class=\"box ideabox\" id=\"".concat(count, "\">\n          <div class=\"text\">\n            <div class=\"data\" >\n               ").concat(value.post_date, "\n            </div>\n            <div class=\"ideaContent\">\n                 ").concat(value.idea_content, "\n            </div>\n            <div class=\"likeH\" id=\"").concat(value.ID, "\">\n           </div>\n          </div>\n         </div>");
  }

  render.innerHTML = HTMLString;
  var likesHover = document.querySelectorAll(".box");

  var _loop = function _loop(_i) {
    likesHover[_i].addEventListener('mouseenter', function (e) {
      var text = document.getElementById(likesHover[_i].id);

      if (solution[_i] && solution[_i] != "  ") {
        var HTML = '';
        HTML = "<div class=\"ideaSolutionText\">\n                     ".concat(solution[_i], "\n                </div>");
        text.innerHTML = HTML;
      } else {
        var _HTML = '';
        _HTML = "<div class=\"likeBox\" class=\"likes\" >\n                  <svg height=\"25pt\" viewBox=\"0 -20 480 480\" width=\"25pt\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m348 0c-43 .0664062-83.28125 21.039062-108 56.222656-24.71875-35.183594-65-56.1562498-108-56.222656-70.320312 0-132 65.425781-132 140 0 72.679688 41.039062 147.535156 118.6875 216.480469 35.976562 31.882812 75.441406 59.597656 117.640625 82.625 2.304687 1.1875 5.039063 1.1875 7.34375 0 42.183594-23.027344 81.636719-50.746094 117.601563-82.625 77.6875-68.945313 118.726562-143.800781 118.726562-216.480469 0-74.574219-61.679688-140-132-140zm-108 422.902344c-29.382812-16.214844-224-129.496094-224-282.902344 0-66.054688 54.199219-124 116-124 41.867188.074219 80.460938 22.660156 101.03125 59.128906 1.539062 2.351563 4.160156 3.765625 6.96875 3.765625s5.429688-1.414062 6.96875-3.765625c20.570312-36.46875 59.164062-59.054687 101.03125-59.128906 61.800781 0 116 57.945312 116 124 0 153.40625-194.617188 266.6875-224 282.902344zm0 0\"/>\n                      <span class=\"number\"> ".concat(likenumber[_i], "</span>\n                  </svg>    \n          </div>");
        text.innerHTML = _HTML;
      }
    });

    likesHover[_i].addEventListener('mouseout', function (e) {
      var contentHoverOut = document.getElementById(likesHover[_i].id);
      var HTML = '';
      HTML += " <div class=\"text\">\n            <div class=\"data\" >\n               ".concat(date[_i], "\n            </div>\n            <div class=\"ideaContent\">\n                 ").concat(content[_i], "\n            </div>\n            <div class=\"likeH\" id=\"").concat(likeId[_i], "\">\n           </div>\n          </div> ");
      contentHoverOut.innerHTML = HTML;
    });
  };

  for (var _i = 0; _i < likesHover.length; _i++) {
    _loop(_i);
  }
}

function getText() {
  var textArea = document.getElementById("textArea");
  var txt = document.getElementById("textArea").value;

  if (txt != undefined && txt != null && txt.length >= 0 && txt != "" && txt != NaN) {
    var words = txt.split(/\s+/);
    textArea.value = '';
    axios.post(uri + path + 'idea-create-front', {
      idea: words
    })["catch"](function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }

      console.log(error);
    });
    setTimeout(getData, 500);
  }
}

;
/* harmony default export */ __webpack_exports__["default"] = (startAllIdeas());

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idejos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idejos */ "./src/idejos.js");
/* harmony import */ var _ideja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ideja */ "./src/ideja.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
/* harmony import */ var _calendar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.js */ "./src/calendar.js");


 // import Calendar from './calendar.js';


new _calendar_js__WEBPACK_IMPORTED_MODULE_3__["default"]('.calendar');

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/main.js ./src/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\xampp\htdocs\wordpress\wp-content\themes\BIT-first-theme\src\main.js */"./src/main.js");
module.exports = __webpack_require__(/*! D:\xampp\htdocs\wordpress\wp-content\themes\BIT-first-theme\src\app.scss */"./src/app.scss");


/***/ })

/******/ });
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// SELECTING ITEMS FROM THE DOM
const selectedItemsFromTheDom = () => {
  return {
    container: document.querySelector('.colorContainer'),
    submitBtn: document.querySelector('.btnSubmit'),
    randomBtn: document.querySelector('.randomBtn'),
    spinner: document.querySelector('.spinner'),
    inputValue: document.querySelector('.inputValue'),
    showCopyTo: document.querySelector('.copyText'),
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = selectedItemsFromTheDom;


// RANDOM NUMBER GENERATOR
const randomNumber = () =>
  Math.floor(Math.random() * randomColor.length - 1)
/* harmony export (immutable) */ __webpack_exports__["c"] = randomNumber;


// A RANDOM COLOR LIST
const randomColor = [
  'Tomato',
  'red',
  'orangered',
  'Orange',
  'DodgerBlue',
  'MediumSeaGreen',
  'SlateBlue',
  'Violet',
  'Crimson',
  'Chocolate',
  'Coral',
  'DarkRed',
  'Aquamarine',
  'Aqua',
  'Bisque',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'DarkBlue',
  'DarkGoldenRod',
  'DarkCyan',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkSlateBlue',
  'DeepPink',
  'DarkViolet',
  'DarkTurquoise',
  'FireBrick',
  'DodgerBlue',
  'Indigo',
  'IndianRed',
  'LightCoral',
  'MidnightBlue',
  'Navy',
  'teal',
]
/* harmony export (immutable) */ __webpack_exports__["b"] = randomColor;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = displayColorToTheDom;
// ITEM READY TO DISPLAY TO THE DOM
const domItems = (rgb, hex, type) => {
  return `<div id= 'color-box' class='hex' style='background-color:rgb(${rgb.join()})'>
        <div class='time' style="color:${
          type != 'tint' ? 'white' : 'black'
        }">#${hex}</div>
        </div>`
}
/* harmony export (immutable) */ __webpack_exports__["a"] = domItems;


// #####  this function display the item to the DOM &
// ----- And add event to each to get the tex

function displayColorToTheDom(
  code,
  html,
  randomBtn,
  container,
  spinner,
  inputValue,
  showCopyTo
) {
  // THE CODE ABOVE IN THE FUNCTION ARE VARIABLE PASSDOWN ✔ TO USE

  return () => {
    randomBtn.style.background = `${code}`
    container.insertAdjacentHTML('beforeend', html.join(' '))
    spinner.classList.add('activeSpinner')
    inputValue.value = ''
    randomBtn.disabled = false

    // COPY FUNCTIONALITIES
    Array.from(document.querySelectorAll('.hex')).map((el, i) => {
      el.addEventListener('click', async () => {
        const b = document.querySelectorAll('.time')[i].textContent
        await navigator.clipboard.writeText(b)
        showCopyTo.classList.add('show')
        setTimeout(() => {
          showCopyTo.classList.remove('show')
        }, 500)
      })
    })
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).Values=r()}(this,(function(){"use strict";var e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},r=new RegExp("[^#a-f\\d]","gi"),n=new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$","i"),t=new RegExp(/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/,"i"),a="-?\\d*(?:\\.\\d+)",i="("+a+"?)",o="("+a+"?%)",s=("^\n  hsla?\\(\n    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*,\n    \\s*"+o+"\\s*,\n    \\s*"+o+"\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g,""),l=new RegExp(s),u=("^\n  hsla?\\(\n    \\s*(-?\\d*(?:\\.\\d+)?(?:deg|rad|turn)?)\\s*\n    \\s+"+o+"\n    \\s+"+o+"\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g,""),h=new RegExp(u),d=("^\n  rgba?\\(\n    \\s*"+i+"\\s*,\n    \\s*"+i+"\\s*,\n    \\s*"+i+"\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g,""),g=new RegExp(d),p=("^\n  rgba?\\(\n    \\s*"+o+"\\s*,\n    \\s*"+o+"\\s*,\n    \\s*"+o+"\\s*\n    (?:,\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n  $\n").replace(/\n|\s/g,""),c=new RegExp(p),f=("^\n  rgba?\\(\n    \\s*"+i+"\n    \\s+"+i+"\n    \\s+"+i+"\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n$\n").replace(/\n|\s/g,""),v=new RegExp(f),b=("^\n  rgba?\\(\n    \\s*"+o+"\n    \\s+"+o+"\n    \\s+"+o+"\n    \\s*(?:\\s*\\/\\s*(-?\\d*(?:\\.\\d+)?%?)\\s*)?\n  \\)\n$\n").replace(/\n|\s/g,""),m=new RegExp(b),y=new RegExp(/^transparent$/,"i"),w=function(e,r,n){return Math.min(Math.max(r,e),n)},k=function(e){var r=e;return"number"!=typeof r&&(r=r.endsWith("%")?255*parseFloat(r)/100:parseFloat(r)),w(Math.round(r),0,255)},x=function(e){return w(parseFloat(e),0,100)};function M(e){var r=e;return"number"!=typeof r&&(r=r.endsWith("%")?parseFloat(r)/100:parseFloat(r)),w(r,0,1)}function E(e){var t=function(e,t){if(void 0===t&&(t={}),"string"!=typeof e||r.test(e)||!n.test(e))throw new TypeError("Expected a valid hex string");var a=1;8===(e=e.replace(/^#/,"")).length&&(a=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(a=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var i=parseInt(e,16),o=i>>16,s=i>>8&255,l=255&i;return"array"===t.format?[o,s,l,a]:{red:o,green:s,blue:l,alpha:a}}(e,{format:"array"});return F([null,t[0],t[1],t[2],t[3]])}function F(e){var r=e[1],n=e[2],t=e[3],a=e[4];return void 0===a&&(a=1),{type:"rgb",values:[r,n,t].map(k),alpha:M(null===a?1:a)}}
/**
	 * parse-css-color
	 * @version v0.1.2
	 * @link http://github.com/noeldelgado/parse-css-color/
	 * @license MIT
	 */var R=function(r){if("string"!=typeof r)return null;var n=t.exec(r);if(n)return E(n[0]);var a=h.exec(r)||l.exec(r);if(a)return function(e){var r=e[1],n=e[2],t=e[3],a=e[4];void 0===a&&(a=1);var i=r;return{type:"hsl",values:[i=i.endsWith("turn")?360*parseFloat(i)/1:i.endsWith("rad")?Math.round(180*parseFloat(i)/Math.PI):parseFloat(i),x(n),x(t)],alpha:M(null===a?1:a)}}(a);var i=v.exec(r)||m.exec(r)||g.exec(r)||c.exec(r);if(i)return F(i);if(y.exec(r))return F([null,0,0,0,0]);var o=e[r.toLowerCase()];return o?F([null,o[0],o[1],o[2],1]):null};var $=function(e){var r,n,t,a,i,o=e[0]/360,s=e[1]/100,l=e[2]/100;if(0==s)return[i=255*l,i,i];r=2*l-(n=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(t=o+1/3*-(u-1))<0&&t++,t>1&&t--,i=6*t<1?r+6*(n-r)*t:2*t<1?n:3*t<2?r+(n-r)*(2/3-t)*6:r,a[u]=255*i;return a};var q=function(e,r,n){return Math.min(Math.max(e,r),n)};function S(e){var r=Math.round(q(e,0,255)).toString(16);return 1==r.length?"0"+r:r}var I=function(e){var r=4===e.length?S(255*e[3]):"";return"#"+S(e[0])+S(e[1])+S(e[2])+r};var j=function(e){var r,n,t=e[0]/255,a=e[1]/255,i=e[2]/255,o=Math.min(t,a,i),s=Math.max(t,a,i),l=s-o;return s==o?r=0:t==s?r=(a-i)/l:a==s?r=2+(i-t)/l:i==s&&(r=4+(t-a)/l),(r=Math.min(60*r,360))<0&&(r+=360),n=(o+s)/2,[r,100*(s==o?0:n<=.5?l/(s+o):l/(2-s-o)),100*n]};
/**
	 * mix-css-color
	 * @version v0.1.1
	 * @link http://github.com/noeldelgado/mix-css-color/
	 * @license MIT
	 */function C(e){var r=R(e);return null===r?null:("hsl"===r.type&&(r.values=$(r.values)),r)}function W(e,r,n){void 0===n&&(n=50);var t=C(e),a=C(r);if(!t||!a)return null;var i=Math.min(Math.max(0,n),100)/100,o=2*i-1,s=t.alpha-a.alpha,l=((o*s==-1?o:(o+s)/(1+o*s))+1)/2,u=1-l,h=t.values.map((function(e,r){return Math.round(t.values[r]*l+a.values[r]*u)})),d=h[0],g=h[1],p=h[2],c=parseFloat((t.alpha*i+a.alpha*(1-i)).toFixed(8));return{hex:I([d,g,p]),hexa:I([d,g,p,c]),rgba:[d,g,p,c],hsla:j([d,g,p]).map(Math.round).concat([c])}}
/**
	 * values.js - Get the tints and shades of a color
	 * @version v2.0.0
	 * @link http://noeldelgado.github.io/values.js/
	 * @license MIT
	 */var _=function(e,r){return null===e||isNaN(e)||"string"==typeof e?r:e},N=function(e,r,n){var t;void 0===e&&(e="#000"),void 0===r&&(r="base"),void 0===n&&(n=0),t=[[0,0,0],1,r,n],this.rgb=t[0],this.alpha=t[1],this.type=t[2],this.weight=t[3];var a=null===e?"#000":e;if("string"!=typeof a)throw new TypeError("Input should be a string: "+a);var i=R(a);if(!i)throw new Error("Unable to parse color from string: "+a);return this["_setFrom"+i.type.toUpperCase()](i.values.concat([i.alpha]))},O={hex:{configurable:!0}};return O.hex.get=function(){return this.hexString().replace(/^#/,"")},N.prototype.setColor=function(e){var r=R(e);return r?this["_setFrom"+r.type.toUpperCase()](r.values.concat([r.alpha])):null},N.prototype.tint=function(e,r){return void 0===r&&(r=_(e,50)),new N("rgb("+W("#fff",this.rgbString(),r).rgba+")","tint",r)},N.prototype.shade=function(e,r){return void 0===r&&(r=_(e,50)),new N("rgb("+W("#000",this.rgbString(),r).rgba+")","shade",r)},N.prototype.tints=function(e,r){var n=this;return void 0===r&&(r=_(e,10)),Array.from({length:100/r},(function(e,t){return n.tint((t+1)*r)}))},N.prototype.shades=function(e,r){var n=this;return void 0===r&&(r=_(e,10)),Array.from({length:100/r},(function(e,t){return n.shade((t+1)*r)}))},N.prototype.all=function(e){return void 0===e&&(e=10),this.tints(e).reverse().concat([Object.assign(this)],this.shades(e))},N.prototype.hexString=function(){return I(this.alpha>=1?this.rgb:this.rgb.concat([this.alpha]))},N.prototype.rgbString=function(){var e=(this.alpha>=1?this.rgb:this.rgb.concat([this.alpha])).join(", ");return(this.alpha>=1?"rgb":"rgba")+"("+e+")"},N.prototype.getBrightness=function(){return Math.round(this.rgb.reduce((function(e,r){return e+r}))/765*100)},N.prototype._setFromRGB=function(e){var r;return r=[[e[0],e[1],e[2]],e[3]],this.rgb=r[0],this.alpha=r[1],this},N.prototype._setFromHSL=function(e){var r,n=e[0],t=e[1],a=e[2],i=e[3];return r=[$([n,t,a]).map(Math.round),i],this.rgb=r[0],this.alpha=r[1],this},Object.defineProperties(N.prototype,O),N.VERSION="v2.0.0",N}));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_values_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_values_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_values_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__another__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__displayItems__ = __webpack_require__(1);
// 'use strict'




// Destructure Item of Dom Use
const {
  container,
  submitBtn,
  randomBtn,
  spinner,
  inputValue,
  showCopyTo,
} = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__another__["a" /* selectedItemsFromTheDom */])()

// ColorGen function for reusability purpose
const colorGen = (code = __WEBPACK_IMPORTED_MODULE_1__another__["b" /* randomColor */][__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__another__["c" /* randomNumber */])()]) => {
  try {
    const color = new __WEBPACK_IMPORTED_MODULE_0_values_js___default.a(code).all(11).slice(0, 16)

    console.log(color)

    // this return an array, so we use JOIN method in the displayColorToTheDom
    const html = color.map((el) => {
      const { rgb, hex, type } = el
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__displayItems__["a" /* domItems */])(rgb, hex, type)
    })

    container.innerHTML = null
    spinner.classList.remove('activeSpinner')

    setTimeout(
      // PASS VARIABLE TO BE USE BY THI FUNCTION ❗
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__displayItems__["b" /* displayColorToTheDom */])(
        code,
        html,
        randomBtn,
        container,
        spinner,
        inputValue,
        showCopyTo
      ),
      1500
    )
  } catch (err) {
    alert(`incorrect color ${err.message.split(' ')[6]}`)
  }
}

// GENERATE A RANDOM COLOR
randomBtn.addEventListener('click', () => {
  colorGen(__WEBPACK_IMPORTED_MODULE_1__another__["b" /* randomColor */][__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__another__["c" /* randomNumber */])()])
  randomBtn.disabled = true
})

// SUBMIT TEXT INPUT TO VALUES.JS
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const val = inputValue.value
  if (val) return colorGen(val)
  return alert('please enter a valid color code or name')
})
colorGen()


/***/ })
/******/ ]);
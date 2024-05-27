'use strict';

// scrollTo polyfill
!function(){"use strict";function o(){var o,t,e,c,n,l,f=window,p=document;function a(o,t){this.scrollLeft=o,this.scrollTop=t}function r(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function i(o,t){return"Y"===t?o.clientHeight+l<o.scrollHeight:"X"===t?o.clientWidth+l<o.scrollWidth:void 0}function s(o,t){t=f.getComputedStyle(o,null)["overflow"+t];return"auto"===t||"scroll"===t}function d(o){var t=(n()-o.startTime)/e,l=t=1<t?1:t,t=.5*(1-Math.cos(Math.PI*l)),l=o.startX+(o.x-o.startX)*t,t=o.startY+(o.y-o.startY)*t;o.method.call(o.scrollable,l,t),l===o.x&&t===o.y||f.requestAnimationFrame(d.bind(f,o))}function h(o,t,l){var e,r,i,s=n(),o=o===p.body?(r=(e=f).scrollX||f.pageXOffset,i=f.scrollY||f.pageYOffset,c.scroll):(r=(e=o).scrollLeft,i=o.scrollTop,a);d({scrollable:e,method:o,startTime:s,startX:r,startY:i,x:t,y:l})}"scrollBehavior"in p.documentElement.style&&!0!==f.__forceSmoothScrollPolyfill__||(t=f.HTMLElement||f.Element,e=468,c={scroll:f.scroll||f.scrollTo,scrollBy:f.scrollBy,elementScroll:t.prototype.scroll||a,scrollIntoView:t.prototype.scrollIntoView},n=f.performance&&f.performance.now?f.performance.now.bind(f.performance):Date.now,o=f.navigator.userAgent,l=new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0,f.scroll=f.scrollTo=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?h.call(f,p.body,void 0!==arguments[0].left?~~arguments[0].left:f.scrollX||f.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:f.scrollY||f.pageYOffset):c.scroll.call(f,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:f.scrollX||f.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:f.scrollY||f.pageYOffset))},f.scrollBy=function(){void 0!==arguments[0]&&(r(arguments[0])?c.scrollBy.call(f,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(f,p.body,~~arguments[0].left+(f.scrollX||f.pageXOffset),~~arguments[0].top+(f.scrollY||f.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==r(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");c.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==r(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):c.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){var o,t,l;!0!==r(arguments[0])?(t=(o=function(o){for(;o!==p.body&&!1===(t=i(l=o,"Y")&&s(l,"Y"),l=i(l,"X")&&s(l,"X"),t||l);)o=o.parentNode||o.host;var t,l;return o}(this)).getBoundingClientRect(),l=this.getBoundingClientRect(),o!==p.body?(h.call(this,o,o.scrollLeft+l.left-t.left,o.scrollTop+l.top-t.top),"fixed"!==f.getComputedStyle(o).position&&f.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):f.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):c.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])})}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

// DOM ON LOAD ===================================================================
document.addEventListener("DOMContentLoaded", function () {
  const gotoLinks = document.querySelectorAll('[data-goto]');

  if (gotoLinks.length > 0) {
    gotoLinks.forEach((gotoLink) => {
      gotoLink.addEventListener("click", onGoToLinkClick);
    });

    function onGoToLinkClick(e) {
      e.preventDefault();

      if (this.dataset.goto && document.querySelector(this.dataset.goto)) {
        const gotoBlock = document.querySelector(this.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - 50;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
      }
    }
  }
});


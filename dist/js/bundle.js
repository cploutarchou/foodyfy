!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var i=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var o={insert:"head",singleton:!1},a=(i(n.i,r,o),r.locals?r.locals:{});n.exports=a},function(n,e,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a={};function l(n,e,t){for(var i=0;i<e.length;i++){var r={css:e[i][1],media:e[i][2],sourceMap:e[i][3]};a[n][i]?a[n][i](r):a[n].push(u(r,t))}}function s(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function m(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function f(n,e,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var g=null,p=0;function u(n,e){var t,i,r;if(e.singleton){var o=p++;t=g||(g=s(e)),i=m.bind(null,t,o,!1),r=m.bind(null,t,o,!0)}else t=s(e),i=f.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),n=t.base?n+t.base:n,e=e||[],a[n]||(a[n]=[]),l(n,e,t),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){a[n]||(a[n]=[]),l(n,e,t);for(var i=e.length;i<a[n].length;i++)a[n][i]();a[n].length=e.length,0===a[n].length&&delete a[n]}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"* {\n    margin: 0;\n    padding: 0;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: inherit;\n}\n\nhtml {\n    box-sizing: border-box;\n    font-size: 62.5%;\n}\n\n@media only screen and (max-width: 68.75em) {\n    html {\n        font-size: 50%;\n    }\n}\n\nbody {\n    font-family: 'Nunito Sans', sans-serif;\n    font-weight: 400;\n    line-height: 1.6;\n    color: #655A56;\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n    background-size: cover;\n    background-repeat: no-repeat;\n    min-height: calc(100vh - 2 * 4vw);\n}\n\n.container {\n    max-width: 140rem;\n    margin: 4vw auto;\n    background-color: #fff;\n    border-radius: 6px;\n    overflow: hidden;\n    box-shadow: 0 2rem 6rem 0.5rem rgba(101, 90, 86, 0.2);\n    display: grid;\n    grid-template-rows: 10rem minmax(100rem, auto);\n    grid-template-columns: 1.1fr 2fr 1.1fr;\n    grid-template-areas: \"head head head\" \"list recipe shopping\";\n}\n\n@media only screen and (max-width: 68.75em) {\n    .container {\n        width: 100%;\n        margin: 0;\n        border-radius: 0;\n    }\n}\n\n.btn, .btn-small, .btn-small:link, .btn-small:visited {\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n    border-radius: 10rem;\n    border: none;\n    text-transform: uppercase;\n    color: #fff;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    transition: all .2s;\n}\n\n.btn:hover, .btn-small:hover {\n    transform: scale(1.05);\n}\n\n.btn:focus, .btn-small:focus {\n    outline: none;\n}\n\n.btn > *:first-child, .btn-small > *:first-child {\n    margin-right: 1rem;\n}\n\n.btn {\n    padding: 1.3rem 3rem;\n    font-size: 1.4rem;\n}\n\n.btn svg {\n    height: 2.25rem;\n    width: 2.25rem;\n    fill: currentColor;\n}\n\n.btn-small, .btn-small:link, .btn-small:visited {\n    font-size: 1.3rem;\n    padding: 1rem 1.75rem;\n    text-decoration: none;\n}\n\n.btn-small svg, .btn-small:link svg, .btn-small:visited svg {\n    height: 1.5rem;\n    width: 1.5rem;\n    fill: currentColor;\n}\n\n.btn-inline {\n    color: #F59A83;\n    font-size: 1.2rem;\n    border: none;\n    background-color: #F9F5F3;\n    padding: .8rem 1.2rem;\n    border-radius: 10rem;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    transition: all .2s;\n}\n\n.btn-inline svg {\n    height: 1.5rem;\n    width: 1.5rem;\n    fill: currentColor;\n    margin: 0 .2rem;\n}\n\n.btn-inline span {\n    margin: 0 .4rem;\n}\n\n.btn-inline:hover {\n    color: #F48982;\n    background-color: #F2EFEE;\n}\n\n.btn-inline:focus {\n    outline: none;\n}\n\n.btn-tiny {\n    height: 1.75rem;\n    width: 1.75rem;\n    border: none;\n    background: none;\n    cursor: pointer;\n}\n\n.btn-tiny svg {\n    height: 100%;\n    width: 100%;\n    fill: #F59A83;\n    transition: all .3s;\n}\n\n.btn-tiny:focus {\n    outline: none;\n}\n\n.btn-tiny:hover svg {\n    fill: #F48982;\n    transform: translateY(-1px);\n}\n\n.btn-tiny:active svg {\n    fill: #F48982;\n    transform: translateY(0);\n}\n\n.btn-tiny:not(:last-child) {\n    margin-right: .3rem;\n}\n\n.heading-2 {\n    font-size: 1.8rem;\n    font-weight: 600;\n    color: #F59A83;\n    text-transform: uppercase;\n    margin-bottom: 2.5rem;\n    text-align: center;\n    transform: skewY(-3deg);\n}\n\n.copyright {\n    color: #968B87;\n    font-size: 1.2rem;\n    margin-top: auto;\n}\n\n.link:link,\n.link:visited {\n    color: #968B87;\n}\n\n.loader {\n    margin: 5rem auto;\n    text-align: center;\n}\n\n.loader svg {\n    height: 5.5rem;\n    width: 5.5rem;\n    fill: #F59A83;\n    transform-origin: 44% 50%;\n    animation: rotate 1.5s infinite linear;\n}\n\n@keyframes rotate {\n    0% {\n        transform: rotate(0);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n.header {\n    grid-area: head;\n    background-color: #F9F5F3;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.header_logo {\n    margin-left: 4rem;\n    height: 4.5rem;\n    display: block;\n}\n\n.search {\n    background-color: #fff;\n    border-radius: 10rem;\n    display: flex;\n    align-items: center;\n    padding-left: 3rem;\n    transition: all .3s;\n}\n\n.search:focus-within {\n    transform: translateY(-2px);\n    box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08);\n}\n\n.search_field {\n    border: none;\n    background: none;\n    font-family: inherit;\n    color: inherit;\n    font-size: 1.7rem;\n    width: 30rem;\n}\n\n.search_field:focus {\n    outline: none;\n}\n\n.search_field::placeholder {\n    color: #DAD0CC;\n}\n\n.likes {\n    position: relative;\n    align-self: stretch;\n    padding: 0 !important;\n}\n\n.likes_field {\n    cursor: pointer;\n    padding: 0 4rem;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    transition: all .3s;\n}\n\n.likes_field:hover {\n    background-color: #F2EFEE;\n}\n\n.likes_panel:hover,\n.likes_field:hover + .likes_panel {\n    visibility: visible;\n    opacity: 1;\n}\n\n.likes_icon {\n    fill: #F59A83;\n    height: 3.75rem;\n    width: 3.75rem;\n}\n\n.likes_panel {\n    position: absolute;\n    right: 0;\n    top: 10rem;\n    z-index: 10;\n    padding: 2rem 0;\n    width: 34rem;\n    background-color: #fff;\n    box-shadow: 0 0.8rem 5rem 2rem rgba(101, 90, 86, 0.1);\n    visibility: hidden;\n    opacity: 0;\n    transition: all .5s .2s;\n}\n\n.results,\n.likes {\n    padding: 3rem 0;\n}\n\n.results_list,\n.likes_list {\n    list-style: none;\n}\n\n.results_link:link, .results_link:visited,\n.likes_link:link,\n.likes_link:visited {\n    display: flex;\n    align-items: center;\n    padding: 1.5rem 3rem;\n    transition: all .3s;\n    border-right: 1px solid #fff;\n    text-decoration: none;\n}\n\n.results_link:hover,\n.likes_link:hover {\n    background-color: #F9F5F3;\n    transform: translateY(-2px);\n}\n\n.results_link--active,\n.likes_link--active {\n    background-color: #F9F5F3;\n}\n\n.results_fig,\n.likes_fig {\n    flex: 0 0 5.5rem;\n    border-radius: 50%;\n    overflow: hidden;\n    height: 5.5rem;\n    margin-right: 2rem;\n    position: relative;\n    backface-visibility: hidden;\n}\n\n.results_fig::before,\n.likes_fig::before {\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n    opacity: .4;\n}\n\n.results_fig img,\n.likes_fig img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: all .3s;\n}\n\n.results_name,\n.likes_name {\n    font-size: 1.3rem;\n    color: #F59A83;\n    text-transform: uppercase;\n    font-weight: 600;\n    margin-bottom: .3rem;\n}\n\n.results_author,\n.likes_author {\n    font-size: 1.1rem;\n    color: #968B87;\n    text-transform: uppercase;\n    font-weight: 600;\n}\n\n.results_pages,\n.likes_pages {\n    margin-top: 3rem;\n    padding: 0 3rem;\n}\n\n.results_pages::after,\n.likes_pages::after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.results_btn--prev,\n.likes_btn--prev {\n    float: left;\n    flex-direction: row-reverse;\n}\n\n.results_btn--next,\n.likes_btn--next {\n    float: right;\n}\n\n.recipe {\n    background-color: #F9F5F3;\n    border-top: 1px solid #fff;\n}\n\n.recipe_fig {\n    height: 30rem;\n    position: relative;\n    transform: scale(1.04) translateY(-1px);\n    transform-origin: top;\n}\n\n.recipe_fig::before {\n    content: '';\n    display: block;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n    opacity: .6;\n}\n\n.recipe_img {\n    width: 100%;\n    display: block;\n    height: 100%;\n    object-fit: cover;\n}\n\n.recipe_title {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translate(-50%, 20%) skewY(-6deg);\n    color: #fff;\n    font-weight: 700;\n    font-size: 2.75rem;\n    text-transform: uppercase;\n    width: 70%;\n    line-height: 1.95;\n    text-align: center;\n}\n\n.recipe_title span {\n    -webkit-box-decoration-break: clone;\n    box-decoration-break: clone;\n    padding: 1.3rem 2rem;\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n}\n\n.recipe_details {\n    display: flex;\n    align-items: center;\n    padding: 8rem 3rem 3rem 3rem;\n}\n\n.recipe_info {\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n}\n\n.recipe_info:not(:last-child) {\n    margin-right: 4rem;\n}\n\n.recipe_info-icon {\n    height: 2rem;\n    width: 2rem;\n    fill: #F59A83;\n    margin-right: 1rem;\n}\n\n.recipe_info-data {\n    margin-right: .4rem;\n    font-weight: 600;\n}\n\n.recipe_info-buttons {\n    display: flex;\n    margin-left: 1.5rem;\n    visibility: hidden;\n    opacity: 0;\n    transform: translateY(5px);\n    transition: all .4s;\n}\n\n.recipe:hover .recipe_info-buttons {\n    visibility: visible;\n    opacity: 1;\n    transform: translateY(0);\n}\n\n.recipe_love {\n    background-image: linear-gradient(to right bottom, #FBDB89, #F48982);\n    border-radius: 50%;\n    border: none;\n    cursor: pointer;\n    height: 4.5rem;\n    width: 4.5rem;\n    margin-left: auto;\n    transition: all .2s;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.recipe_love:hover {\n    transform: scale(1.07);\n}\n\n.recipe_love:focus {\n    outline: none;\n}\n\n.recipe_love svg {\n    height: 2.75rem;\n    width: 2.75rem;\n    fill: #fff;\n}\n\n.recipe_ingredients {\n    padding: 4rem 5rem;\n    font-size: 1.5rem;\n    line-height: 1.4;\n    background-color: #F2EFEE;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.recipe_ingredient-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 1.5rem;\n    grid-row-gap: 2.5rem;\n    list-style: none;\n    margin-bottom: 3rem;\n}\n\n.recipe_item {\n    display: flex;\n}\n\n.recipe_icon {\n    height: 1.8rem;\n    width: 1.8rem;\n    fill: #F59A83;\n    border: 1px solid #F59A83;\n    border-radius: 50%;\n    padding: 2px;\n    margin-right: 1rem;\n    flex: 0 0 auto;\n    margin-top: .1rem;\n}\n\n.recipe_count {\n    margin-right: .5rem;\n    flex: 0 0 auto;\n}\n\n.recipe_directions {\n    padding: 4rem 4rem 5rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.recipe_directions-text {\n    font-size: 1.5rem;\n    text-align: center;\n    width: 90%;\n    margin-bottom: 3rem;\n    color: #968B87;\n}\n\n.recipe_by {\n    font-weight: 700;\n}\n\n.shopping {\n    padding: 3rem 4rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.shopping_list {\n    list-style: none;\n    max-height: 77rem;\n    overflow: scroll;\n}\n\n.shopping_item {\n    display: flex;\n    align-items: flex-start;\n    padding: 1.3rem 0;\n    border-bottom: 1px solid #F2EFEE;\n    position: relative;\n}\n\n.shopping_count {\n    flex: 0 0 7.5rem;\n    padding: .4rem .5rem;\n    border: 1px solid #F2EFEE;\n    border-radius: 3px;\n    margin-right: 2rem;\n    cursor: pointer;\n    display: flex;\n    justify-content: space-between;\n}\n\n.shopping_count input {\n    color: inherit;\n    font-family: inherit;\n    font-size: 1.2rem;\n    text-align: center;\n    border: none;\n    width: 3.7rem;\n    border-radius: 3px;\n}\n\n.shopping_count input:focus {\n    outline: none;\n    background-color: #F2EFEE;\n}\n\n.shopping_count p {\n    font-size: 1.2rem;\n}\n\n.shopping_description {\n    flex: 1;\n    font-size: 1.3rem;\n    margin-top: .4rem;\n    margin-right: 1.5rem;\n}\n\n.shopping_delete {\n    margin-top: .5rem;\n    position: absolute;\n    right: 0;\n    background-image: linear-gradient(to right, transparent 0%, #fff 40%, #fff 100%);\n    width: 3.75rem;\n    padding-left: 2rem;\n    visibility: hidden;\n    opacity: 0;\n    transition: all .5s;\n}\n\n.shopping_item:hover .shopping_delete {\n    opacity: 1;\n    visibility: visible;\n}\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=(a=i,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),o=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([r]).join("\n")}var a,l,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);i&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";t.r(e);t(0);console.log("Imported Modules");t.p,t.p,t.p}]);
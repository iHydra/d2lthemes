// ==UserScript==
// @name          D2L Themes
// @namespace     https://github.com/iHydra
// @version       1.0.1
// @description   D2L Themer
// @include       https://d2l.*.edu/d2l/*
// @author        iHydra
// @downloadURL   https://raw.githubusercontent.com/iHydra/d2lthemes/master/d2lthemes.user.js
// @require       https://code.jquery.com/jquery-2.1.4.min.js
// @resource      MainCSS https://raw.githubusercontent.com/iHydra/d2lthemes/master/nightBlue-style.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @run-at        document-start
// ==/UserScript==

var MainCSS = GM_getResourceText('MainCSS');
GM_addStyle(MainCSS);

// ==UserScript==
// @name         Gelbooru to Danbooru color
// @namespace    Gelbooru
// @version      v1.3
// @description  TURN ON DARK MODE
// @author       Zephyrus
// @run-at       document-start
// @match        *://gelbooru.*/*
// @downloadURL  https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-gelbooru-to-danbooru-color.user.js
// @update URL    https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-gelbooru-to-danbooru-color.user.js
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';
GM_addStyle(`

/*Main color */
body, html, #container, .homeIcon, #myTopnav, .navbar-header, #submenu, .header, #navbar, #static-index, #container>footer, .mobileActions {
 background-color: #1f1e2c !important;
 }

/* Secondary color */
.searchArea, .profileStatisticsBoxContainer, .profileUserDisplay, .submenu, .navSubmenu {
 background-color: #2c2d3f !important;
 }

/* View Original Purple */
#resize-link {
 background-color: #421766 !important;
 }

/* Search box */
#tags-search, #title, #source, #tags {
 background-color: #3f3f57 !important;
 }

/* Search button */
.searchList {
 background-color: #cccccc !important;
 color: black !important;
 }

/* Ads */
#submenu, .footerAd2, #container>main>center, div[style="text-align: center; padding: 10px; border: 1px dotted #aaaaaa; margin: 10px; overflow: hidden;"], div[style="padding: 20px; font-size: 1.2em; font-weight: bold;"], #__clb-spot_2099173_*, .mainBodyPadding>center {
 display: none !important;
 }
         
    `);
})();

// ==UserScript==
// @name            Reddit Header Lock
// @namespace       github.com/XYZephyrus/ZEUS
// @version         v1.1
// @description     Locks Reddit's header so it won't disappear after scrolling down + crap removal
// @author          Zephyrus
// @run-at          document-start
// @match           *://*.reddit.com/*
// @grant           GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`

/* Header */
.reddit-header-small-nav-bar {
 position: fixed !important;
 left: -15px !important;
 width: 100vw !important;
 z-index: 9999 !important;
 }

/* Search Bar */
.prominent-search {
 top: 58px !important;
 padding-top: 5px !important;
 height: max-content !important;
 width: 90vw !important;
 max-width: auto !important;
 position: fixed !important;
 z-index: 9998 !important;
 }

/* Author name when viewing post */
 #pdp-credit-bar {
 position: fixed !important;
 top: 48px !important;
 z-index: 9999 !important;
 }

/* Body top padding */
#main-content {
 padding-top: 55px !important;
 }

/* Dead space when viewing post */
#slot-credit-bar {
 display: none !important;
 }

/* AI */
#answers-nav-button {
 display: none !important;
 }

 /* Mobile app promo */
#xpromo-bottom-sheet {
 display: none !important;
 }
    
    `);
})();

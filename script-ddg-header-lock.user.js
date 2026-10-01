// ==UserScript==
// @name            DDG Header Lock
// @namespace       github.com/XYZephyrus/ZEUS
// @version         v1
// @description     A simple script to make DuckDuckGo's header stays visible
// @author          Zephyrus
// @run-at          document-start
// @match           *://*.duckduckgo.com/*
// @grant           GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`

/* Header */
#header_wrapper, #header {
 position: fixed !important;
 top: 0 !important;
 width: 100vw !important;
 z-index: 9999 !important;
 backdrop-filter: blur(100px);
 background-color: rgba(0,0,0,0.8) !important;
 }

body {
 padding-top: 140px !important;
 }
 
    
    `);
})();

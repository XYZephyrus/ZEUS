// ==UserScript==
// @name            GitHub Header Lock
// @namespace       github.com/XYZephyrus/ZEUS
// @version         v1
// @description     Locks the header of Github
// @author          Zephyrus
// @run-at          document-start
// @match           *://*.github.com/*
// @grant           GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`

/* Header */
.GlobalNav {
 position: fixed !important;
 top: 0 !important;
 width: 100vw !important;
 z-index: 9999 !important;
 background-color: #000000 !important;
 }

body {
 padding-top: 100px !important;
 }

/* Side menu */
.p-2 {
 padding-top: 30px !important;
 } 
    
    `);
})();

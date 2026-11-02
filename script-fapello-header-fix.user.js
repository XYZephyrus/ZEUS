// ==UserScript==
// @name            Fapello Header Fix
// @namespace       Fix Fapello buggy header
// @version         v1
// @description     NA
// @author          Zephyrus
// @run-at          document-start
// @match           *://fapello.*/*
// @grant           GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`

header, .header_inner {
 position: fixed !important;
 bottom: auto !important;
 margin-top: 0 !important;
 padding-top: important;
 }

body {
 padding-top: 0 !important;
 background-color: black !important;
 }

#wrapper {
 margin-top: 0 !important;
 } 
    
    `);
})();

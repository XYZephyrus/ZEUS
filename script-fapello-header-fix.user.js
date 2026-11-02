// ==UserScript==
// @name            Fapello Header Fix
// @namespace       https://github.com/XYZephyrus/ZEUS
// @version         v1.01
// @description     Fix Fapello buggy header
// @author          Zephyrus
// @run-at          document-start
// @match           *://fapello.*/*
// @downloadURL    https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-fapello-header-fix.user.js
// @updateURL    https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-fapello-header-fix.user.js
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

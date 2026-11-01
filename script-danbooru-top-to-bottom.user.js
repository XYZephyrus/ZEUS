// ==UserScript==
// @name         Danbooru Top to Bottom
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      v1.31
// @description  A script to bring the header down.
// @author       Zephyrus
// @run-at       document-start
// @match        *://danbooru.donmai.us/*
// @downloadURL   https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-danbooru-top-to-bottom.user.js
// @updateURL   https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-danbooru-top-to-bottom.user.js
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';

    // Move #top to the bottom of the screen
    GM_addStyle(`
         #top {
            max-height: 33% !important;
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            top: auto !important;
            z-index: 9999 !important;
            background-color: var(--body-background-color, #0a0a0a) !important;
        }

/* Search suggestions up */
#ui-id-1 {
 width: 100% !important;
 position: fixed !important;
 left: 0 !important;
 bottom: 150px !important;
 }

/* Artist Search table stretch */
.name-column {
 width: 100vw !important;
 }

/* Artist search btn right */
input[type="submit"] {
 position: relative !important;
 left: 303px;
 right: auto !important;
 }

/* Fav btn right */
.py-1 {
 position: relative !important;
 left: 342px;
 right: auto !important;
 }

/* Declutter */
#nav-pools, #nav-posts, #nav-comments, #nav-notes, #nav-pools, #nav-forum, #subnav-new, #subnav-changes, #subnav-edit, #subnav-history, #subnav-help, #nav-posts, .other-names-column, .updated-column, .status-column {
 display: none !important;
 }
 
        /* Prevent the bottom of the page from being hidden behind the bar */
        body {
            padding-bottom: 60px !important;
        }

        /* Fix submenus/mobile nav popping up instead of down */
        #top .nav-menu, 
        #top [x-show="menuOpen"] {
            bottom: 100% !important;
            top: auto !important;
        }
    `);
})();

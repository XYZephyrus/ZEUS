// ==UserScript==
// @name         Civitai Top to Bottom
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      v1
// @description  A script to bring the header down
// @author       Zephyrus
// @run-at       document-start
// @match        *://civitai.*/*
// @downloadURL   https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-civitai-top-to-bottom.user.js
// @updateURL. https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-civitai-top-to-bottom.user.js
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';

    // Move #top to the bottom of the screen
    GM_addStyle(`
        .p-3 {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            top: auto !important;
            z-index: 9999 !important;
            background-color: var(--body-background-color, #0a0a0a) !important;
            border-top: 1px solid var(--border-color, #333) !important;
            border-bottom: none !important;
        }

        /* Prevent the bottom of the page from being hidden behind the bar */
        /*body {
            padding-bottom: 60px !important;
        }*/

        /* Fix submenus/mobile nav popping up instead of down */
        #top .nav-menu, 
        #top [x-show="menuOpen"] {
            bottom: 100% !important;
            top: auto !important;
        }
    `);
})();

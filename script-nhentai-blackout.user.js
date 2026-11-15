// ==UserScript==
// @name            Nhentai Blackout
// @namespace       NH Blackout
// @version         v1.1 - A side
// @description     We love nHentai
// @author          Zephyrus
// @run-at          document-start
// @match           *://nhentai.*/*
// @downloadURL  https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-nhentai-blackout.user.js
// @updateURL https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-nhentai-blackout.user.js
// @grant           GM_addStyle
// ==/UserScript==

(function() {
'use strict';

GM_addStyle(`

/* Primary black */
body, #app>nav, #content, .index-popular, .index-container, #favcontainer, #recent-favorites-container, .container {
 background-color: #000000 !important;
 }

/* Sec white */
#hamburger, .caption, .search *, #user-container, .bigavatar, .user-info *, .reader-bar, #download, .ts-root *, .tagchip *, .tag *, #id_body, .btn-secondary, .sort-type *, .current *, .ts-cta * {
 background-color: #1e1e1e !important;
 }

/* Hamburger btn clr */
.line {
 color: white !important;
 }

/* Deadspace remove */
#content {
 margin-top: -20px;
 }

/* Tag suggestions */
.ts-root, .ts-cta {
 border: none !important;
 margin-bottom: 1px !important;
 }

/* Profile comment */
div:has(> #comments),
div:has(> * > #comments) {
 background-color: #000000 !important;
 }

`);

})();


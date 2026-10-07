// ==UserScript==
// @name         Booru Tag Gallery
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      v1.1
// @description  Booru Tag Gallery Script
// @author       Zephyrus
// @run-at       document-start
// @match        https://booru-tag-gallery.vercel.app/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`

/* Search bar */
#search-input {
 position: fixed !important;
 bottom: 0 !important;
 max-width: 150px !important;
 margin-bottom: 10px !important;
 left: 0 !important; 
 right: 0 !important; 
 margin-left: auto !important;
 margin-right: auto !important;
 z-index: 9998 !important;
 white-space: nowrap !important;
 overflow: visible !important;
 background-color: rgba(30,38,49,0.5) !important;
 padding: 6px !important;
 padding-right: 20px !important;
 }

/* Search clear */
.lucide-x {
 position: fixed !important;
 z-index: 99999 !important;
 bottom: 25px !important;
 right: 140px !important;
 }

/* Coloring + transparent popup tag view + dividers inside */
.modal-shell, .p-4, .media-gallery {
 background-color: rgba(30,38,49,0.7) !important;
 }

/* Popup resize */
.modal-shell {
 margin: 20px !important;
 }

/* Popup header resize */
.flex-shrink-0 {
 padding: 0 !important;
 }

/* Popup tag view background */
.modal-backdrop  {
 background-color: rgba(0,0,0,0.4) !important;
 }

/* Roundy images */
.media-gallery, .dtext-media-embed *, .optimized-image {
 border-radius: 10px !important;
 }

/* Transparent box around images */
.dtext-media-embed {
 background-color: rgba(0,0,0,0) !important;
 }

/* Unimportant things (gapx4 = auto tl, w5 = popup close btn)  */
.gap-x-4, #search-suggestions, .lucide-search, .w-5 {
 display: none !important;
 }

/* Attempt to shift the copy tag btn in popup header (failed) */
.lucide-copy * {
 position: fixed !important; 
 right: 50px !important;
 }
    
    `);
})();

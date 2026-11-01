// ==UserScript==
// @name         Booru Tag Gallery
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      v1.4
// @description  Booru Tag Gallery Script
// @author       Zephyrus
// @run-at       document-start
// @match        https://booru-tag-gallery.vercel.app/*
// @match        https://booru-tags-gallery.netlify.app/*
// @downloadURL  https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-booru-tag-gallery.user.js
// @updateURL    https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-booru-tag-gallery.user.js
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
    
    `);

/* Shift copy tag btn in popup */
function NUKE() { 
document.querySelectorAll(".modal-shell").forEach(shell => {
            const walker = document.createTreeWalker(
                shell,
                NodeFilter.SHOW_TEXT
            );

            let node;

            while (node = walker.nextNode()) {
                if (!node.textContent.includes("Copy tag")) continue;

                let el = node.parentElement;

                while (
                    el.parentElement &&
                    el.parentElement !== shell &&
                    el.parentElement.textContent.trim() ===
                        el.textContent.trim()
                ) {
                    el = el.parentElement;
                }
                el.style.setProperty("display", "flex", "important");

el.style.setProperty("align-items", "center", "important");
                el.style.setProperty("position", "relative", "important");

el.style.setProperty("left", "35px", "important");

el.style.setProperty("top", "0px", "important");

el.style.setProperty("margin-left", "-40px", "important");

el.style.setProperty("transform", "none", "important");
                
/*el.style.setProperty("background", "red", "important");*/

/*el.style.setProperty("outline", "5px solid lime", "important");*/

                document.documentElement.dataset.copyTagNuke = "DETONATED";
            }
        });
    }

    NUKE();

    new MutationObserver(NUKE).observe(document.documentElement, {
        childList: true,
        subtree: true,
        characterData: true
    });
})();

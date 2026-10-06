// ==UserScript==
// @name         TensorArt Ultimate Script
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      v2.03 Ultimate
// @description  Superb reachability + AMOLED dark mode
// @author       Zephyrus
// @run-at       document-start
// @match        *://tensor.art/*
// @grant        GM_addStyle
// ==/UserScript==


(function() {
    'use strict';
    GM_addStyle(`

/* Workflow bar down */
.n-tabs-nav--line-type {
 padding-left: 120px !important;
 position: fixed !important;
 bottom: 0 !important;
 left: 0 !important;
 right: 0 !important;
 top: auto !important;
 z-index: 9998 !important;
 background-color: var(--body-background-color, #000000) !important;
 justify-content: center !important;
 }

/* Add to library btn whitening */
.n-image-preview-toolbar, .px-24, .bg-mask-default, .bg-text-primary, .cursor-not-allowed {
 color: white !important;
 background-color: rgba(0,0,0,0) !important;
 border: 1px solid rgba(255,255,255,0.1) !important;
 }

/* Remix bar transparent */
.bottom-0 {
 border: none !important;
 border-top: 1px solid rgba(255,255,255,0.1) !important;
 color: black;
 background-color: rgba(0,0,0,0) !important;
 }

/* Generate Button stretch + bottoming */
.c-text-anti {
 position: fixed !important;
 border-radius: 0 !important;
 width: 100vw !important;
 max-width: none;
 bottom: 40px !important;
 left: 0 !important;
 right: 0 !important;
 z-index: 20 !important;
 }

/* Create btn bottoming */
.h-28 {
 position: fixed !important;
 border-radius: 0 !important;
 width: 100vw !important;
 max-width: none;
 bottom: 0px !important;
 left: 0 !important;
 right: 0 !important;
 z-index: 20 !important;
 }

/* Create's Popout bottoming */
.n-popover__content {
 position: fixed !important;
 top: 321px !important;
 left: 50px !important;
 right: 0 !important;
 z-index: 20 !important;
 }

/* Lib drawer transparent */
/* .n-drawer-body-content-wrapper *, .library-mobile-drawer *, .n-drawer-content-wrapper *, .n-drawer-content *, .n-drawer-body *, .n-scrollbar-container *, .n-scrollbar-content *, .p-0 * {
 background-color: rgba(0,0,0,0) !important;
 } */
          
/* Credit Counter bottoming */
.bg-brand-container {
 position: fixed !important;
 top: auto !important;
 bottom: 6px !important;
 right: auto !important;
 left: 10px !important;
 width: max-content !important;
 display: flex; 
 justify-content: center;
 z-index: 99999 !important;
background-color:var(--body-background-color, #181818) !important;
}

/* Blackout */
.w-full, .library-mobile-drawer, .p-y-8, body, .z-40, .scrollbar-normal, .p-12, .sd-editor-card, .b-solid {
 background-color: #000000 !important;
 }

/* Close button bottoming */
.b {
 position: fixed !important;
 bottom: 6px !important;
 right: 16px !important;
 top: auto !important;
 left: auto !important;
 z-index: 99999 !important;
 }

/* Prompt panels down */
.sd-generate-panel {
 background-color: #000000;
 padding-top: 100px !important;
 padding-bottom: -100px !important;
 }

/* nano banana btn + caption lib popup drawer + prompt warning + plus btn + discord btn + changelog btn delete*/
.object-contain, .pt-8, .bottom-2, .p-6,  .text-28, .text-24 {
 display: none !important;
 }

/* Remove dead space scroll bar leftover */
.mt--20 {
 padding-right: 5px !important;
 }

/* Remove small dead space bottom library */
.pr-12 {
 margin-bottom: -50px !important;
 }

/* Remove dead space top library */
.pt-24 {
 padding-top: 0px !important;
 margin-bottom: 5px !important;
 margin-top: 0px !important ;
 }

/* Useless Bar up*/
.n-tabs-nav--bar-type {
 position: fixed !important;
 z-index: 9999 !important;
 top: -4px !important;
 bottom: auto !important;
 left: 2px !important;
 right: auto !important;
 background-color: #000000 !important;
 }

    `);
})();

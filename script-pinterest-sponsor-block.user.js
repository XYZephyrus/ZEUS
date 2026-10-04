// ==UserScript==
// @name            Pinterest Sponsor Blocker
// @namespace       https://github.com/XYZephyrus/ZEUS
// @version         v1.2
// @description     No Sponsored Pins
// @author          Zephyrus
// @run-at          document-start
// @match           *://*.pinterest.*/*
// @grant           GM_addStyle
// ==/UserScript==

(function() {
'use strict';

GM_addStyle(`

html * > [aria-label*="Sponsored" i] {
  display: none !important;
}

`);
})();

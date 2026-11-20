// ==UserScript==
// @name            Nhentai Folding Tags
// @namespace       NH Folding Tags
// @version         v1.1 - B Side
// @description     We love nHentai
// @author          Zephyrus
// @run-at          document-start
// @match           *://nhentai.*/*
// @downloadURL  https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-nhentai-folding-tags.user.js
// @updateURL    https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-nhentai-folding-tags.user.js
// @grant           GM_addStyle
// ==/UserScript==

(function() {
'use strict';

GM_addStyle(`

/* FOLDING TAGS */
/* 1. Base collapsed state */
#tags {
  padding: 5px;
  max-height: 121px; /* 3-5 tags */
  overflow: hidden;
  transition: max-height 0.7s ease; /* transition close .6s apart */
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

/* 4. EXPANDED STATE (Triggered via focus-within or hover) */
#tags:focus-within,
#tags:hover {
  max-height: 1500px;
  transition: max-height 1.3s ease;
}

`);

})();


// ==UserScript==
// @name         Font Teller
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      v1.01
// @description  Tells the font families a website is currently using
// @author       Zephyrus
// @run-at       document-end
// @match        *://*/*
// @downloadURL   https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-font-teller.user.js
// @updateURL   https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-font-teller.user.js
// @grant        none
// ==/UserScript==


alert(getComputedStyle(document.documentElement).fontFamily);

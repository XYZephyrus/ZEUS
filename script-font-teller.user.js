// ==UserScript==
// @name         Font Teller
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      0.1
// @description  Tells the font families a website is currently using
// @author       Zephyrus
// @run-at       document-end
// @match        *://*/*
// @grant        none
// ==/UserScript==


alert(getComputedStyle(document.documentElement).fontFamily);

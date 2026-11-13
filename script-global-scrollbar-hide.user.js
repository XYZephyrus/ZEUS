// ==UserScript==
// @name         Global Scrollbar Hide
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      v1.1
// @description  Hides the ugly WebView scrollbar completely
// @author       Zephyrus + Gemini
// @match        *://*/*
// @downloadURL  https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-global-scrollbar-hide.user.js
// @updateURL    https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-global-scrollbar-hide.user.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Inject CSS to hide scrollbars globally for standard elements and WebKit engines
    const css = `
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
        }

        /* Hide scrollbar for IE, Edge and Firefox (Just in case) */
        html, body {
            -ms-overflow-style: none !important;  /* IE and Edge */
            scrollbar-width: none !important;  /* Firefox */
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    styleEl.appendChild(document.createTextNode(css));
    
    // Attach to the page as fast as humanly possible
    (document.head || document.documentElement).appendChild(styleEl);
})();

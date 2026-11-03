// ==UserScript==
// @name         Force Open Links in New Tab
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      1.0
// @description  Forces all clicked links to open in a new tab instead of redirecting the current page.
// @author       Gemini
// @match        *://www.google.com/*
// @grant        GM_openInTab
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Intercept clicks at the window level to capture dynamically added links
    window.addEventListener('click', function(event) {
        // Find the closest anchor tag from the clicked element
        const anchor = event.target.closest('a');

        // Proceed only if a valid link with an href is clicked
        if (anchor && anchor.href) {
            
            // Ignore internal page anchors (e.g., href="#section-1")
            const currentUrlNoHash = window.location.href.split('#')[0];
            const targetUrlNoHash = anchor.href.split('#')[0];
            if (currentUrlNoHash === targetUrlNoHash && anchor.hash) {
                return; 
            }

            // Ignore special protocols like javascript:, mailto:, tel:
            if (/^(javascript|mailto|tel):/i.test(anchor.href)) {
                return;
            }

            // Respect intentional modifier keys (Ctrl, Cmd, Shift, Alt)
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
                return;
            }

            // Prevent the default browser redirection
            event.preventDefault();
            event.stopPropagation();

            // Open the link in a new background tab using Tampermonkey API
            // Set 'active: false' if you want to keep focus on the current page
            GM_openInTab(anchor.href, { active: true, insert: true, setParent: true });
        }
    }, true); // Use capturing phase to intercept before the page's scripts can stop it
})();

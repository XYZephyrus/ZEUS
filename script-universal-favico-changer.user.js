// ==UserScript==
// @name         Universal Website Favicon Changer
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      1.0
// @description  Change the favicon of any specific website dynamically
// @author       Zephyrus
// @match        ENTER YOUR DESIRED WEBSITE URL HERE
// @grant        none
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // 1. PASTE YOUR DESIRED FAVICON URL HERE (Can be a .ico, .png, or base64 data URI)
    const NEW_FAVICON_URL = "HERE";

    function setFavicon() {
        // Target existing icon elements
        const existingLinks = document.querySelectorAll("link[rel*='icon']");
        
        if (existingLinks.length > 0) {
            // Update all existing favicon elements to avoid conflicts
            existingLinks.forEach(link => {
                if (link.href !== NEW_FAVICON_URL) {
                    link.href = NEW_FAVICON_URL;
                }
            });
        } else {
            // Create a new favicon element if none exist
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            newLink.type = 'image/x-icon';
            newLink.href = NEW_FAVICON_URL;
            document.head.appendChild(newLink);
        }
    }

    // Run immediately when the script injects
    setFavicon();

    // Watch for dynamically loaded headers or SPA route changes that reset the favicon
    const observer = new MutationObserver(() => {
        setFavicon();
    });

    // Start observing changes to the document head
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();

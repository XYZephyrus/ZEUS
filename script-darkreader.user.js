// ==UserScript==
// @name            DarkReader
// @namespace       DR
// @version         v1.01
// @description     DarkReader mobile
// @author          Zephyrus
// @run-at          document-end
// @match           
// @require            https://cdn.jsdelivr.net/npm/darkreader@4.9.58/darkreader.js
// ==/UserScript==

(function() {
    DarkReader.setFetchMethod(window.fetch);
    DarkReader.enable({
        darkSchemeBackgroundColor: '#000000',
        darkSchemeTextColor: '#ffffff',
        brightness: 100,
        contrast: 110,
        sepia: -15,
    });
})();


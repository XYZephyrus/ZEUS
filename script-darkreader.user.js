// ==UserScript==
// @name            DarkReader
// @namespace       https://github.com/XYZephyrus/ZEUS
// @version         v1.02
// @description     Bringing Dark Reader to mobile
// @author          Zephyrus
// @run-at          document-idle
// @match           *
// @require            https://cdn.jsdelivr.net/npm/darkreader@4.9.58/darkreader.js
// @downloadURL     https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-darkreader.user.js
// @updateURL       https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-darkreader.user.js
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

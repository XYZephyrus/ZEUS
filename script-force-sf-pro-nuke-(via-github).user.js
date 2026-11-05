// ==UserScript==
// @name         Force SF Pro Nuke (via Github)
// @namespace    https://github.com/XYZephyrus/ZEUS
// @version      v1.21
// @author        Zephyrus
// @match        *://*/*
// @downloadURL   https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-force-sf-pro-nuke-(via-github).user.js
// @updateURL   https://github.com/XYZephyrus/ZEUS/raw/refs/heads/main/script-force-sf-pro-nuke-(via-github).user.js
// @run-at       document-start
// ==/UserScript==

(function () {
    const style = document.createElement("style");
    style.id = "force-sfpro";

    style.textContent = `
@font-face {
    font-family: "MySF";
    src: url("https://raw.githubusercontent.com/XYZephyrus/SF-Pro-Font-Zeph/main/Roboto-Regular.ttf") format("truetype");
    font-display: swap;
}

:root {
    --fontStack-sansSerif: "MySF" !important;
    --font-family: "MySF" !important;
    --font-sans: "MySF" !important;
    --default-font-family: "MySF" !important;
}

html,
body,
*,
*::before,
*::after {
    font-family: "MySF" !important;
}

code,
pre,
kbd,
samp {
    font-family: monospace !important;
}
`;

    (document.head || document.documentElement).appendChild(style);
})();

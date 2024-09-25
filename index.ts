/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "ShiggyCursor",
    description: "Based on the oneko plugin, but with the Shiggy GIF!",
    // Listing adryd here because this literally just evals her script
    authors: [{ name: "damima", id: 1001076524612603945n }],

    start() {
        fetch("https://gist.githubusercontent.com/damimaa/c34e0e35c0148b157877439758dbdf94/raw/ca5ca80391ea9c100e94017637dc6067c564edc6/shiggy.js")
            .then(x => x.text())
            .then(s => s.replace("https://cdn.discordapp.com/stickers/1039992459209490513.png", "https://cdn.discordapp.com/stickers/1039992459209490513.png")
                .replace("(isReducedMotion)", "(false)"))
            .then(eval);
    },

    stop() {
        document.getElementById("nyan-cat")?.remove();
    }
});


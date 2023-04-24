import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { rightAside } from "../../wiki-site-files/templates/right_aside.js";

// put content on the page generated from provided markdown
(async () => {
document.getElementById("content").innerHTML += marked.parse(transclusionSubstitution({}, `
${rightAside("25%",
`Quick Links

* [[Fumos|All Fumos]]
* [[Guides]]
* [Devlog](../../devlog/)
* [Download](https://github.com/Starman-x64/fumo-in-minecraft)
* [Contact](../../)

The original Reddit post can be found [here](https://www.reddit.com/r/touhou/comments/w7juax/minecraft_but_i_added_fumos_currently_making_them/). Definitely not filler text for formatting...
`)}

<h2 style="text-align:center;border:none;">
Welcome to the Fumo In Minecraft? Wiki!
</h2>
"Fumo In Minecraft?" is a Minecraft datapack by me (Starman_x64) which adds the adorable plushies from Touhou Project we all know and love. Start with a fumo base, in which you can imbue unique components to create your favourite fumo.

As this datapack is still under development, I can't write much of a consice description. Feel free to check out the devlog for a road map and (not so) frequent updates (school :/).

Also, feel free to open an issue on GitHub (recommended) or send me an email regarding any suggestions (or mistakes/typos on any of the pages), especially for things listed as "Placeholder" or anything labeled with "There are no ideas."!

`));
})()
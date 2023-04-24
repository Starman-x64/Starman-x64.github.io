import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["marisa_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.marisa_fumo|genericItem}}

[Marisa Kirisame](https://en.touhouwiki.net/wiki/Marisa_Kirisame) (霧雨魔理沙 [kiɾisa̠me̞ ma̠ɾisa̠]), the main deuteragonist in most of the games in the Touhou Project.

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.marisa_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.marisa_fumo}}

Trivia
------
* *Marisa's hat was pretty hard to get right, and even now I still might change it* - Starman_x64

`));
generateTableOfContents();
})()
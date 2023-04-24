import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["sakuya_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.sakuya_fumo|genericItem}}

[Sakuya Izayoi](https://en.touhouwiki.net/wiki/Sakuya_Izayoi) (十六夜咲夜 [izajoi sakɯja]), stage 5 boss in [Embodiment of Scarlet Devil](https://en.touhouwiki.net/wiki/Embodiment_of_Scarlet_Devil).  

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.sakuya_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.sakuya_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()
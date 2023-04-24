import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["patchouli_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.patchouli_fumo|genericItem}}

[Patchouli Knowledge](https://en.touhouwiki.net/wiki/Patchouli_Knowledge) (パチュリー・ノーレッジ [pat͡ɕɯ̹ɾiː nɔ̹ːɾe̞d̚d͡ʑi]), stage 4 boss in [Embodiment of Scarlet Devil](https://en.touhouwiki.net/wiki/Embodiment_of_Scarlet_Devil). 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.patchouli_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.patchouli_fumo}}

Trivia
------
* No Trivia Yet...

`));
generateTableOfContents();
})()
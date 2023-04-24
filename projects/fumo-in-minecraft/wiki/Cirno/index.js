import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["cirno_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.cirno_fumo|genericItem}}

[Cirno](https://en.touhouwiki.net/wiki/Cirno) (チルノ [t͡ɕiɽɯno]), stage 2 boss in [Embodiment of Scarlet Devil](https://en.touhouwiki.net/wiki/Embodiment_of_Scarlet_Devil), and a playable character in some games since. 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.cirno_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
When in the player's offhand, the player will no longer receive frost damage from powdered snow.

Advancements
------------
{{Advancements_Table|$A.cirno_fumo}}

Trivia
------
* *She used to have wings, but then I took them off because they looked horrible...* - Starman_x64

`));
generateTableOfContents();
})()
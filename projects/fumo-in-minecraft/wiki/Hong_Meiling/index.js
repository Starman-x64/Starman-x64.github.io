import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["meiling_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.meiling_fumo|genericItem}}

[Hong Meiling](https://en.touhouwiki.net/wiki/Hong_Meiling) (紅美鈴 [xʊ̜ŋ˧˥ meɪ̯˨˩˨liŋ˧˥]), stage 3 boss in [Embodiment of Scarlet Devil](https://en.touhouwiki.net/wiki/Embodiment_of_Scarlet_Devil).

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.meiling_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.meiling_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()
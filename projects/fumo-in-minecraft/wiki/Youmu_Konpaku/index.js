import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["youmu_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.youmu_fumo|genericItem}}

[Youmu Konpaku](https://en.touhouwiki.net/wiki/Youmu_Konpaku) (魂魄妖夢 [kompakɯ joːmɯ]), Stage 5 Boss of [Perfect Cherry Blossom](https://en.touhouwiki.net/wiki/Perfect_Cherry_Blossom), and playable character in some games afterwards. 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.youmu_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
When in the player's offhand, the player will gain double attack damage for all sword-type weapons and phantoms will not be aggravated at them.

Advancements
------------
{{Advancements_Table|$A.youmu_fumo}}

Trivia
------
* Although others were planned (specifically [Alice](../../wiki/youmu_Margatroid)), Youmu is the only fumo with an extra model attached (her phantom)
* The model for Youmu's phantom is a scaled-up and slightly modified [tadpole](https://minecraft.fandom.com/wiki/Tadpole).

`));
generateTableOfContents();
})()
import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["rumia_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.rumia_fumo|genericItem}}

[Rumia](https://en.touhouwiki.net/wiki/Rumia) (ルーミア [ɽɯːmia]), stage 1 boss in [Embodiment of Scarlet Devil](https://en.touhouwiki.net/wiki/Embodiment_of_Scarlet_Devil). 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.rumia_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
When in the player's offhand, the player will be immune to blindness and darkness effects.

Advancements
------------
{{Advancements_Table|$A.rumia_fumo}}

Trivia
------
* The modifiers given by Rumia's fumo are opposite (although still related to) her cannon.
    * Rumia creates darkness around her to hide from the sun which has the side effect of reducing her visibility.
    * The modifiers allow a player to not be affected by poor vision.

`));
generateTableOfContents();
})()
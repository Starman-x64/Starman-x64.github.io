import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["reimu_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.reimu_fumo|genericItem}}

[Reimu Hakurei](https://en.touhouwiki.net/wiki/Reimu_Hakurei) (博麗霊夢, /hakɯɽeː ɽeːmɯ/), the main protagonist in most of the games in the Touhou Project. 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.reimu_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.reimu_fumo}}

Trivia
------
* Because the Reimu fumo was the first fumo to be added, it's entire texture layout and basic model  was used as the base for all other fumo textures and models.

`));
generateTableOfContents();
})()
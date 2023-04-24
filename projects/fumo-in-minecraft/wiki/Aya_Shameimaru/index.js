import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["aya_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.aya_fumo|genericItem}}

[Aya Shameimaru](https://en.touhouwiki.net/wiki/Aya_Shameimaru) (射命丸文 [ɕʲa̠me̞ːma̠ɾ̠ɯᵝ a̠ja̠]), main protagonist of [Shoot the Bullet](https://en.touhouwiki.net/wiki/Shoot_the_Bullet) and [Double Spoiler](https://en.touhouwiki.net/wiki/Double_Spoiler).

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.aya_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
When in the player's offhand, the player will recieve +75% movement speed.

Advancements
------------
{{Advancements_Table|$A.aya_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()
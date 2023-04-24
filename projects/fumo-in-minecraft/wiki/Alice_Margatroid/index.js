import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["alice_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.alice_fumo|genericItem}}

[Alice Margatroid](https://en.touhouwiki.net/wiki/Alice_Margatroid) (アリス・マーガトロイド), third stage boss in [Mystic Square](https://en.touhouwiki.net/wiki/Mystic_Square), and a playable character in some games since. 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.alice_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
Nothing yet...

Advancements
------------
{{Advancements_Table|$A.alice_fumo}}

Trivia
------
* No trivia yet...
`));
generateTableOfContents();
})()
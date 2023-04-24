import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["yukari_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.yukari_fumo|genericItem}}

[Yukari Yakumo](https://en.touhouwiki.net/wiki/Yukari_Yakumo) (八雲紫 [iakɯmo iɯkaɽi]), phantasm stage boss in [Perfect Cherry Blossom](https://en.touhouwiki.net/wiki/Perfect_Cherry_Blossom) and a playable character in later games.

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.yukari_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.yukari_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()
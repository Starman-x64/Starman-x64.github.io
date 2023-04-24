import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["koishi_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.koishi_fumo|genericItem}}

[Koishi Komeiji](https://en.touhouwiki.net/wiki/Koishi_Komeiji) (古明地こいし [komeːd͡ʑi koiɕi]), younger sister of Satori Komeiji and the extra stage boss of [Subterranean Animism](https://en.touhouwiki.net/wiki/Subterranean_Animism). 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.koishi_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.koishi_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()
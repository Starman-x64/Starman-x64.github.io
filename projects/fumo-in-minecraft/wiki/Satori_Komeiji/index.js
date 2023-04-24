import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["satori_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.satori_fumo|genericItem}}

[Satori Komeiji](https://en.touhouwiki.net/wiki/Satori_Komeiji) (古明地さとり [komeːd͡ʑi satoɽi]), Stage 4 Boss of [Subterranean Animism](https://en.touhouwiki.net/wiki/Subterranean_Animism), and protagonist of [Foul Detective Satori](https://en.touhouwiki.net/wiki/Foul_Detective_Satori).

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.satori_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.satori_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()
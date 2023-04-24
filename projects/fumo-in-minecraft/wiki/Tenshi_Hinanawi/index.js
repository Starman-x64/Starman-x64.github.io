import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["tenshi_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.tenshi_fumo|genericItem}}

[Tenshi Hinanawi](https://en.touhouwiki.net/wiki/Tenshi_Hinanawi) (比那名居天子 [çinanai tẽɕi]), main antagonist of [Scarlet Weather Rhapsody](https://en.touhouwiki.net/wiki/Scarlet_Weather_Rhapsody). 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.tenshi_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.tenshi_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()
import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["ran_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.ran_fumo|genericItem}}

[Ran Yakumo](https://en.touhouwiki.net/wiki/Ran_Yakumo) (八雲紫 [jakɯmo ɽaɴ]), shikigami of Yukari Yakumo and extra stage boss in [Perfect Cherry Blossom](https://en.touhouwiki.net/wiki/Perfect_Cherry_Blossom).

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.ran_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.ran_fumo}}

Trivia
------
* No trivia yet...

`));
generateTableOfContents();
})()
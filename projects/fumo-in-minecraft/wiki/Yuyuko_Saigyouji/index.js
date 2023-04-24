import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["yuyuko_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.yuyuko_fumo|genericItem}}

[Yuyuko Saigyouji](https://en.touhouwiki.net/wiki/Yuyuko_Saigyouji) (西行寺幽々子 [saigʲoːd͡ʑi jɯjɯko]), Stage 6 Boss of [Perfect Cherry Blossom](https://en.touhouwiki.net/wiki/Perfect_Cherry_Blossom), and playable character in some games afterwards. 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.yuyuko_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.yuyuko_fumo}}

Trivia
------
* **Yuyuko's fumo** and [Daiyousei's fumo](../../wiki/Daiyousei) are the only two fumos whose models contain semi-transparent textures (Yuyuko's veil and Daiyousei's wings)

`));
generateTableOfContents();
})()
import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["daiyousei_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.daiyousei_fumo|genericItem}}

[Daiyousei](https://en.touhouwiki.net/wiki/Daiyousei) (大妖精 [daijoːseː]), stage 2 mid-boss in [Embodiment of Scarlet Devil](https://en.touhouwiki.net/wiki/Embodiment_of_Scarlet_Devil). 

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.daiyousei_fumo}}

Useage
------
### [Modifiers](../../wiki/Modifiers)
No ideas yet...

Advancements
------------
{{Advancements_Table|$A.daiyousei_fumo}}

Trivia
------
* [Yuyuko's fumo](../../wiki/Yuyuko_Saigyouji) and **Daiyousei's fumo** are the only two fumos whose models contain semi-transparent textures (Yuyuko's veil and Daiyousei's wings)

`));
generateTableOfContents();
})()
import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["fumo_base"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
{{Infobox|$i.fumo_base|genericItem}}

The fumo base is one of the most important crafting ingredients, as it is used in every fumo recipe.

{{Contents}}

Obtaining
---------
### Crafting
{{Recipe_Table|$r.fumo_base}}

Useage
------
### Recipes
{{Used_In_Recipe_Table|$R.fumo_base}}

Trivia
------
* The tooltip "The Husk of a Marketable Plushie" is a reference to the "[Don't Turn Me Into Marketable Plushies](https://knowyourmeme.com/memes/dont-turn-me-into-marketable-plushies)" meme.
* This fumo has no real life counterpart, nor does it represent a character in any of the games in the Touhou Project. Rather, it represents a blank slate for which a character may be imbued into.

`));
generateTableOfContents();
})()
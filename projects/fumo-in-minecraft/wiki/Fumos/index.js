import { transclusionSubstitution } from "../../wiki-site-files/js/transclusionSubstitution.js";
import { getData } from "../../wiki-site-files/js/getData.js";
import { generateTableOfContents } from "../../wiki-site-files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data.items = await getData("item", ["fumo_base", "alice_fumo", "aya_fumo", "cirno_fumo", "daiyousei_fumo", "flandre_fumo", "koakuma_fumo", "koishi_fumo", "marisa_fumo", "meiling_fumo", "patchouli_fumo", "ran_fumo", "reimu_fumo", "remilia_fumo", "rumia_fumo", "sakuya_fumo", "satori_fumo", "tenshi_fumo", "youmu_fumo", "yukari_fumo", "yuyuko_fumo"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(await transclusionSubstitution(data, `
Below is the list of all fumos.

* [[Fumo Base]]
* [[Alice Margatroid]]
* [[Aya Shameimaru]]
* [[Cirno]]
* [[Daiyousei]]
* [[Flandre Scarlet]]
* [[Koakuma]]
* [[Koishi Komeiji]]
* [[Marisa Kirisame]]
* [[Hong Meiling]]
* [[Patchouli Knowledge]]
* [[Ran Yakumo]]
* [[Reimu Hakurei]]
* [[Remilia Scarlet]]
* [[Rumia]]
* [[Sakuya Izayoi]]
* [[Satori Komeiji]]
* [[Tenshi Hinanawi]]
* [[Youmu Konpaku]]
* [[Yukari Yakumo]]
* [[Yuyuko Saigyouji]]

`));
})()
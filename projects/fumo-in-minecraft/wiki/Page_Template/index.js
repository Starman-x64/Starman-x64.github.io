import { transclusionSubstitution } from "../../_wiki_site_files/js/transclusionSubstitution.js";
import { getData } from "../../_wiki_site_files/js/getData.js";
import { generateTableOfContents } from "../../_wiki_site_files/js/generate_table_of_contents.js";

// function which will get the correct data to populate tables etc. on the page
var data = {};
async function getRequiredData() {
  data = await getData("allInvolvingItem+", ["shrine_maidens_favour"]);
}

// put content on the page generated from provided markdown after getting required data
(async () => {
await getRequiredData();

document.getElementById("content").innerHTML += marked.parse(transclusionSubstitution(data, `
{{Infobox|$i.fumo_base|genericItem}}

[Abstract]

{{Contents}}

[Section]
-------------------------
[Text]

### [Sub-section]
[Text]

`));
generateTableOfContents();
})()
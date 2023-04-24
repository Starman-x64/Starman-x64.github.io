export const advancementsTable = function(advancements, $a) {
    let advancementDataToGet = [];
    let advancementTagsToReplace = [];
    let tableContents = "";
    advancements.forEach((advancement) => {
        if (!advancementDataToGet.includes(advancement.parent) && advancement.parent != "") {
            advancementTagsToReplace.push(advancement.parent);
            if (!advancements.find(({ tag }) => tag == advancement.parent)) {
                advancementDataToGet.push(advancement.parent);
            }
        }
        let tableRow = `<tr><td style="text-align:center; max-width:2em;"><span style="font-size:10px;"><img src="../../_wiki_site_files/img/advancemet/${advancement.tag}.png" alt="${advancement.tag} advancement"/></span></td><td><b>${advancement.name}</b></td><td>${advancement.description}</td><td>${$a[advancement.parent] != undefined ? $a[advancement.parent].name : advancement.parent.match(/^minecraft:/) ? `<a href="https://minecraft.fandom.com/wiki/Advancements" target="_blank">${advancement.parent.replace(/minecraft:/, "").replace(/_/g, " ").toProperCase()}</a>` : ""}</td><td>${advancement.requirements == "" ? "-" : advancement.requirements}</td><td>${advancement.resourceLocation}</td></tr>`;
        tableContents += tableRow;
    });

    let table = `
<table>
    <thead>
        <tr>
            <th>Icon</th>
            <th><a href="../../wiki/Advancements">Advancement</a></th>
            <th>In-game Description</th>
            <th>Parent</th>
            <th>Actual Requirements (if different)</th>
            <th>Resource Location</th>
        </tr>
    </thead>
    <tbody>
        ${tableContents}
    </tbody>
</table>`;
    return table;
}
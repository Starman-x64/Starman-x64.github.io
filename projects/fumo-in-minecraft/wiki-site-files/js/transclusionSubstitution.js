import { contents } from "../../_wiki_site_files/templates/contents.js";
import { infobox } from "../../_wiki_site_files/templates/infobox.js";
import { recipeTable } from "../../_wiki_site_files/templates/recipe_table.js";
import { usedInRecipeTable } from "../../_wiki_site_files/templates/used_in_recipe_table.js";
import { advancementsTable } from "../templates/advancements_table.js";
import { rightAside } from "../../_wiki_site_files/templates/right_aside.js";

const interpretDollarString = function(dollarString, data) {
    if (dollarString == "") return "";
    // get the dollar string prefix ($i, $A, etc.)
    let stringType = dollarString.split(".")[0];
    let stringKey = dollarString.split(".")[1];
    if (stringKey == undefined) {
        switch (stringType) {
            case "$i":
                return data.items;
            case "$r":
                return data.recipes;
            case "$R":
                return data.usedInRecipes;
            case "$a":
                return data.advancements;
            case "$A":
                return data.usedInAdvancements;
            default:
                return `ERROR: "${dollarString}" is not a valid dollar string. "${stringType}" does not correspond to any string type.`;
        }
    }
    else {
        switch (stringType) {
            case "$i":
                return data.items[stringKey];
            case "$r":
                return data.recipes[stringKey];
            case "$R":
                return data.usedInRecipes[stringKey];
            case "$a":
                return data.advancements[stringKey];
            case "$A":
                return data.usedInAdvancements[stringKey];
            default:
                return `ERROR: "${dollarString}" is not a valid dollar string. "${stringType}" does not correspond to any string type.`;
        }
    }
}

export const transclusionSubstitution = function(data, markdown) {
    // find every instance of any text between "{{" and "}}"
    let transclusionMatches = markdown.match(/{{[^{}]+}}/g);
    // find every instance of any text between "[[" and "]]"
    let wikiLinkMatches = markdown.match(/\[\[[^\[\]]+\]\]/g);
    // handle the case where there are no transclusion on a page
    let transclusions = transclusionMatches == null ? [] : transclusionMatches;
    // handle the case where there are no transclusion on a page
    let wikiLinks = wikiLinkMatches == null ? [] : wikiLinkMatches;    
    
    transclusions.forEach((transclusion) => {
        // split the transclusion by each pipe symbol
        let parameters = transclusion.replace(/({{)|(}})/g,"").split("|");
        // do the appropriate things depending which transclusion is requested
        let replacement = transclusion;
        switch (parameters[0]) {
            case "Infobox":
                // set each given display parameter to true for a display params object
                let infoboxDisplayParams = {};
                for (let i = 2; i < parameters.length; i++) {
                    infoboxDisplayParams[parameters[i]] = true;
                }
                replacement = infobox(interpretDollarString(parameters[1], data), infoboxDisplayParams);
                break;
            case "Contents":
                replacement = contents;
                break;
            case "Recipe_Table":
                replacement = recipeTable(interpretDollarString(parameters[1], data),data.items);
                break;
            case "Used_In_Recipe_Table":
                replacement = usedInRecipeTable(interpretDollarString(parameters[1].replace("$R", "$i"), data), interpretDollarString(parameters[1], data),data.items);
                break;
            case "Advancements_Table":
                replacement = advancementsTable(interpretDollarString(parameters[1], data),data.advancements);
                break;
            case "Right_Aside":
                replacement = rightAside(parameters[1], parameters[2]);
                break;
            default:
                replacement = `<span style="color:var(--error-color);">ERROR: "Template:${parameters[0]}" does not exist.</span>`;
                break;
        }
        
        markdown = markdown.replace(transclusion, replacement);
    });

    wikiLinks.forEach((wikiLink) => {
        // split the wikilink by each pipe symbol
        let parameters = wikiLink.replace(/(\[\[)|(\]\])/g,"").split("|");
        let replacement = `[${parameters[1] == undefined ? parameters[0] : parameters[1]}](../../wiki/${parameters[0].toProperCase().replace(/ /g, "_")})`;
        markdown = markdown.replace(wikiLink, replacement);
    });
    
    return markdown;
}
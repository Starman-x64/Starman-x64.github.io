import { getData } from "../js/getData.js";

export const recipeTable = function(item, $i) {
    let itemDataToGet = [item.item];
    let tableContents = "";
    item.recipes.forEach((recipe) => {
        let ingredientsList = ""
        if (!itemDataToGet.includes(recipe.workStation)) {
            itemDataToGet.push(recipe.workStation);
        }
        recipe.ingredients.forEach((ingredient) => {
            if (!itemDataToGet.includes(ingredient.item)) {
                itemDataToGet.push(ingredient.item);
            }
            ingredientsList += `<li>${ingredient.quantity} ${ingredient.item}</li>`
        });
        let tableRow = `<tr><th>${item.item}</th><td style="text-align:left;"><ul >${ingredientsList}</ul></td><td style="text-align:center;">${recipe.workStation}</td><td style="text-align:center;"><img src="../../wiki-site-files/img/recipe/${recipe.workStation}/${item.item}.png" alt="${item.item} recipe" /></td></tr>`;
        tableContents += tableRow;
    });
    
    // get data on item tag names to replace with actual names
    let dataToReplace = Object.assign({},
        // get appropriate data which has already been loaded from the json files
        Object.keys($i)
            .filter(key => itemDataToGet.includes(key))
            .reduce((obj, key) => {
            obj[key] = $i[key];
            return obj;
            }, {}),
        // add any item prefixed with "minecraft:" as a key with an empty value
        itemDataToGet.filter(key => key.match(/^minecraft:/))
            .reduce((obj, key) => {
            obj[key] = "";
            return obj;
            }, {})
        );
    // replace all tag names with the correct item name
    tableContents = tableContents.replaceAll(new RegExp(`>${item.item}<`, "g"), `><b>${dataToReplace[item.item].name}</b><`);
    for (const [key, value] of Object.entries(dataToReplace)) {
        if (key.match(/minecraft/)) {
            // vanilla item handling
            let formattedName = key.replace(/minecraft:/, "").replace(/_/g, " ").toProperCase();
            let url = `https://minecraft.fandom.com/wiki/${formattedName.replace(/ /g, "_")}`;
            tableContents = tableContents.replaceAll(new RegExp(key, "g"), `<a href="${url}" target="_blank">${formattedName}</a>`)
        }
        else {
            // custom item handling
            try {
                // this ain't broke so don't fix it lol
                let specialString0 = "oadfsdkjhlkusdhfjskjdfhjsdf";
                let specialString1 = "uridfgnkjndcoujhjiflsdkhfjl";
                tableContents = tableContents.replaceAll(new RegExp(`/${key}`, "g"), specialString0).replaceAll(new RegExp(`"${key} recipe"`, "g"), specialString1).replaceAll(new RegExp(key, "g"), key == "placeholder" ? `<a href="../../wiki/Placeholder"><span style=\"color:var(--error-color);\">Placeholder</span></a>` : `<a href="../../wiki/${value.name.replace(/_/g, " ").toProperCase().replace(/ /g, "_")}">${value.name}</a>`).replaceAll(new RegExp(specialString0, "g"), `/${key}`).replaceAll(new RegExp(specialString1, "g"), `"${key} recipe"`);
            }
            catch {}
        }
    }
    

    let table = `
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Work Station</th>
            <th>Crafting Recipe</th>
        </tr>
    </thead>
    <tbody>
        ${tableContents}
    </tbody>
</table>`;
    return table;
}
export async function getData(type, names) {
    switch (type) {
        case "item":
            // get json data
            const itemResponse = await fetch("../../wiki-site-files/data/items.json", {});
            const itemJson = await itemResponse.json();
            let itemData = {};
            await names.forEach(( name ) => {
                itemData[name] = itemJson.find( ({ tag }) => tag == name);
            })
            return itemData;
        case "recipe":
            // get json data
            const recipeResponse = await fetch("../../wiki-site-files/data/recipes.json", {});
            const recipeJson = await recipeResponse.json();
            let recipeData = {};
            await names.forEach(( name ) => {
                recipeData[name] = recipeJson.find( ({ item }) => item == name);
            })
            return recipeData;
        case "usedIn":
            // get json data
            const usedInResponse = await fetch("../../wiki-site-files/data/recipes.json", {});
            const usedInJson = await usedInResponse.json();
            let usedInData = {};
            await names.forEach(( name ) => {
                usedInData[name] = [];
                usedInJson.forEach(( entry ) => {
                    if (entry.recipes.find(({ ingredients }) => ingredients.find(({ item }) => item == name))) {
                        usedInData[name].push(entry);
                    }
                });
            })
            return usedInData;
        case "advancement":
            // get json data
            const advancementResponse = await fetch("../../wiki-site-files/data/advancements.json", {});
            const advancementJson = await advancementResponse.json();
            let advancementData = {};
            await names.forEach(( name ) => {
                advancementData[name] = advancementJson.find( ({ tag }) => tag == name);
            })
            return advancementData;
        case "usedInAdvancement":
            // get json data
            const usedInAdvancementResponse = await fetch("../../wiki-site-files/data/advancements.json", {});
            const usedInAdvancementJson = await usedInAdvancementResponse.json();
            let usedInAdvancementData = {};
            await names.forEach(( name ) => {
                usedInAdvancementData[name] = [];
                usedInAdvancementJson.forEach(( entry ) => {
                    if (entry.relatedItems.find((relatedItem) => relatedItem == name)) {
                        usedInAdvancementData[name].push(entry);
                    }
                });
            })
            return usedInAdvancementData;
        case "allInvolvingItem":
            let allInvolvingData = {
                items: await getData("item", names),
                recipes: await getData("recipe", names),
                usedInRecipes: await getData("usedIn", names),
                advancements: {},
                usedInAdvancements: await getData("usedInAdvancement", names)
            }

            for (const [key, value] of Object.entries(allInvolvingData.usedInRecipes)) {
                value.forEach((recipe) => {
                    allInvolvingData.recipes[recipe.item] = recipe;
                });
            }
            for (const [key, value] of Object.entries(allInvolvingData.usedInAdvancements)) {
                value.forEach((advancement) => {
                    allInvolvingData.advancements[advancement.tag] = advancement;
                });
            }
            return allInvolvingData;
        case "allInvolvingItem+":
            let allInvolvingDataPlus = {
                items: await getData("item", names),
                recipes: await getData("recipe", names),
                usedInRecipes: await getData("usedIn", names),
                advancements: {},
                usedInAdvancements: await getData("usedInAdvancement", names)
            }

            for (const [key, value] of Object.entries(allInvolvingDataPlus.usedInRecipes)) {
                value.forEach((recipe) => {
                    allInvolvingDataPlus.recipes[recipe.item] = recipe;
                });
            }
            for (const [key, value] of Object.entries(allInvolvingDataPlus.usedInAdvancements)) {
                value.forEach((advancement) => {
                    allInvolvingDataPlus.advancements[advancement.tag] = advancement;
                });
            }
            let allInvolvingDataPlusItemDataToGet = [];
            for (const [key, value] of Object.entries(allInvolvingDataPlus.recipes)) {
                if (!allInvolvingDataPlusItemDataToGet.includes(key) && !names.includes(key) && !key.match(/minecraft:/g)) {
                    allInvolvingDataPlusItemDataToGet.push(key);
                }
                value.recipes.forEach((recipe =>{
                    if (!allInvolvingDataPlusItemDataToGet.includes(recipe.workStation) && !names.includes(recipe.workStation) && !recipe.workStation.match(/minecraft:/g)) {
                        allInvolvingDataPlusItemDataToGet.push(recipe.workStation);
                    }
                    recipe.ingredients.forEach((ingredient) => {
                        if (!allInvolvingDataPlusItemDataToGet.includes(ingredient.item) && !names.includes(ingredient.item) && !ingredient.item.match(/minecraft:/g)) {
                            allInvolvingDataPlusItemDataToGet.push(ingredient.item);
                        }
                    });
                }));
            }
            allInvolvingDataPlus.items = Object.assign({}, allInvolvingDataPlus.items, await getData("item", allInvolvingDataPlusItemDataToGet));
            return allInvolvingDataPlus;
        default:
            return `"${type}" is not a valid data type.`
    }
}
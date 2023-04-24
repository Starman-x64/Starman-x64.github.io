export const infobox = function(itemData, displayedInfo) {
    return `
<div class="infobox">
    <div class="infobox-name">
        ${itemData.name}
    </div>
    <div class="infobox-image">
        <div><img src="../../wiki-site-files/img/${itemData.type.toLowerCase()}/${itemData.category.toLowerCase().replace(/ /g, "_")}/${itemData.tag}.png" alt="${itemData.name}" /></div>
        <div>${itemData.lore}</div>
    </div>
    ${displayedInfo.type || displayedInfo.genericItem ? `<div class="infobox-type"><div>Type</div><div>${itemData.type}</div></div>` : `\b`}
    ${displayedInfo.category || displayedInfo.genericItem ? `<div class="infobox-category"><div>Category</div><div>${itemData.category}</div></div>` : `\b`}
    ${displayedInfo.tag || displayedInfo.genericItem ? `<div class="infobox-item-tag"><div>Item Tag</div><div>${itemData.tag}</div></div>` : `\b`}
    ${displayedInfo.baseItem || displayedInfo.genericItem ? `<div class="infobox-base-item-tag"><div>Base Item</div><div><a href="https://minecraft.fandom.com/wiki/${itemData.baseItem.replace(/_/g, " ").toProperCase().replace(/ /g, "_")}" target="_blank">${itemData.baseItem.replace(/_/g, " ").toProperCase()}</a></div></div>` : `\b`}
    ${displayedInfo.customModelData || displayedInfo.genericItem ? `<div class="infobox-custom-model-data"><div>Custom Model Data</div><div>${itemData.customModelData}</div></div>` : `\b`}
</div>
`;
}
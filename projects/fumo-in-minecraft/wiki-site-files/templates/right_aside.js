export const rightAside = function(width, markdown) {
    return `
<div class="right-aside" style="width:${width};">
${markdown}
</div>
`;
}
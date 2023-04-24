export const generateTableOfContents = function()
{
	// get the table cell in the contents div to put the text into
	let contentsCell = document.getElementById("toc").children[1];
	let html = "";
	// get all headings tags
	let headings = document.querySelectorAll("h2, h3, h4, h5, h6");
	// level tracker tracks the indentation level of the current entry
	let levelTracker = [];
	// for each heading:
	headings.forEach((heading) => {
		// get the heading name (innerHTML) and its id
		let name = heading.innerHTML;
		let id = heading.id;
		// calculate the indent count (h2 -> 0 indents; h3-> 1 indent; etc.)
		let indentCount = parseInt(heading.tagName.substring(1,2)) - 2;
		// update the entry tracker
		let before = "";
		// if the current heading is on the same level as the level tracker indicates, increment the count by 1
		if (levelTracker.length - 1 == indentCount) {
			levelTracker[indentCount]++;
			before = "</li>";
		}
		// if the current heading is on a more inner level as the level tracker indicates, add another level to the entry tracker
		else if (levelTracker.length - 1 < indentCount) {
			levelTracker.push(1);
			before = "<ul>";
		}
		// if the current heading is on a more outer level as the level tracker indicates, remove the last level from the entry tracker
		else {
 			levelTracker.pop();
			levelTracker[indentCount]++;
			before = "</li></ul></li>";
		}
		// string together all digits in level tracker for numbering
		let marker = levelTracker.join(".") + ".";
		// format as link in html
		let tableEntry = `${before}<li><span class="tocnumber">${marker}</span><span><a href="#${id}">${name}</a></span>`;
		// append to entire string
		html += tableEntry;
	});
	html += "</li></ul>";
 	contentsCell.innerHTML = html;
}
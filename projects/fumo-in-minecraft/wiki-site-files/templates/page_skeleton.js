export const pageSkeleton = function(title, commentPage=false) {
  return `
    <header>
      <div class="header-title">
        Fumo In Minecraft? Wiki
      </div>
      <div class="search">
        <div class="form-div">
          <form name="search" class="search-form">
            <input type="text" aria-label="Search" placeholder="" autocapitalize="none" autocorrect="off" autocomplete="off" spellcheck="false" required="">
          </form>
        </div>
      </div>
    </header>
    <div class="main-container">
      <div id="side-nav">
        <div class="logo">
          <a href="../../" title="Fumo in Minecraft? Wiki">
            <img src="../../_wiki_site_files/img/shrine_maidens_favour.png" />
          </a>
        </div>
        <div>
          <ul>
            <li><a href="../../">Main Page</a></li>
            <li><a href="https://github.com/Starman-x64/fumo-in-minecraft">Download</a></li>
          </ul>
        </div>
        <hr/>
        <div id="nav-tree">
          ${
            (() => {
              try {
                let categoryTree = document.getElementsByTagName("meta")["category-tree"].content.split("/");
                let navTree = document.getElementById("nav-tree");
                let list = "<ul>"
                categoryTree.forEach((category) => {
                  if (category == categoryTree[categoryTree.length - 1]) {
                    let formattedString = category.replace(/_/g, " ").toProperCase();
                    list += "\n\t<li><b>" + formattedString + "</b></li>";
                  }
                  else {
                    let formattedString = category.replace(/_/g, " ").toProperCase();
                    list += "\n\t<li><a href=\"../../wiki/" + formattedString.replace(/ /g, "_") + "\">" + formattedString + "</a></li>";
                  }
                });
                list += "\n</ul>";
                console.log("hi");
                return list;
              }
              catch {
                return "";
              }
            })()
          }
        </div>
      </div>
      <div class="page-container">
        <div class="page-banner"></div>
        <div class="page-tabs">
          ${
            commentPage ? 
            `<div><a href="./">Page</a></div><div id="active-page-tab">Comments</div>` :
            `<div id="active-page-tab">Page</div><!--<div><a href="comments.html">Comments</a></div>-->`
          }<div></div>
        </div>
        <div class="page">
          <div class="page-header" style="display:block;">
            <h1>${title}</h1>
          </div>
          <div id="content" class="page-content"></div>
        </div>
      </div>
    </div>
    <footer>
      Hello this is a footer.
    </footer>
    `;
};
var menu = document.getElementById("top-menu");
var links = menu.getElementsByTagName("a");
var breadCrumb = document.getElementById("breadcrumb");

for(var i = 0; i<links.length; i++) {
    links[i].onclick = function (e) {
        breadCrumb.innerHTML = this.innerHTML + ' : ' + this.title;
        e.preventDefault();
}
}

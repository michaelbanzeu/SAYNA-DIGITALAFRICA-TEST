var menu = document.getElementById("menuitems");
menu.style.maxHeight = "0px";

function toogleMenu() {
    if (menu.style.maxHeight == "0px") {
        menu.style.maxHeight = "200px";
    } else {
        menu.style.maxHeight = "0px";
    }
}
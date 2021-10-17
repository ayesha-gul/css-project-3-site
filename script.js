


var menuBtn = document.getElementById("menuBtn");
var sideMenu = document.getElementById("sideBar");
sideMenu.style.right = "-250px";
menuBtn.onclick = function() {
    if(sideMenu.style.right == "-250px") {
        sideMenu.style.right = "0";
    }
    else {
        sideMenu.style.right = "-250px";
    }
}
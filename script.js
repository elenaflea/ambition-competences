window.onscroll = function() {
    myFunctionSticky()
};
let navbar = document.querySelector("#myNav");
let burger = document.querySelector(".burger");
let sticky = navbar.offsetTop;
function myFunctionSticky() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    burger.style.position = "absolute";
    } else {
    navbar.classList.remove("sticky");
    burger.style.position = "unset";
    }
}


function myFunctionMobilePlus() {
    let links = document.querySelector("#hidden");
    if (links.style.display == "block" && window.innerWidth <= 1370) {
        links.style.display = "none";

        

    }
    else {
        links.style.display = "block";

        
    }
};
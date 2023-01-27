const toggleMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav");
toggleMenu.addEventListener("click", function() {
    if(this.classList.contains("clicked")) {
        this.classList.remove("clicked");
        nav.style.display = "none";
    } else {
        this.classList.add("clicked");
        nav.style.display = "block";
    }
});

// 
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", function() {
    if(this.scrollY < 200) {
        goUp.style.opacity = "0";
    } else if (this.scrollY >= 200) {
        goUp.style.opacity = "1";
    }
});
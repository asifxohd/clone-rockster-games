document.addEventListener("DOMContentLoaded", function () {
    
    setTimeout(function () {
        hideLoadingScreen();
    }, 4000); 
});

function hideLoadingScreen() {
    var loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.style.opacity = 0;
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, 500);
}

window.addEventListener("scroll", function () {
    var scrollButton = document.querySelector(".scroll-to-top-button");
    if (window.scrollY > 300) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
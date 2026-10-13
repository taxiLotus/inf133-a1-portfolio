
// Ensuring that sidebar returns to being visible
// on the edge-case that a user closes the menu
// then expands their window !!
// and, conversely, the nav menu should by default
// be closed when shrinking the window
var widthChange = window.matchMedia("(max-width: 768px)");
widthChange.addEventListener("change", function() {
    var nav = document.getElementById("navMenu");
    if (this.matches)
        nav.style.display = "none";
    else
        nav.style.display = "block";
});

// Collapsible menu
var menuButton = document.getElementById("menuButton");

menuButton.addEventListener("click", function() {
    this.classList.toggle("active");
    var nav = document.getElementById("navMenu");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});

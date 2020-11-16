function showTab(n) {
    var slide = document.getElementsByClassName("food");
    for (i = 0; i < slide.length; i++) {
        slide[i].className = slide[i].className.replace(" active", "");
    }
    slide[n - 1].className += " active";
}

// function test() {
//     window.pageYOffset = 431;
// }
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls

function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function openTab(e, tabID) {
    var i;
    var tabContent = document.getElementsByClassName("tab_content");

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    tabContent[tabID - 1].style.display = 'flex';

    var tabLink = document.getElementsByClassName("tab_link")
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(' active', '');
    }

    event.currentTarget.className += ' active';
}
document.getElementById("defaultOpen").click();
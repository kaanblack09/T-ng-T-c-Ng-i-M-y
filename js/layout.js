window.addEventListener('scroll', function() {
    var x = pageYOffset;
    if (x > 150 && x < 440) {
        let hederCroll = document.getElementById("header-scroll");
        hederCroll.style.background = "rgba(0, 0, 0, 0.7)";

        let a = document.getElementById("food_load");
        a.style.position = "static";

    } else if (x >= 440) {
        let hederCroll = document.getElementById("header-scroll");
        hederCroll.style.background = "rgba(0, 0, 0, 0.7)";

        let a = document.getElementById("food_load");
        a.style.position = "fixed";
        a.style.top = "65px";
        a.style.left = "195px"
    } else {
        let hederCroll = document.getElementById("header-scroll");
        hederCroll.style.background = "rgba(0, 0, 0, 0.1)";

        let a = document.getElementById("food_load");
        a.style.position = "static";

    }
})

var showMenu = document.getElementById('menu-show');
var isShow = false;
document.getElementById('menu-media').addEventListener('click',function(){
    if(isShow === true){
        isShow= false;
        showMenu.style.display = 'none';
    }
    else{
        showMenu.style.display = 'flex';
        isShow = true;
    }
})

       
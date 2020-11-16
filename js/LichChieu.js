

//Chuyển giữa các tab trong lịch chiếu theo phim, theo rạp và thao ngay
function openTab(e , idTab){
    var tabContent = document.getElementsByClassName("tab-content");
    for(let i =0 ; i<tabContent.length ; i++){
        tabContent[i].style.display= 'none';
    }
    tabContent[idTab-1].style.display= 'block';

}

document.getElementById("defautOpen").click();

// chuyển slide phần khuyến mãi, sự kiện
// $(document).ready(function () {
//     $('#btn-next').click(function(){
//         let slide_Sau = $('.slide.active').next();
//         $('.slide').removeClass('active');
//         slide_Sau.addClass('active');
//     })
    
// });
$(document).ready(function () {
    $('#btn-next').click(function(){
        
        let slide_sau = $('.slide.active').next();
        if(slide_sau.length!==0){
            $('.active').removeClass('active');
            $('.slide').removeClass('di-vao-ben-phai');
            slide_sau.addClass('active');
            slide_sau.addClass('di-vao-ben-phai');
            let nut_sau = $('.KhuyenMai-SuKien ul li.nut-active').next();
            $('.KhuyenMai-SuKien ul li').removeClass('nut-active');
            nut_sau.addClass('nut-active');
            
        }
        
    })

    $('#btn-prev').click(function(){
        let slide_truoc = $('.slide.active').prev();
        if(slide_truoc.length!==0){
            $('.active').removeClass('active');
            $('.slide').removeClass('di-vao-ben-trai');
            slide_truoc.addClass('active');
            slide_truoc.addClass('di-vao-ben-trai');
            let nut_truoc = $('.KhuyenMai-SuKien ul li.nut-active').prev();
            $('.KhuyenMai-SuKien ul li').removeClass('nut-active');
            nut_truoc.addClass('nut-active');
        }
       
    })
    

});

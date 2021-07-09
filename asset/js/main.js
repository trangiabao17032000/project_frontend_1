
// scroll navbar
const header = document.getElementById('scroll');
window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    if(offset > 75)
        header.classList.add('scroll')
    else 
        header.classList.remove('scroll')
});

// slide

$('.slide').slick({
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots:false
});

// navTrigger
$('.navTrigger').click(function(){
    $(this).toggleClass('active');
});

// slide small
$('.contentBottom').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    dots:true
    
});
// go Top
const mybutton = document.getElementById('goToTop');
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "flex";
    }else {
        mybutton.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

//Portfolio 
$(document).ready(function() {
    $('.list').click(function() {
        const value =$(this).attr('data-filter');
        if (value == 'all') {
            $('.effect-react').show(500)
        }
        else{
            $('.effect-react').not('.'+value).hide(500)
            $('.effect-react').filter('.'+value).show(500)
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
    })

    
})
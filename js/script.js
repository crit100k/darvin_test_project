$(document).ready(function(){
    let prev = $(".slider__arrow-left"),
        next = $(".slider__arrow-rignt");
       

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoHeight:false,
        autoplay: false,
        autoplayTimeout: 5000,
        dots:false,
    });

    next.on("click", ()=>{
        $('.owl-carousel').trigger("next.owl.carousel");
  });
    prev.on("click", ()=>{
        $('.owl-carousel').trigger("prev.owl.carousel");
  })

})          
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
        // nav: true,
        // navText:["",""],
        // navClass: ["slider__arrow-left","slider__arrow-right"],
        // navContainerClass: "slider__controls"
    });

    next.on("click", ()=>{
        $('.owl-carousel').trigger("next.owl.carousel");
  });
    prev.on("click", ()=>{
        $('.owl-carousel').trigger("prev.owl.carousel");
  })

})          
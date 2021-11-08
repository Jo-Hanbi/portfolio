$(function(){

  $(".menuicon").on("click",function(){

     if($(".menuicon").hasClass("view")){
        $(".menuicon").removeClass("view");
        $(".mobile_menu_box").removeClass("view");
        $(".search_box").removeClass("view");
        $(".shoppingicon_small").removeClass("view");
      }else{
        $(".menuicon").addClass("view");
        $(".mobile_menu_box").addClass("view");
        $(".search_box").addClass("view");
        $(".shoppingicon_small").addClass("view");
      }
  });

  $(window).scroll(function(){
    const top = $(this).scrollTop();
    console.log(top);

    if(top > 100){
      $(".lnv").addClass("fixed");
    }else{
      $(".lnv").removeClass("fixed");
    }
  })

});

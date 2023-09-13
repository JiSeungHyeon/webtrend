$(document).ready(function(){

  //PC
  function bigAuto(){

    $(".gallery>ul").stop(true,true).animate({marginLeft:"-=500px"},700,function(){
      $(".gallery>ul li:first-child").appendTo(".gallery ul");
      $(this).css({marginLeft:"0px"});
    });
  };

  bauto = setInterval(bigAuto,4000);

  $(".gallery").hover(function(){
    clearInterval(bauto);
  },function(){
    setInterval(bigAuto,4000);
  });

  //mobile
  $("#gnb_mobile").css({"right":"-60%"});

  qchk = true;

  $(".trigger").click(function(){

    $(this).toggleClass("active");
    if(qchk){
      $(this).stop().animate({right:"60%"},500);
      $("#gnb_mobile").stop().animate({right:"0px"},500);
      qchk = false;
    }else{
      $(this).stop().animate({right:"15px"},500);
      $("#gnb_mobile").stop().animate({right:"-60%"},500);
      qchk = true;
    }

});
$("#gnb_mobile li").click(function(){
  $('.trigger').stop().animate({right:"15px"},500);
  $(".trigger").removeClass("active");
  $("#gnb_mobile").stop().animate({right:"-60%"},500);
  qchk = true;
});

});
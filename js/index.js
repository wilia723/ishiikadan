$(document).ready(function(){
  //スクロール
  $(function(){
    $(window).scroll(function(){
      var scrolled = "scrolled";
      var logo = '.header__logo'
      var logo_white = "img/Hight_logo01.png";
      var logo_black = "img/Hight_logo02.png";
      function addClass() {
        
      }

      if($(window).scrollTop() > 0){
        $('.header').addClass(scrolled);
        $('.header__title').addClass(scrolled);
        $('.nav__text').addClass(scrolled);
        $('.hamburger__line').addClass(scrolled);
        if($(logo).hasClass("open")) {
          $(logo).attr("src", logo_white);
        }else {
          $(logo).attr("src", logo_black);
        }
      }else {
        $('.header').removeClass(scrolled);
        $('.header__title').removeClass(scrolled);
        $('.nav__text').removeClass(scrolled);
        $('.hamburger__line').removeClass(scrolled);
        $(logo).attr("src", logo_white);
      }
    });
  });

  //予約メニュー
  $(function(){
    $('#reservation-btn').on("click", function(){
      $('.reservation').fadeIn();
      $('#rvlayer').addClass("active");
    });
  });
  $(function(){
    $('.reservation__close, #rvlayer').on("click", function(){
      $('.reservation').css("display", "none");
      $('#rvlayer').removeClass("active");
    });
  });

  //ハンバーガーメニュー
  $(function(){
    var logo = '.header__logo'
    var open = "open"
    var logo_white = "img/Hight_logo01.png";
    var logo_black = "img/Hight_logo02.png";
    
    function noScroll(event) {
      event.preventDefault();
    }
    $('#hamburger,#hglayer').on("click", function(){
      $('.global-nav').toggleClass(open);
      $('#hglayer').toggleClass("active");
      $('.hamburger__line').toggleClass(open);
      $(logo).toggleClass(open);
      if($(logo).hasClass(open)) {
        $(logo).attr("src", logo_white);
      }else if($(window).scrollTop() > 0) {
          $(logo).attr("src", logo_black);
      }
      if($('.global-nav').hasClass(open)) {
        document.addEventListener('touchmove', noScroll, { passive: false });
        document.addEventListener('mousewheel', noScroll, { passive: false });
      }else {
        document.removeEventListener('touchmove', noScroll, { passive: false });
        document.removeEventListener('mousewheel', noScroll, { passive: false });
      }
    });
  });

  //タブ
  $(function(){
    $('.grid[id != "tab1"]').hide();
    $('.tab__name').on("click", function(){
      $(".grid").hide();
      $($(this).attr("href")).fadeIn(1000);
      $(".current").removeClass("current");
      $(this).addClass("current");

      return false;
    });
  });
});

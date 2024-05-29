'use strict';

const swiper = new Swiper(".swiper", {
  loop: true,
  // ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//ヘッダーの固定
var header_window = $(window),
    header_height = $('.l-header').height(),
    _header = $('.l-header'),
    top_height;

header_window.scroll(function(){
  top_height = $('.p-mv').height();
  if(header_window.scrollTop() > top_height){
    _header.addClass('u-bg-white');
    _header.css('padding-bottom', 0);
    $('.l-header__contact__btn').addClass('is-fixed');
  }
  else{
    _header.removeClass('u-bg-white');
    $('.l-header__contact__btn').removeClass('is-fixed');
  }
});

$(function() {
  $('#staff-active').on('click', function() {
    $('.staff__card__area').addClass('fadeIn');
    $('.trainer__card__area').addClass('fadeOut');
    $('.p-trainer__tab__name__2').addClass('active');
    $('.p-trainer__tab__name__1').removeClass('active');

  })
  $('#trainer-active').on('click', function() {
    $('.trainer__card__area').removeClass('fadeOut');
    $('.staff__card__area').removeClass('fadeIn');
    $('.p-trainer__tab__name__1').addClass('active');
    $('.p-trainer__tab__name__2').removeClass('active');
  })
})

$(function () {
  $('.p-faq__answer__box').hide();
  $(".p-faq__question__box").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open",200);
  });
});
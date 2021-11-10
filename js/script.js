// ===========ヘッダー固定部分===========
var headerH = $("#header").outerHeight(true);

function FixedAnime() {

	var scroll = $(window).scrollTop();
	if (scroll >= 300){
        $('#header').addClass('HeightMin');
	}else{
        $('#header').removeClass('HeightMin');
	}    
}

$(window).scroll(function () {
	FixedAnime();
});

$(window).on('load', function () {
	FixedAnime();
});

// ===========ヘッダー固定部分===========

// ===========ハンバーガー部分===========
$(function() {
	$('.navi-item>a').click(function() {
	$('#hamburger-check').removeAttr('checked').prop('checked', false).change();
});
});
// ===========ハンバーガー部分===========

// ===========ニュースのスライダー部分===========
var windowWidth = $(window).width();
var windowSm = 768;

if (windowWidth <= windowSm) {
	$('.news-container').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed:1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		dots: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		});
	}

	// スマホ用
$('.news-container').on('touchmove', function(event, slick, currentSlide, nextSlide){
	$('.news-container').slick('slickPlay');
});
// ===========ニュースのスライダー部分===========
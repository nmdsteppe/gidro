$(function () {
	$(".top-slider").slick({
		dots: true,
		prevArrow:
			'<button class="top-slider__btn top-slider__btn-prev"><img src="images/prev-arrow.svg" alt=""></button>',
		nextArrow:
			'<button class="top-slider__btn top-slider__btn-next"><img src="images/next-arrow.svg" alt=""></button>',

		responsive: [
			{
				breakpoint: 969,
				settings: {
					arrows: false,
				},
			},
		],
	});

	$(".tab").on("click", function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass("tab--active");
		$($(this).closest('.tabs-wrapper').siblings().find("div")).removeClass(
			"tab-content--active"
		);

		$(this).addClass("tab--active");
		$($(this).attr("href")).addClass("tab-content--active");

		$('.product-slider').slick('setPosition');
	});

	$(".product-item__favorite").on("click", function () {
		$(this).toggleClass("product-item__favorite--active");
	});

	$(".product-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow:
			'<button class="product-slider__btn product-slider__btn-prev"><img src="images/prev-arrow-black.svg" alt=""></button>',
		nextArrow:
			'<button class="product-slider__btn product-slider__btn-next"><img src="images/next-arrow-black.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					arrows: false,
					dots: true,
				},
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					dots: true,
				},
			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 2,
					dots: true,
				},
			},
			{
				breakpoint: 590,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	});

	$(".filter-style").styler();

	$(".filter__item-drop, .filter-btn__extra").on("click", function () {
		$(this).toggleClass("filter__item-drop--active");
		$(this).next().slideToggle("200");
	});

	$(".js-range-slider").ionRangeSlider();

	$(".catalog__filters-btn-filtergrid").on("click", function () {
		$(this).addClass("catalog__filter-button--active");
		$(".catalog__filters-btn-filterline").removeClass(
			"catalog__filter-button--active"
		);
		$(".product-item__wrapper").removeClass("product-item__wrapper--list");
	});

	$(".catalog__filters-btn-filterline").on("click", function () {
		$(this).addClass("catalog__filter-button--active");
		$(".catalog__filters-btn-filtergrid").removeClass(
			"catalog__filter-button--active"
		);
		$(".product-item__wrapper").addClass("product-item__wrapper--list");
	});

	$(".rate-yo").rateYo({
		ratedFill: "#1C62CD",
		normalFill: "#C4C4C4",
		spacing: "10px",
	});

	$(".menu__btn").on("click", function () {
		$(".menu-mobile__list").toggleClass("menu-mobile__list--active");
	});

	$(".footer-top-drop").on('click', function(){
		$(this).next().slideToggle();
		$(this).toggleClass('footer-top-drop--active');
	});

	$(".aside__btn").on('click', function(){
		$(this).next().slideToggle();
	});
});

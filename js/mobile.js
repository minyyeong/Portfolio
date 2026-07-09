$(function () {
	if (document.querySelector('.mobile-swiper')) {
		new Swiper('.mobile-swiper', {
			direction: 'vertical',
			loop: true,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			speed: 600,
		});
	}

	function mobile1() {
		$(".mobile > .mobile_box > ul").stop().animate({ marginTop: -510 }, function () {
			$(".mobile > .mobile_box > ul > li:first").appendTo(".mobile > .mobile_box > ul")
			$(".mobile > .mobile_box > ul").css({ marginTop: 0 })
		})
	}
	setInterval(mobile1, 3000);
})
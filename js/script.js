new Swiper('.image-slider', {
	
pagination:{
	el:'.swiper-pagination',
	clickable: true,
},
navigation:{
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev'
},
autoplay:{
	delay:2900,
	stopOnLastSlide:false,
	disableOnInteraction: false
},

breakpoints: {    
    480: {
    slidesPerView: 3
    },
    758: {
    slidesPerView: 4
    },
    980: {
    slidesPerView: 6
    }
}

});



new Swiper('.image-slider2', {
	
pagination:{
	el:'.swiper-pagination',
	clickable: true,
},
autoplay:{
	delay:3000,
	stopOnLastSlide:false,
	disableOnInteraction: false
},
navigation:{
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev'
},
breakpoints: {    
    480: {
    slidesPerView: 3
    },
    758: {
    slidesPerView: 4
    },
    992: {
    slidesPerView: 6
    }
}

});


function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');

button.on('click', (e) => {
	e.preventDefault();
	toggleMenu();
});

links.on('click', () => toggleMenu());
overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		if (menu.hasClass('burger-menu_active')) {
			$('body').css('overflow', 'none');
		} else {
				$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.burger-menu');
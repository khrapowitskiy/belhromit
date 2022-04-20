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
slidesPerView:6,
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
slidesPerView:6,
});
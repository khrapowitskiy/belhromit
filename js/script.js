new Swiper('.image-slider', {
	
pagination:{
	el:'.swiper-pagination',
	clickable: true,
},
autoplay:{
	delay:800,
	stopOnLastSlide:false,
	disableOnInteraction: false
},
slidesPerView:3,
});

new Swiper('.image-slider2', {
	
pagination:{
	el:'.swiper-pagination',
	clickable: true,
},
autoplay:{
	delay:1000,
	stopOnLastSlide:false,
	disableOnInteraction: false
},
slidesPerView:4,
});
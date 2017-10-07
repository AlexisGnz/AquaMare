// JavaScript Document
/*jQuery(document).ready(function(e) {
	jQuery(".linea_endless").change(function () {
		if(jQuery( ".linea_endless option:selected").val()=='swimcross'){
			jQuery(".modelo_endless").html('<option>Qué modelo desea cotizar?</option><option class="swim_option">SWIMCROSS X-200</option><option class="swim_option">SWIMCROSS X-500</option>')
		};
		if(jQuery( ".linea_endless option:selected").val()=='fitness'){
			jQuery(".modelo_endless").html('<option>Qué modelo desea cotizar?</option><option class="fitness_option">FITNESS E-500</option><option class="fitness_option">FITNESS E-700</option><option class="fitness_option">FITNESS E-2000</option>')
		};
	})
});

*/
$(document).ready(function(e) {
    	slider_empresa=$('.slider_empresa ul').bxSlider({
		auto: true,
		pager: true,
		onSliderLoad: function(){
			$(".menu_slider_empresa li:eq(0)").addClass("active");
		},
		onSlideBefore: function(){
			current = slider_empresa.getCurrentSlide();
			$(".menu_slider_empresa li").removeClass("active");
			$(".menu_slider_empresa li:eq("+(current)+")").addClass("active");
		}
	})
	$(".menu_slider_empresa li").on("click",function(e){
		e.preventDefault();
		slider_empresa.goToSlide(($( ".menu_slider_empresa li" ).index( this )));
	})	

	  $('.carrousel').owlCarousel({
		center: true,
		items: 2,
		loop: true,
		margin: 10,
		touchDrag: false,
		responsive: {
		  600: {
			items: 2
		  }
		}
	  });

});
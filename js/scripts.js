$(document).ready(function(){
	$(".enqueued-patient").children("p").hide();
	$(".enqueued-patient").mouseenter(function(){
		$(this).css("border", "4px solid blue");
	}).mouseleave(function() {
    		$(this).css("border", "solid 2px");
	}).click(function(){
		$(this).children("p").toggle();
	});
});

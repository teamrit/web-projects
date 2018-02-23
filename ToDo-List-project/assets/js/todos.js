// Check off specific todos by clicking:
// using a toggle class.
// added the event listener on the parent element
$("ul").on("click",
		   "li", // mentions the argument onwhich the event listener will apply to.
		   function(){
	$(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if ($(this).val()=="")
	{
		$("#error").append("<p> Cannot add a empty todo. </p>");
	}
	else {
		if (event.which === 13) {
			var todoText = $(this).val();
			// create a new li and add to ui.
			$("ul").append("<li><span> <i class='fas fa-trash'></i> </span> "+todoText+"</li>");
			$(this).val("");
		}
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

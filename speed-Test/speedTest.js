//// Prevents the page from scrolling  when pressing space.
//window.addEventListener('keydown', function(e) {
//  if(e.keyCode == 32 && !$(e.target).is("div")) {
//    e.preventDefault();
//  }
//});
//// Prevents the page from navigating back to previous page and stay in the "type" area
//$(document).on("keydown", function (e) {
//    if (e.which === 8 && !$(e.target).is("div")) {
//        e.preventDefault();
//    }
//});

var para = $(".unvisited").text().toString();
para = para.replace(/\s\s+/g, ' ');
var lengthOfPara = $("#typing-window").text().toString().length;

var tempara = $(".unvisited").text().toString();
tempara = tempara.replace(/\s\s+/g, ' ');


//for (var i = 0 ; i < lengthOfPara; i++) {
//	$("body").keypress(keyPress(event)); 
//}
var alternator=0;
var keyIndex=0;

$("body").keypress(function(event){
		if (event.which > 0) {
//			console.log(event.which);
			
//			tempara = tempara.substr(1,lengthOfPara);
//			$('.temp').append("<span>"+tempara+"</span>");
//			console.log(tempara);
			// prevents the cursor from going back to negitive indices..
			var asciiCode = event.which;
			if (keyIndex<0) {
				keyIndex=0;
			}			
			
//			if (asciiCode===32){
//					$(".entered").last().before("<span class='correct'> </span>");
//			}
			
			
			
//			if (asciiCode===32) {
//				$(".entered").last().remove();
//			}
			
			// prevents the page from scrolling and going back to the previous page
			if (asciiCode===8||asciiCode===32) {
				event.preventDefault();
			}
			else {
				// shifts the "cursor" to the next character
				if (para.charAt(keyIndex)===String.fromCharCode(asciiCode)) {
					$(".entered").last().before("<span class='correct'>"+String.fromCharCode(asciiCode)+"</span>");
				}
				else {
					$(".entered").last().before("<span class='incorrect'>"+String.fromCharCode(asciiCode)+"</span>");
				}
				keyIndex++;
			}
			if (asciiCode===32&&para.charAt(keyIndex)===String.fromCharCode(asciiCode)) {
				$(".entered").last().before("<span class='incorrect'>"+String.fromCharCode(asciiCode)+"</span>");
			}
		}
});
menu.onclick = function myFunction() {
	var x = document.getElementById ('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}



 $(document).ready(function(){
    $("#myTopnav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
if(top > 0) {  
  window.scrollBy(0,((top+100)/-10));  
  t = setTimeout('up()',20);  
} else clearTimeout(t);  
return false;  
} 

(function($) {  
$(function() {  
   
  $('#up').click(function() {  
    $('body,html').animate({scrollTop:0},500);  
    return false;  
  })  
   
})  
})(jQuery)
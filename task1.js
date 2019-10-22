
$(document).ready(function(){
	alert("page loaded")// creating an alrt upon page load
	$("body").css("background-color","#F8CC6E");// creting a style that change a background-color changed upon page load
	$("#par2").css("font-family","arial");//creating a style to chnaged the font-style of paragraph 2
	

  // creating a function when clicked a button its its fadeout the paragraph
  $("#hide1").click(function(){
    $("#par1").fadeOut("slow");
  });
  $("#show1").click(function(){
    $("#par1").fadeIn("slow");
  });

  // creating a function when clicked a button its its fadeout the paragraph
  $("#hide2").click(function(){
    $("#par2").fadeOut("slow");
  });
  $("#show2").click(function(){
    $("#par2").fadeIn("slow");
  });

  // creating a function when clicked a button its its fadeout the paragraph
  $("#hide3").click(function(){
    $("#par3").fadeOut("slow");
  });
  $("#show3").click(function(){
    $("#par3").fadeIn("slow");
  });

  
 
 	// creating a function when clicked a button its its fadeout and fadein tht images 
	$("#pic1").click(function(){
    $("#picture1").fadeOut(1500);
    $("#picture1").fadeIn(1500)
  });

	// creating a function when clicked a button its its fadeout and fadein tht images 
	$("#pic2").click(function(){
    $("#picture2").fadeOut(1500);
    $("#picture2").fadeIn(1500)
  });

	// creating a function when clicked a button its its fadeout and fadein tht images 
	$("#pic3").click(function(){
    $("#picture3").fadeOut(1500);
    $("#picture3").fadeIn(1500)
  });

	 // creating a function when clicked a button its its fadeout and fadein tht images 
	$("#pic4").click(function(){
    $("#picture4").fadeOut(1500);
    $("#picture4").fadeIn(1500)
  });

});

// creating the accordion funtion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// function on a button that start the  animation when it's clicked
	 $("#animate").click(function(){
	 	$(".all").slideUp(8000).slideDown(8000);
	 	 $("div").addClass("b_color");
	 	// $("body").css("background-color","#F32AA7");
  
});
// function on a button that stop the  animation when it's clicked
	 	$( "#stop" ).click(function() {
  		$( "*" ).stop();
  		$("body").css("background-color","#F8CC6E");
	});


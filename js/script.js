


///////////////////////////////  ON LOAD //////////////////////////////
$(document).ready(function(){
	//start new game when page loads
	newGame();

	//move on to judgeAnswer function if there is a selction in both columns
	$(".definitions").on("click", function(){
		$(this).toggleClass("selected");
		$(this).siblings().removeClass("selected");
		selectedDef = $(this).children().text();
		if ($("#right1").hasClass("selected")){
			selectedRight = $("#right1 > p").text();
			judgeAnswer();
		}
		else if ($("#right2").hasClass("selected")){
			selectedRight = $("#right2 > p").text();
			judgeAnswer();
		}
	});
	$(".rights").on("click", function(){
		$(this).toggleClass("selected");
		$(this).siblings().removeClass("selected");
		selectedRight = $(this).children().text();
		if ($("#def1").hasClass("selected")){
			selectedDef = $("#def1 > p").text();
			judgeAnswer();
		}
		else if ($("#def2").hasClass("selected")){
			selectedDef = $("#def2 > p").text();
			judgeAnswer();
		}
	});

	
	$("#newGame").mousedown(newGame);
	$("#nextQuestion").click(getQuestion);



})


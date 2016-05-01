var backgrounds = {
	0: "http://images.unsplash.com/photo-1430779177062-17f86f8ecf40?crop=entropy&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
	1: "https://images.unsplash.com/35/HHEvkhEsQLaNDRkui4fg_fullsize.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=24d1d93f953c0ac6864f7118c1e868fe",
	2: "http://images.unsplash.com/photo-1429703517715-33e131d8102f?crop=entropy&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
	3: "https://images.unsplash.com/reserve/JjdWbOCTlemWMuvC0BeF_DSC_0867edit.jpg?crop=entropy&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450",
	4: "http://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=8a226d41b3c1179b2b6e190f5ff5b457",
	5: "https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?crop=entropy&fit=crop&fm=jpg&h=825&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1450"
}


///////////////////////////////  ON LOAD //////////////////////////////
$(document).ready(function(){
	//start new game when page loads
	$("body").css("background-color", "#3277FF");
	newGame();

    $('.answer').on('click', function() {
        // when we click on an answer, we need to assign the value to a variable and determine if both columns have a selection so we can judge the answer

        // decorate the page
        $(this).toggleClass("selected");
		$(this).siblings().removeClass("selected");

        // if the id of the clicked item contains 'def' we clicked on something in the left column
		if($(this).attr('id').indexOf('def') > -1) {
            selectedDef = $(this).children().text();
        }
        else {
            selectedRight = $(this).children().text();
        }

        // do we have a selection in both columns?
        if(selectedDef !== '' && selectedRight !== '') {
            judgeAnswer();
            showAnswer();
        }
    });
/*
TN: refactoring to reduce redundant code

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
*/
	
	$("#newGame").mousedown(newGame);
	$("#nextQuestion").click(getQuestion);



})


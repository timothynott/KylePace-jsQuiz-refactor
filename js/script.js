var currentQuestions = 0;
var correctAnswers = 0;

var newGame = function(){
	currentQuestions = 0;
	getQuestion();
}

var riparian = {
	defOptions: ["from a stream that touches your property", "from a stream that supports spawning salmonids"],
	rightOptions: ["no action needed", "need to file a statement of use"],
	correctDefIndex: 0,
	correctRightIndex: 1
}
var appropriative = {

}
var groundwater = {

}
var spring = {

}
var rain = {

}

var sources = [riparian, appropriative, groundwater, spring, rain];
var questionsDef = sources[currentQuestions].defOptions;
var questionsRight = sources[currentQuestions].rightOptions;
var answerDef = sources[currentQuestions].correctDefIndex;
var answerRight = sources[currentQuestions].correctRightIndex;

var getQuestion = function(){
	$(".module").addClass("isHidden");
	$(".questionScreen").removeClass("isHidden");
	$("#def1 > p").text(questionsDef[0]);
	$("#def2 > p").text(questionsDef[1]);
	$("#right1 > p").text(questionsRight[0]);
	$("#right2 > p").text(questionsRight[1]);
}

var Answer1 = "";
var Answer2 = "";
var selected1= "";
var judgeAnswer = function(){
	Answer1 = questionsDef.answerDef;
	if (Answer1 === selected1){
		correctAnswers +=1;
	}
	else{}

	Answer2 = $(".rightChoices".answerRight);
	if (Answer2.hasClass("selected")){
		correctAnswers +=1;
	}
	showAnswer();
}
var showAnswer = function(){
	currentQuestions +=1;
	$(".module").removeClass("isHidden");
	$(".module h3").text();
	$(".module #correctAnswers").text(correctAnswers);
	$(".module #currentQuestions").text(currentQuestions);
	$(".module > .button > p").text("Next Question");
}



///////////////////////////////  ON LOAD //////////////////////////////
$(document).ready(function(){
	$(".module h3").text("Welcome to the California Water Rights Quiz!");
	$(".module > p").text("Test your knowledge on water sources as the Division of Water Rights sees them. For each source, pick the correct definition from the list on the left and the type of application that source needs for domestic use.")
	$(".module > .button > p").text("New Game");

	$("#newGame").mousedown(newGame);
	$("#nextQuestion").click(getQuestion);

	$(".definitions").on("click", function(){
		$(this).toggleClass("selected");
		
		if ($("#right1").hasClass("selected")){
			judgeAnswer();
			selected1 = $(this).text();
		}
		else if ($("#right2").hasClass("selected")){
			judgeAnswer();
			selected1 = $(this).text();
		}
	});
	$(".rights").on("click", function(){
		$(this).toggleClass("selected");
		if ($("#def1").hasClass("selected")){
			judgeAnswer();
		}
		else if ($("#def2").hasClass("selected")){
			judgeAnswer();
		}
	});



})


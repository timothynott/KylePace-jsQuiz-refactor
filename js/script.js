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
	$(".modal").addClass("isHidden");
	$(".questionScreen").removeClass("isHidden");
	$("#def1 > p").text(questionsDef[0]);
	$("#def2 > p").text(questionsDef[1]);
	$("#right1 > p").text(questionsRight[0]);
	$("#right2 > p").text(questionsRight[1]);
}

var Answer1 = "";
var Answer2 = "";
var selectedDef= "";
var selectedRight = "";

var judgeAnswer = function(){
	Answer1 = questionsDef[answerDef];
	Answer2 = questionsRight[answerRight];
	if (Answer1 === selectedDef && Answer2 === selectedRight){
		correctAnswers +=1;
	}
	else if(Answer1 === selectedDef){
		correctAnswers += 0.5;
	}
	else if (Answer2 === selectedRight){
		correctAnswers += 0.5;
	}
	showAnswer();
}
var showAnswer = function(){
	currentQuestions +=1;
	$(".modal").removeClass("isHidden");
	$(".modal h3").text();
	$(".modal #correctAnswers").text(correctAnswers);
	$(".modal #currentQuestions").text(currentQuestions);
	$(".modal > .button > p").text("Next Question");
}



///////////////////////////////  ON LOAD //////////////////////////////
$(document).ready(function(){
	$(".modal h3").text("Welcome to the California Water Rights Quiz!");
	$(".modal > p").text("Test your knowledge on water sources as the Division of Water Rights sees them. For each source, pick the correct definition from the list on the left and the type of application that source needs for domestic use.")
	$(".modal > .button > p").text("New Game");

	$("#newGame").mousedown(newGame);
	$("#nextQuestion").click(getQuestion);

	$(".definitions").on("click", function(){
		$(this).toggleClass("selected");
		selectedDef = $(this).children().text();
		if ($("#right1").hasClass("selected")){
			selectedRight = $("#right1>p").text();
			judgeAnswer();
		}
		else if ($("#right2").hasClass("selected")){
			selectedRight = $("#right2 > p").text();
			judgeAnswer();
		}
	});
	$(".rights").on("click", function(){
		$(this).toggleClass("selected");
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



})


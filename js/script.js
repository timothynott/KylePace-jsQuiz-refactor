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
var questionsDef = [];
var questionsRight = [];
var answerDef = 0;
var answerRight = 0;

var getQuestion = function(){
	$(".modal").addClass("isHidden");
	questionsDef = sources[currentQuestions].defOptions;
	questionsRight = sources[currentQuestions].rightOptions;
	answerDef = sources[currentQuestions].correctDefIndex;
	answerRight = sources[currentQuestions].correctRightIndex;
	$("#def1 > p").text(questionsDef[0]);
	$("#def2 > p").text(questionsDef[1]);
	$("#right1 > p").text(questionsRight[0]);
	$("#right2 > p").text(questionsRight[1]);
	$(".questionScreen").removeClass("isHidden");
}

var Answer1 = "";
var Answer2 = "";
var selectedDef= "";
var selectedRight = "";
var judgment = "";

var judgeAnswer = function(){
	Answer1 = questionsDef[answerDef];
	Answer2 = questionsRight[answerRight];
	if (Answer1 === selectedDef && Answer2 === selectedRight){
		correctAnswers +=1;
		judgment = "You must work for the Water Board!";
	}
	else if(Answer1 === selectedDef){
		correctAnswers += 0.5;
		judgment = "Almost!";
	}
	else if (Answer2 === selectedRight){
		correctAnswers += 0.5;
		judgment = "Check your source!";
	}
	else{
		judgment = "Nope, sorry.";
	}
	showAnswer();
}
var showAnswer = function(){
	currentQuestions +=1;
	$(".modal > h3").text(judgment);
	$(".modal > #correctAnswers").text(correctAnswers+" of ");
	$(".modal > #currentQuestions").text(currentQuestions);
	$(".modal > p").text("");
	$(".modal > .button > p").text("Next Question");
	$(".modal").removeClass("isHidden");
	$(".questionScreen").addClass("isHidden");
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


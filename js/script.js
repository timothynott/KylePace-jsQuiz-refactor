var currentQuestions = 0;
var correctAnswers = 0;

var newGame = function(){
	currentQuestions = 0;
	getQuestion();
}
var Supplier = {
	defOptions: ["if you only use bottled water", "from a company or public utility"],
	rightOptions: ["no action needed", "file a statement of use"],
	correctDefIndex: 1,
	correctRightIndex: 0,
	toShow: "If you pay a monthly bill to someone for your tap water, then they get to deal with the Divison of Water Rights. Congratulations!"
}
var Riparian = {
	defOptions: ["from a stream that touches your property", "from a stream that supports spawning salmonids"],
	rightOptions: ["no action needed", "file a statement of use"],
	correctDefIndex: 0,
	correctRightIndex: 1,
	toShow: "Riparian properties have a riparian right to natural flow, but don't go building any dams."
}
var Appropriative = {
	defOptions: ["from a stream that does not touch your property", "from an area with a net water gain"],
	rightOptions: ["no action needed", "pay for and file water right annually"],
	correctDefIndex: 0,
	correctRightIndex: 1,
	toShow: "Do you have a stream on your property that wouldn't be there naturally? Better make sure the Water Board knows about it..."
}
var Groundwater = {
	defOptions: ["from an artisan spring", "from a well"],
	rightOptions: ["no action needed", "pay for and file water right annually"],
	correctDefIndex: 1,
	correctRightIndex: 0,
	toShow: "Although you don't need a water right for a domestic, non-municipal well, check with your county for permits needed to drill a well."
}

var Rain = {
	defOptions: ["Rain is from rain...", "from your neighbor's sprinkler"],
	rightOptions: ["no action needed", "storage not allowed"],
	correctDefIndex: 0,
	correctRightIndex: 0,
	toShow: "You do not need a water right from the state to store rainwater - go tell your neighbors."
}

var sources = [Supplier, Riparian, Appropriative, Groundwater, Rain];
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
	$("#source").text(sources[currentQuestions]);
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
	$(".modal > p").text(toShow);
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


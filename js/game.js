var currentQuestions = 0;
var correctAnswers = 0;
///questions as objects//////////
var supplier = {
	name: "Water Supplier",
	defOptions: ["if you only use bottled water", "from a company or public utility"],
	rightOptions: ["no action needed", "file a statement of use"],
	correctDefIndex: 1,
	correctRightIndex: 0,
	toShow: "If you pay a monthly bill to someone for your tap water, then they get to deal with the Divison of Water Rights. Congratulations!"
}
var riparian = {
	name: "Riparian",
	defOptions: ["from a stream that touches your property", "from a stream that supports spawning salmonids"],
	rightOptions: ["no action needed", "file a statement of use"],
	correctDefIndex: 0,
	correctRightIndex: 1,
	toShow: "Riparian properties have a riparian right to natural flow, but you need to let the Water Board know you're using it and don't go building any dams or storing any water."
}
var appropriative = {
	name: "Appropriative",
	defOptions: ["from a stream that does not touch your property", "from an area with a net water gain"],
	rightOptions: ["no action needed", "pay for and file water right annually"],
	correctDefIndex: 0,
	correctRightIndex: 1,
	toShow: "Do you have a stream on your property that wouldn't be there naturally? Better make sure the Water Board knows about it..."
}
var groundwater = {
	name: "Groundwater",
	defOptions: ["from an artisan spring", "from a well"],
	rightOptions: ["no action needed", "pay for and file water right annually"],
	correctDefIndex: 1,
	correctRightIndex: 0,
	toShow: "Although you don't need a water right for a domestic, non-municipal well, check with your county for permits needed to drill a well."
}

var rain = {
	name: "Rain",
	defOptions: ["Rain is from rain...", "from your neighbor's sprinkler"],
	rightOptions: ["no action needed", "storage not allowed"],
	correctDefIndex: 0,
	correctRightIndex: 0,
	toShow: "You do not need a water right from the state to store rainwater - go tell your neighbors."
}

var sources = [supplier, riparian, appropriative, groundwater, rain];
/* TN: these do not need to be defined globally as they are only used within getQuestion()
var questionsDef = [];
var questionsRight = [];
*/
var answerDef = ''; // current correct definition
var answerRight = ''; // current correct right

//// 1. get a new question ///////
var getQuestion = function(){
    if(currentQuestions === sources.length) {
        // we must have run through all the questions once -- let's start a ne game.
        newGame();
        return;
    }
    // don't show the modal anymore
	$(".modal").addClass("isHidden");

    // de-select all answer choices
    $(".answer").removeClass("selected");
	selectedDef = '';
    selectedRight = '';

    // change the background
	$("body").css("background-image", "url(" + backgrounds[currentQuestions]+")");

    // get correct answer from source object
	answerDef = sources[currentQuestions].defOptions[sources[currentQuestions].correctDefIndex];
	answerRight = sources[currentQuestions].rightOptions[sources[currentQuestions].correctRightIndex];

    // put the answer options onto the page
	$("#source").text(sources[currentQuestions].name);
	$("#def1 > p").text(sources[currentQuestions].defOptions[0]);
	$("#def2 > p").text(sources[currentQuestions].defOptions[1]);
	$("#right1 > p").text(sources[currentQuestions].rightOptions[0]);
	$("#right2 > p").text(sources[currentQuestions].rightOptions[1]);
	$(".questionScreen").removeClass("isHidden");
}

var selectedDef= ""; // user's selected definition
var selectedRight = ""; // user's selected definition
var judgment = "";
//// 2. user selects options and they are compared to answers////
var judgeAnswer = function(){
	if (answerDef === selectedDef && answerRight === selectedRight){
		correctAnswers +=1;
		judgment = "You must work for the Water Board!";
	}
	else if(answerDef === selectedDef){
		correctAnswers += 0.5;
		judgment = "Almost! Read up on CA Water Rights.";
	}
	else if (answerRight === selectedRight){
		correctAnswers += 0.5;
		judgment = "Check your source!";
	}
	else{
		judgment = "Nope, sorry.";
	}
	
	// moved this to the on.click call to simplify showAnswer();
}
/// 3. answer is shown in modal ////
var showAnswer = function(){
	
    $(".modal > #correctAnswers").text(correctAnswers+" of ");
	$(".modal > #currentQuestions").text((currentQuestions + 1) + " questions");

	if (currentQuestions < (sources.length -1)){
		$(".modal > h3").text(judgment);
		$(".modal > p").text(sources[currentQuestions].toShow);
		$(".modal > .button > p").text("Next Question");

	}
	else{
		$(".modal > h3").text("Your final score is");
		$(".modal > p").text("Thanks for playing!");
		$(".modal > .button > p").text("Play again!");
		$(".modal > #share").removeClass("isHidden");
/*
TN: this is already done in 'new game'
		currentQuestions = 0;
		correctAnswers = 0;
*/
	}
    currentQuestions +=1;
	setTimeout(function(){
		$(".modal").removeClass("isHidden");
	}, 600);
	
	setTimeout(function(){
		$(".questionScreen").addClass("isHidden");
	}, 600)
}

var newGame = function(){
	currentQuestions = 0; // reset the question index to point to the beginning
	correctAnswers = 0; // reset the number of correct answers given
	$(".modal > #share").addClass("isHidden");
	$(".questionScreen").addClass("isHidden");
	$(".modal h3").text("Welcome to the California Water Rights Quiz!");
	$(".modal > p").text("Test your knowledge on water rights required for the domestic use of different water sources. For each source, pick the correct definition from the left column and the required action from the right column.");
	$(".modal > span").text("");
	$(".modal > .button > p").text("Start Game");
	$(".modal").removeClass("isHidden");
	$("body").css("background-color", "#3277FF");

	
}

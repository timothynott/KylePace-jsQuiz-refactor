# jsQuiz
from scratch that:  Requires the user to answer a number ( at least 5) of questions, one at a time Prevents the user from skipping questions Gives some way for the user to answer Compares the user answer, and the correct answer to determine a score When all the questions are answered, display the user score. Allow the user to start a new game. Use JavaScript objects to represent the questions.

////////////////////////////////////////////////////////////outline/////////////////////////////////////////////////
var currentQuestions = 0;
var correctAnswers = 0;

$("#newGame").click(startGame));

var startGame = function(){
//display the 1st .source child and its answer choices
	currentQuestions= 0;
}

$(".what").click(
$(this).toggleClass("selected");
if $(".waterRight).child().hasClass("selected"){  //will return an array or only the 1st one. Make sure 1 of the 2 children is selected. Either iterate or do one at a time.
judgeAnswer(selection);
currentQuestions+=1;
showAnswer();

}
Else{}

)}

//store source and its answers as an object
var riparian = {
what: "water from a stream that touches your property";
waterRight: "need to file a statement of use";
OtherQuestionOption:
OtherQuestionOption2:
correctAnswer1Index: 0;
Question1Options: [“option 1”, “option 2”];
Question2Options:
correctAnswer2Index: 
}
///////////////getting and grading questions/////
Var question = questions[“currentQuestions”].Question1Options;
var questions = [riparian, appropriation, groundwater, spring, rain];

var getQuestion = function(){
}

var judgeAnswer = function(selection){
	//compare checked option to correct option index
	//both the array and the index of that array are properties of the current question
	Var Answer1 = question[questions[“currentQuestions”].correctAnswer1Index;
	Var Answer2 = question[questions[“currentQuestions”].correctAnswer2Index;	getQuestion();
If (){
correctAnswers +=1;
}

}


Var showAnswer = function(){
	$(“#showCorrect”).text(correctAnswers);
	$(“#showTotal”).text(currentQuestions);
	$(“.module”).toggleclass(“isNotShown”);
}

$(“#moduleButton”).click(function(){
	getQuestion();
	$(“.module”).toggleClass(“isNotShown”);
});



//If index = questions.length show the end module. Change button to “show final score” instead of “next question”

End function{
Correct answers out of questions.length
}


Challenge: do something visually to make people understand that the question has changed, like color or a delay

Usability: making people understand that there are two sets of questions

Extra credit: fake share buttons on the end module (twitter instructions)


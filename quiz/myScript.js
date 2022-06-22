
const questionNumbers = document.querySelector(".questionNumber"); 
const questionTexts = document.querySelector(".questionText");
const optionContainer = document.querySelector(".optionContainer");


var userAnswers =[];
var correctAnswers = 0;
var incorrectAnswers= 0;
var noGivenAnswers =0;
var totalMarks=0;
var stopwatch =0 ;
var seconds = 0;
let questionCounter = 0;
let animationDelay = 0.2;


//questions,options,answers
const quiz= [
	{
		q : " What sport is best known as the &apos;king of sports &apos;?",
		options : ["Soccer","Cricket","Volleyball","Swimming"],
		answer : "0"
	},
	{
		q : "What&apos;s the diameter of a basketball hoop in inches",
		options : ["8 inches","20 inches","10 inches","18 inches."],
		answer : "3"
		
		
	},
	{
		q : "The Olympics are held every how many years?",
		options : ["1 years","4 years","5 years","7 years"],
		answer : "1"
		
		
	},
	{
		q : "How many dimples does an average golf ball have?",
		options : ["256","186","336","304"],
		answer : "2"
		
		
	},
	{
		q : "Which of the following statement is not correct about ICC ?  ",
		options : [" ICC has 53 members","The ICC is the global governing body for cricket.","council related to football","Name of a city"],
		answer : "0"
	},
	{
		q : "Which of the following is the oldest test cricket playing country in the world?",
		options : ["West Indies","South Africa","India","Australia"],
		answer : "3"
	},
	{
		q : " Where is the headquarter of the ICC?",
		options : ["Sri Lanka","Dubai","London","Sydney"],
		answer : "1"
	},
	{
		q : "In what game is &quot;love&quot; a score?",
		options : ["Cricket","Baseball","Tennis","Hockey"],
		answer : "2"
	},
	{
		q : "When was ICC established?",
		options : [" 1909","2015","2000","1953"],
		answer : "0"
	},
	{
		q : "Which sport uses a net, a racket, and a shuttlecock?",
		options : ["Volleyball","Cricket","Tennis","Badminton"],
		answer : "3"
	},
	
]












//go to next question
function getNextQuestion(){
	
	
	
	//deciding what to do after quiz is over using IF condition 
	if(questionCounter == quiz.length){
		console.log("quiz over");
		
		/*getting the last question value
		get the only from using ID . 
		"This.form" methodolgy can not be used because its in a defferent DIV element */
		var radioArray = document.getElementById("formOptionId");
		//calling the fuction to find if tha answer are correct ,put them on an array ,and count them
		resultArray(radioArray);
		
		console.log(userAnswers);
		
		calculateMarks();
		quizresult();
		
		hideQuizBox();
		backgroundChanger();
		
		
		
	}	
	else{
		console.log(questionCounter);
		//settings the question Number
		questionNumbers.innerHTML = "Question" + (questionCounter + 1) + " of " +quiz.length;
		//change the question text 
		let currentQuestion=(quiz[questionCounter]);
		questionTexts.innerHTML=currentQuestion.q;
		//getting the answer as an Array
		let currentOption = currentQuestion.options;
		console.log(currentOption);
		
		
		//adding answer to the each label
		for(var i=0;i<4 ;i++){
			
			document.getElementById("label"+i).innerHTML=currentOption[i];
			
		}
		
		
		
	
		/*getting the last question value
		get the only from using ID . 
		"This.form" methodolgy can not be used because its in a defferent DIV element */
		var radioArray = document.getElementById("formOptionId");
		//calling the fuction to find if tha answer are correct ,put them on an array ,and count them
		resultArray(radioArray);
		console.log(radioArray);
		
		questionCounter = questionCounter + 1;
				
		
		
		resetRadioButton();
			
		
		
		
		
		
		
		
	
		
	}
	
	
}

function firstQuestionLoader(){
		//settings the question Number
		questionNumbers.innerHTML = "Question" + (questionCounter + 1) + " of " +quiz.length;
		//change the question text 
		let currentQuestion=(quiz[questionCounter]);
		questionTexts.innerHTML=currentQuestion.q;
		//getting the answer as an Array
		let currentOption = currentQuestion.options;
		console.log(currentOption);
		
		
		//adding answer to the each label
		for(var i=0;i<4 ;i++){
			
			document.getElementById("label"+i).innerHTML=currentOption[i];
			//document.getElementById("label"+i).style.animationDelay = animationDelay+'s'
			//animationDelay = animationDelay +0.2;
		}
		questionCounter++;
		
}

//returns the checked radio value
function getRadioValue( radioArray ) {
	var i;
	for ( i = 0; i < radioArray.length; i++ ) {
	  if ( radioArray[ i ].checked ) { 
		 return radioArray[ i ].value;
	  }
	}
	return "";
}

//counts correct answers,incorrect answers,make an array of each ueser response
function resultArray(radioArray){
	const answerIndex= getRadioValue(radioArray.options);
	console.log("checked :"+answerIndex);
	let currentQuestion= quiz[questionCounter-1];
	console.log("answer :"+currentQuestion.answer);

	if(answerIndex ===currentQuestion.answer){
		userAnswers[(questionCounter-1)]= "Correct";
		correctAnswers++;
		console.log("correctAns :"+correctAnswers);
	}
	else if (answerIndex === ""  ){
		userAnswers[(questionCounter-1)]= "Not Given";
		noGivenAnswers++;
		console.log("noGivenAns :"+noGivenAnswers);
		
	}
	else{
		
		userAnswers[(questionCounter-1)]= "Incorrect";
		incorrectAnswers++;
		console.log("incorrectAns :"+incorrectAnswers);
	}
	
}
//uncheck previous question checked radio buttons

function resetRadioButton(){
	document.getElementById("option00").checked = false;
	document.getElementById("option02").checked = false;
	document.getElementById("option01").checked = false;
	document.getElementById("option03").checked = false;
}



//loader
window.onload = function(){
	
	document.getElementById("questionBox").style.display = "none";
	document.getElementById("resultBox").style.display = "none";

}

//adding each guestions result to the table
function quizresult(){
	document.getElementById("question1").innerHTML = userAnswers[0];
	document.getElementById("question2").innerHTML = userAnswers[1];
	document.getElementById("question3").innerHTML = userAnswers[2];
	document.getElementById("question4").innerHTML = userAnswers[3];
	document.getElementById("question5").innerHTML = userAnswers[4];
	document.getElementById("question6").innerHTML = userAnswers[5];
	document.getElementById("question7").innerHTML = userAnswers[6];
	document.getElementById("question8").innerHTML = userAnswers[7];
	document.getElementById("question9").innerHTML = userAnswers[8];
	document.getElementById("question10").innerHTML = userAnswers[9];
	document.getElementById("totalCorrect").innerHTML = correctAnswers;
	document.getElementById("totalIncorrect").innerHTML =incorrectAnswers;
	document.getElementById("totalMarks").innerHTML = totalMarks;
	document.getElementById("spentTime").innerHTML = seconds+" seconds";
	
}

//calculate total marks 
function calculateMarks(){
	totalMarks= (correctAnswers*2)-(incorrectAnswers);
	
	return(totalMarks);
}
//hide quiestion continer box and show result sheet
function hideQuizBox(){
	//hinde quiz box
	document.getElementById("questionBox").style.display = "none";
	//show result box
	document.getElementById("resultBox").style.display = "block";
	
}

//hide homeBox and show the questions
function showQuizBox(){
	 
		
	firstQuestionLoader();
	document.getElementById("questionBox").style.display = "block";
	document.getElementById("homeBox").style.display = "none";
}



/*make MQC div items clickable.
 when div item clicked it will check the relative radio button*/
function optionDivOnclick(i){
	var i ;
	document.getElementById("option0"+i).checked= true ;
	console.log(i);
}
/*change background colour accourding to your marks
	marks :0 
	marks : 1-9
	marks : 10-19
	marks : 20(fullmarks ) */
function backgroundChanger(){
	if(totalMarks == 20){
		document.body.style.backgroundColor = "#37FC0F";
	}
	else if(totalMarks>= 10 ){
		document.body.style.backgroundColor = "#C2FC0F";
	}
	
	else if(totalMarks==0){
	
		document.body.style.backgroundColor ="#FF3003";
		console.log("total :"+totalMarks);
	}
	else if(totalMarks<10 ){
		document.body.style.backgroundColor = "#FC0F82";
	}
}
 //time counter for the question that user answers
function startStopwatch(){
	stopwatch=setInterval(stopwatchStarts , 1000);
	
	
}
/*time counter for the question that user answers
  AFTER 60 seconds it will give the marks for which user has given so far 
  IF user finished all questions before 60 seconds then the timmer will stop */
function stopwatchStarts(){
	seconds++;
	
	if (seconds == 60){
		clearInterval(stopwatch);
		alert("you time is time out.Lets check your answers");
		getNextQuestion();
		questionCounter=quiz.length 
		getNextQuestion();
	
		hideQuizBox();
	}
	else if(questionCounter == quiz.length){
		clearInterval(stopwatch);
	}	
}
$(document).ready(function() {
	// Index for holding questions
	var index = 0;
	// Array to hold qustions
	var questionArray = [q1];

	var correct = 0;

	var wrong = 0;
	
	// Creating countdown parameters for #timer

	var seconds = 31;
	
	var countdown; 

	var isRunning = false;
	
	function run(){
		
		if(!isRunning){
			
			countdown = setInterval(decrement, 1000);
			
			isRunning = true;
			
			}
		
		}

	function decrement () {
		seconds--;

		$("#timer").html("<h2>Time Remaining: " + seconds + " Seconds</h2>");
		
		if (seconds === 0) {
		
			stop();
		}

	}

	function stop() {

		clearInterval(countdown);
		isRunning = false;
	}

	
	var q1 = {
		
		question: "Which artis was originally approached to record Simple Minds smash The Breakfast Club hit Don't You(Forget About Me)?",

		possibleAnswers:   ["U2",
							
							"Billy Idol",
							
							"Men At Work",
							
							"Depeche Mode"],

		indicators: [false, true, false, false],

		answer: "Billy Idol"

	}

	function loadQuestion(questionArray) {
		console.log(questionArray)
	}



});


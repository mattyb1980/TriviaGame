$(document).ready(function() {

	var index = 0;

	// Timer Functions

	var countdownTimer = {

		time : 30,

		reset: function() {

			this.time = 30;

			$("#timer").html("<h3>Time Remaing: " + this.time + " Seconds</h3>");

		},

		start: function() {

			counter = setInterval(countdownTimer.count, 1000);	

		},

		stop: function() {

			clearInterval(counter);

		},

		count: function() {

				countdownTimer.time--;

				console.log(countdownTimer.time);


			if (countdownTimer.time >= 0) {

				$("#timer").html("<h3>Time Remaining: " + countdownTimer.time + " Seconds</h3>");

			}

			else {

				index++;

				answerWrong();

				countdownTimer.reset();

				if (index < questionArray.length) {

					loadQuestion(index);

				} else {

					$(".answerChoice").hide();

					showScore();

				}

			}

		}

	};

	// Global Variables
	var correct = 0;

	var wrong = 0;

	var q1 = {

		question : "Who was originally approached to record Simple Minds 1985 smash hit from The Breakfast Club Don\'t You (Forget About Me)?",

			possibleAnswers : 	["A. U2",

								"B. Men At Work",

								"C. Billy Idol",

								"D. Depeche Mode"],

			flags : [false, false, true, false],

			answer : "C. Billy Idol"

	};



	var q2 = {

		question: "Nicholas Cage starred as H.I. in this 80\'s movie?",

			possibleAnswers: 	["A. Raising Arizona",

				 				"B. Moonstruck",

				 				"C. Peggy Sue Got Married",

				 				"D. Rumble Fish"],

		flags : [true, false, false, false],

		answer : "B. Raising Arizona"

	};



	var q3 = {

		question : "Who played Darkness in the 1985 film Legend?",

			possibleAnswers : 	["A. Tom Cruise",

				 				"B. Mia Sara",

								"C. Val Kilmer",

				 				"D. Tim Curry"],

		flags : [false, false, false, true],

		answer : "D. Tim Curry"

};



	var q4 = {

		question : "Which actor was originally cast as Marty McFly and actually filmed some scenes before being switched out with Michael J Fox?",

			possibleAnswers : 	["A. Jason Bateman",

								"B. Eric Stoltz",

								"C. Matthew Broderick",

								"D. Anthony Edwards"],

		flags : [false, true, false, false],

		answer : "B. Eric Stoltz"

	};



	var q5 = {

		question : "The Simpsons appeared on this show in the late 80\'s show?",

			possibleAnswers : 	["A. The Tonight Show",

					 			"B. The Tracey Ullman Show",

					 			"C. Saturday Night Live",

								"D. Mad TV"],

		flags : [false, true, false, false],

		answer : "B. The Tracey Ullman Show"

	};



	var q6 = {

		question : "In Zoolander, Will Ferrell\'s character Mugatu stated he was part of what 80\'s band",

			possibleAnswers : 	["A. Wham!",

					 			"B. Talking Heads",

					 			"C. Devo",

					 			"D. Frankie Goes To Hollywood"],

		flags : [false, false, false, true],

		answer : "D. Frankie Goes To Hollywood"

	};



	var q7 = {

		question : "Steven Spielberg directed all of the following except?",

			possibleAnswers : 	["A. Jaws 3",

					 			"B. The Color Purple",

					 			"C. Indiana Jones and the Temple of Doom",

					 			"D. E.T. the Extra-Terrestrial"],

		flags : [true, false, false, false],

		answer : "A. Jaws 3"

	};



	var q8 = {

		question : "Tom Cruise had his breakout role in this movie?",

			possibleAnswers : 	["A. Cocktail",

					 			"B. Top Gun",

					 			"C. Risky Business",

					 			"D. Rain Man"],

		flags : [false, false, true, false],

		answer : "C. Risky Business"

	};



	var q9 = {

		question : "What show was about an alien that ate cats?",

			possibleAnswers : 	["A. Fraggle Rock",

					 			"B. Perfect Strangers",

					 			"C. Mork and Mindy",

					 			"D. Alf"],

		flags : [false, false, false, true],

		answer : "D. Alf"

	};



	var q10 = {

		question : "What car was driven by Wyatt in Weird Science?",

			possibleAnswers : 	["A. Ferrari GTO",

					  			"B. Porsche 928",

					  			"C. Porsche 911",

					  			"D. Lamborghini Countach"],

		flags : [false, true, false, false],

		answer : "B. Porsche 928"

	}

	// Setting up an array to call questions

	var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

	// Function to call each question

	function loadQuestion(questionSelection) {

		console.log(questionSelection);

		countdownTimer.reset();

	  $("#question").html("<h3>" + questionArray[questionSelection].question + "</h3>");

	  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();

	  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();

	  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();

	  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();


	}


	// Trying to setup a start button. But can't get other buttons to hide.

	function setup() {

		index = 0;

		$("#question").append('<button id="startButton">Start</button>');

		$("#startButton").on("click", function() {

			$(this).hide();

			// $("#answerChoice").hide();

			countdownTimer.start();

		 	loadQuestion(index);

		});

	}		



	function getAnswer() {



	//  nextQuestion();

		$(".answerChoice").on("click", function() {

		  console.log("alert", index);

			index++;

			console.log("click", index);

			$("#question").text("");

			$("#buttonA").text("");

			$("#buttonB").text("");

			$("#buttonC").text("");

			$("#buttonD").text("");

			loadQuestion();

		})

	}

	function answerCorrect() {

		correct++;

		alert("Correct!");

		console.log("correct");

	}

	function answerCorrect() {

		correct++;

		alert("Correct!");

		console.log("correct");

	}



	function answerWrong() {

		wrong++;

		alert("Incorrect!");

		console.log("wrong");

	}

	// if (q1 = false){
	// 	alert("Incorrect!<br>The correct answer is Billy Idol");
	// }



	function showScore() {

		$("#question").empty();

		$("#question").append("<h2>" + correct + " correct</h2>");

		$("#question").append("<h2>" + wrong + " incorrect</h2>");

		countdownTimer.stop();

		$("#timer").empty();

	}

	// setting up the parameters for if a given answer is true or false

	setup();

	$(".answerChoice").on("click", function() {

		 console.log($(this));

		 if(this.id == "buttonA") {

		 	var answerChosen = "A";

		 } else if(this.id == "buttonB") {

		 	answerChosen = "B";

		 } else if (this.id == "buttonC") {

		 	answerChosen = "C";

		 } else if (this.id == "buttonD") {

		 	answerChosen = "D";

		 } 

		 if ((answerChosen == "A") && (questionArray[index].flags[0] == true)) {

		 	answerCorrect();

		 } else if (answerChosen == "A") {

		 	answerWrong();

		 }

		 if ((answerChosen == "B") && (questionArray[index].flags[1] == true)) {

		 	answerCorrect();

		 } else if (answerChosen == "B") {

		 	answerWrong();

		 }

		if ((answerChosen == "C") && (questionArray[index].flags[2] == true)) {

		 	answerCorrect();

		 } else if (answerChosen == "C") {

		 	answerWrong();

		 }

		if ((answerChosen == "D") && (questionArray[index].flags[3] == true)) {

		 	answerCorrect();

		 } else if (answerChosen == "D") {

		 	answerWrong();

		 }
		// Can't figure out how to get the image to go away :(
		 // if (q1 = true) {
		 // 	$("#choices").html("<img src='assets/images/billyidol.gif' width='400px'>");
		 // 		setTimeout(displayImage, 1000);

		 // }



		 $("#question").text("");

		 $("#buttonA").text("");

		 $("#buttonB").text("");

		 $("#buttonC").text("");

		 $("#buttonD").text("");

		 index++;

		 	if (index < questionArray.length) {

		 		loadQuestion(index);

		 		} else {

				 	$("#answerChoice").hide();

				 	showScore();

		 		}

	});



});

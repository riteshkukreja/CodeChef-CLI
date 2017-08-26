const request = require("request");

const Question = require("./Question");
const QuestionDescriptor = require("./QuestionDescriptor");

// get the contest code (required)
var contest_code = process.argv[2] || null;

// get the question code (optional)
var question_code = process.argv[3] || null;

// create a QuestionDescriptor object from json
var handleProblemDescription = function(prob) {
	var ques = new QuestionDescriptor(
		prob.problem_name, 
		prob.body, 
		prob.max_timelimit, 
		prob.source_sizelimit, 
		prob.languages_supported
	);

	ques.show();
};

// told you contest code is necessary
if(contest_code == null) {
	console.log("Contest Code must be provided!");
} else {

	// CodeChef API URL for contests
	// contains questions name, url, submissions, accuracy
	// in case of current contest, it also contains questions data (problem statement, languages, memory/time limits)
	var URL = "https://www.codechef.com/api/contests/" + contest_code;

	// just for dramatic effect
	console.log("Fetching content from ", URL);

	// if only wants information of question
	if(question_code != null) {
		// make call to fetch question details
		console.log("Fetching content from ", URL + "/problems/" + question_code);

		// hit question codechef api call
		request(URL + "/problems/" + question_code, (e, response, body) => {
			if(e || !(request && response.statusCode == 200)) {
				console.log("Failed to fetch ", question_code);
				return;
			}

			prob = JSON.parse(body);

			// create QuestionDescriptor object
			handleProblemDescription(prob);
		});
	} else {
		// call codechef api to show all questions in contest
		request(URL, (err, response, html) => {

			if(err) {
				console.log(err);
				return;
			}

			try {
				var result = [];

				var data = JSON.parse(html);
				var problems = data.problems;
				
				// loop through all the problems
				for(var key in problems) {
					var prob = problems[key];
					result.push(new Question(
						prob.code, 
						prob.name, 
						prob.problem_link, 
						prob.successful_submissions, 
						prob.accuracy
					));
				}

				console.log("============================= Problems =============================");
				for(prob of result)
					prob.show();

			} catch(e) {
				console.log(URL, e, html);
			}

		});
	}
}
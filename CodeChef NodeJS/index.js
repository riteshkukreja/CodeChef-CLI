const request = require("request");
const cheerio = require("cheerio");

const Contest = require("./Contest");

// Url for contests page
var URL = "https://www.codechef.com/contests";

// maximum number of contests to show in each category
// past category has a very large number of contests
var maxContestsInCategory = 5;

request(URL, (err, response, html) => {

	if(err) {
		console.log(err);
		return;
	}

	var $ = cheerio.load(html);
	var result = {};
	

	$(".content-wrapper").filter(function() {

		var data = $(this);

		result.present = [];
		result.future = [];
		result.past = [];

		// fetch the currently running contests
		$(data.children()[15]).filter(function() {
			var runningContests = $(this).children().first().children().last().children();

			runningContests.filter(function() {
				if(result.present.length >= maxContestsInCategory)
					return;

				var tr = this;

				// get code, (contest name, content link), starting date and ending date
				var code = $(tr).children().first().text();
				var name = $($(tr).children()[1]).children().first().text();
				var link = $($(tr).children()[1]).children().first().attr("href");
				var startingDate = $($(tr).children()[2]).text();
				var endingDate = $($(tr).children()[3]).text();

				// add to result
				result.present.push(new Contest(code, name, link, startingDate, endingDate));
			});
		});

		// fetch the future contests
		$(data.children()[18]).filter(function() {
			var runningContests = $(this).children().first().children().last().children();

			runningContests.filter(function() {
				if(result.future.length >= maxContestsInCategory)
					return;

				var tr = this;

				// get code, (contest name, content link), starting date and ending date
				var code = $(tr).children().first().text();
				var name = $($(tr).children()[1]).children().first().text();
				var link = $($(tr).children()[1]).children().first().attr("href");
				var startingDate = $($(tr).children()[2]).text();
				var endingDate = $($(tr).children()[3]).text();

				// add to result
				result.future.push(new Contest(code, name, link, startingDate, endingDate));
			});
		});

		// fetch the past contests
		$(data.children()[21]).filter(function() {
			var runningContests = $(this).children().first().children().last().children();

			runningContests.filter(function() {
				if(result.past.length >= maxContestsInCategory)
					return;

				var tr = this;

				// get code, (contest name, content link), starting date and ending date
				var code = $(tr).children().first().text();
				var name = $($(tr).children()[1]).children().first().text();
				var link = $($(tr).children()[1]).children().first().attr("href");
				var startingDate = $($(tr).children()[2]).text();
				var endingDate = $($(tr).children()[3]).text();

				// add to result
				result.past.push(new Contest(code, name, link, startingDate, endingDate));
			});
		});

	});

	// Show Result
	console.log("===================== Present Contests =====================");
	for(var contests of result.present) {
		contests.show();
	}

	console.log("=====================  Future Contests =====================");
	for(var contests of result.future) {
		contests.show();
	}

	console.log("=====================  Ended Contests  =====================");
	for(var contests of result.past) {
		contests.show();
	}

});
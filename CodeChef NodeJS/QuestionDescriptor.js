var QuestionDescriptor = function(name, problemStatement, timelimit, memorylimit, languages) {
	var parseBody = function(body) {
		// remove language conversion text
		body = body.substring(body.indexOf("<p>"));

		// remove tags
		body = body.replace(/<(?:.|\n)*?>/gm, '');

		return body;
	};

	this.name = name;
	this.problemStatement = parseBody(problemStatement);
	this.timelimit = timelimit;
	this.memorylimit = memorylimit;
	this.languages = languages;

	

	this.show = function() {
		console.log(this.name);
		console.log("=================== Problem Statement ===================");
		console.log(this.problemStatement);
		console.log("=================== Conditions ===================");
		console.log("Time Limit = ", this.timelimit, "seconds | Memory Limit = ", this.memorylimit, "Bytes");
		console.log("Languages: ", this.languages);
	};
};

module.exports = QuestionDescriptor;
var Question = function(code, name, link, submissions, accuracy) {
	this.code = code;
	this.name = name;
	this.link = "" + link;
	this.submissions = submissions;
	this.accuracy = accuracy;

	this.show = function() {
		console.log(name, "(", code , ")");
		console.log("Submissions:", submissions, "|", "Accuracy:", accuracy);
		console.log("=====================================================");
	};
};

module.exports = Question;
var Contest = function(code, name, link, startingDate, endingDate) {
	this.code = code;
	this.name = name;
	this.link = "https://www.codechef.com" + link;
	this.startingDate = new Date(startingDate);
	this.endingDate = new Date(endingDate);

	function formatDate(date) {
	  var monthNames = [
	    "January", "February", "March",
	    "April", "May", "June", "July",
	    "August", "September", "October",
	    "November", "December"
	  ];

	  var day = date.getDate();
	  var monthIndex = date.getMonth();
	  var year = date.getFullYear();
	  var time = date.getHours() < 12 ? 
	  			date.getHours() + ":" + date.getMinutes() + " AM": 
	  			(date.getHours() == 12 ? date.getHours(): date.getHours() - 12) + ":" + date.getMinutes() + " PM"; 

	  return day + ' ' + monthNames[monthIndex] + ', ' + year + ": " + time;
	}

	this.show = function() {
		console.log(this.name, "(", this.code, ")");
		console.log(formatDate(this.startingDate), "-", formatDate(this.endingDate));
	};
};

module.exports = Contest;
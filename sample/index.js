function addUser(event) {
	event.preventDefault();
	if ($("#user").val() != "") {
		$("#output").html("<br><br><i class=\"fa fa-spinner fa-spin fa-4x fa-pulse\" aria-hidden=\"true\"></i>");

		usernames = usernames + "," + $("#user").val();
		$("#input").append("<div class='box'>" + $("#user").val() + "</div>");

		$("#user").val("");

		usernames = usernames.replace(/,\s*$/, "");

		var url = "/topics.php?user=" + usernames;
		console.log(url);
		$.get(url, function(data){
	    	var json = JSON.parse(data);
    		$("#output").html("");
	    	for(var i = 0; i < 10; i++) {
	    		$("#output").append("<div class='box'>" + json[i]["name"] + " : " + json[i]["freq"] + "</div>");
	    	}
	    });
	}
}
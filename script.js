var time = new Time();

$(document).ready(function() 
{
	$("#clock").html(time.getSecondsAfterMidnight());
});
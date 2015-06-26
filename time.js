function Time()
{
	var self = this;
	self.date = new Date();

	self.getSecondsAfterMidnight = function()
	{
		seconds = self.date.getHours()*60*60;
		seconds = seconds + self.date.getMinutes()*60;
		seconds = seconds + self.date.getSeconds();
		seconds = seconds + self.date.getMilliseconds()/1000;
		return seconds;
	}


}
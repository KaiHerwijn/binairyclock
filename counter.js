function Counter()
{
	var self = this;
	self.startLamp = new Lamp(16);


	self.step = function()
	{
		self.startLamp.switch();
	}

	self.clear = function()
	{
		self.startLamp.clear();
	}
}
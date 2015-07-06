function Lamp(order)
{
	var self = this;
	self.next;
	self.order = order;
	self.isOn = false;

	self.init = function(order)
	{
		if (order > 1)
		{
			self.next = new Lamp(order - 1);
		}
		var lam = $("<div>");
		lam.addClass("uit");
		lam.attr("id", order);
		lam.html(order);
		$("#counter").append(lam);
	}

	self.switch = function()
	{
		if (self.isOn)
		{
			self.isOn = false;
			if (self.next != undefined)
			{
				self.next.switch();
			}
		}
		else
		{
			self.isOn = true;
		}
		self.draw();
	}

	self.draw = function()
	{
		var lam = $("#"+order);
		if (self.isOn)
		{
			lam.removeClass("uit");
			lam.addClass("aan");
		}
		else
		{
			lam.removeClass("aan");
			lam.addClass("uit");
		}
	}

	self.clear = function()
	{
		self.isOn = false;
		if (self.next != undefined)
		{
			self.next.clear();
		}
		self.draw();
	}

	self.init(order);
}
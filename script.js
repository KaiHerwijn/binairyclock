counter = new Counter();

$(document).on(
	"click",
	"#clear",
	function(){
		counter.clear();
	}
);
$(document).on("click", "#step", function(){counter.step();});
counter = new Counter();
var myvar;
$(document).on("click","#clear",function(){counter.clear();});
$(document).on("click", "#step", function(){counter.step();});
$(document).on("click", "#walk", function(){myvar = setInterval(function(){counter.step()},1000);});
$(document).on("click", "#stop", function(){clearInterval(myvar);});
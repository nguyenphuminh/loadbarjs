function loadbar(obj){
	var a = document.querySelector("body");
	a.innerHTML = "<div class='processjs'></div>" + a.innerHTML;
	var b = document.querySelector(".processjs");
	if (obj.position == undefined){
		obj.position = "absolute";
	}
	if (obj.size == undefined){
		obj.size = "5px";
	}
	b.style.position = obj.position;
	b.style.left = "0";
	b.style.top = "0";
	b.style.height = obj.size;
	if (obj.color == undefined){
		obj.color = "red";
	}
	b.style.backgroundColor = obj.color;
	if (obj.speed == undefined){
		obj.speed = 3;
	}
	var c=0;
	var count = setInterval(function(){
		c++;
		b.style.width = c + "%";
		if (c==101){
			clearInterval(count);
			b.outerHTML = "";
		}
	},obj.speed);
}
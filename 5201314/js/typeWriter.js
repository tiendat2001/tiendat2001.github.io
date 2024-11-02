
let i = 0;
let text1 = "Helluu thế là t vs m cũng quen nhau đc gần 4 năm r nhỉ.";
let text2 = "Cùng xem lại kỷ niệm nhaa."
let speed = 1; // dang chinh

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 500 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
	}, 100);  // chỉnh lại 100 khi chạy
//};

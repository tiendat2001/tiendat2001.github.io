// nút trái tim
var btn = document.getElementById("heartTxt");
var img = document.getElementById('img');
btn.style.opacity = 0;
var btnVal = 0;

function showImage(){
	img.style.opacity = 1;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	//document.getElementById("imgTxt").style.opacity = 1 - flag;
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

// khi bấm click trái tim
function play(){
	
	// if(t == 0){
	// 	myImage.setAttribute("src", "");x
	// 	myTxt.innerHTML = "";
	// 	imageIndex = 0;
	// 	clearInterval(showImageInterval);
	// }
	// flag = 1 - flag;
	// document.getElementById("typeDiv").style.opacity = flag;
	// document.getElementById("imgTxt").style.opacity = 1 - flag;
	// if(t == 0){
	// 	//setTimeout(showImage, 1000);
	// 	// chuyển ảnh
	// 	setInterval(showImage, 2500);
	// }
	// t++;

	//-----------
	// if (t == 0) {
    //     myImage.setAttribute("src", "");
    //     myTxt.innerHTML = "";
    //     imageIndex = 0;
    // }

    // flag = 1 - flag;
    // document.getElementById("typeDiv").style.opacity = flag;
    // document.getElementById("imgTxt").style.opacity = 1 - flag;

	var audio = document.getElementById("myAudio");
	audio.play();
    // Gọi showImage mỗi khi nhấn nút, thay vì sử dụng setInterval
	document.getElementById("typeDiv").style.opacity = 0;
    showImage();

    // t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function event(){

	showImageInterval = setInterval(preshowImage, 100);

	imgInterval = setInterval(function (){
		if(ok == 3){
			setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
			clearInterval(imgInterval);
		}
	}, 50);
}

var showImageInterval;
var imgInterval;
var buttonInterval;


// 1 time mới hiện nút tim
imgInterval = setInterval(function (){
	if(ok == 3){
		setTimeout(function(){buttonInterval = setInterval(buttonFadeIn, 50);}, 1500);
		clearInterval(imgInterval);
	
	}
}, 50);

// event();

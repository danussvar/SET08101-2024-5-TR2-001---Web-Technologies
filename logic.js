const heartOne = document.getElementById("heart-1");
const heartTwo = document.getElementById("heart-2");
const heartThree = document.getElementById("heart-3");
const correctBtn = document.getElementById("correct-btn");
const wrongBtn = document.getElementById("wrong-btn");
const soundOn = document.getElementById("sound-on");
const soundOff = document.getElementById("sound-off");
const music = document.getElementById("bg-music");

let lives = 3;
if(sessionStorage.getItem("lives") !=null){
	lives = parseInt(sessionStorage.getItem("lives"));
}
else{
	lives = 3;
	sessionStorage.setItem("lives",3);
	
	
}

visualHeart();

function visualHeart(){
	
	if(lives === 2){
		heartThree.style.color = 'grey';
	}
	else if(lives === 1){
		heartThree.style.color = 'grey';
		heartTwo.style.color = 'grey';
	}
	else if(lives === 0){
		heartThree.style.color= 'grey';
		heartTwo.style.color= 'grey';
		heartOne.style.color = 'grey';
	}
}

function changeColour(event){
	
	if(lives > 0){
		lives--;
		sessionStorage.setItem("lives",lives);
		visualHeart();
	
	  if(lives === 0){
	setTimeout(function(){ 
	alert("You lost all your lives, time to restart");
      sessionStorage.setItem("lives", 3);
      window.location.href = "stage1.html";
	},100)
		
	}
	}
		
	}


function correctAns (event){
	alert("You have won the game!, good job")
}

music.muted = true;

function toggleMusic(){
	if(music.muted === true){
		music.muted = false;
		music.play();

		soundOn.style.display = "inline";
		soundOff.style.display = "none";
		
	}
	else{
		music.muted = true;
		soundOn.style.display = "none";
		soundOff.style.display = "inline";
		
		
	}
}



wrongBtn.addEventListener("click", changeColour);


correctBtn.addEventListener("click", correctAns);

soundOn.addEventListener("click", toggleMusic);
soundOff.addEventListener("click", toggleMusic);

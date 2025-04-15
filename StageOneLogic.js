const heartOne = document.getElementById("heart-1");
const heartTwo = document.getElementById("heart-2");
const heartThree = document.getElementById("heart-3");
const correctBtn = document.getElementById("correct-btn");
const wrongBtn = document.getElementById("wrong-btn");


let lives = 3;
if(localStorage.getItem("lives") !=null){
	lives = parseInt(localStorage.getItem("lives"));
}
else{
	lives = 3;
	localStorage.setItem("lives",3);
	
	
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
		localStorage.setItem("lives",lives);
		visualHeart();
	
	  if(lives === 0){
	setTimeout(function(){ 
	alert("You lost all your lives, time to restart");
      localStorage.setItem("lives", 3);
      window.location.href = "stage1.html";
	},100)
		
	}
	}
		
	}


function correctAns (event){
	window.location.href = "functional.html";
}

wrongBtn.addEventListener("click", changeColour);


correctBtn.addEventListener("click", correctAns);
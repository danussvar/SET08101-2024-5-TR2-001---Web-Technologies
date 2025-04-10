const heartOne = document.getElementById("heart-1");
const heartTwo = document.getElementById("heart-2");
const heartThree = document.getElementById("heart-3");
const correctBtn = document.getElementById("correct-btn");
const wrongBtn = document.getElementById("wrong-btn");


let lives = 3;

function changeColour(event){
	if(lives > 0){
		lives--;
		if(lives == 2){
			heartThree.style.color = "gray";
		}
		if(lives ==1){
			heartTwo.style.color ="gray";
		}
		if(lives ==0){
			heartOne.style.color ="gray";
		}
	}
}

function correctAns (event){
	alert("You have got the correct answer, you can proceed to the next stage");
}

wrongBtn.addEventListener("click", changeColour);


correctBtn.addEventListener("click", correctAns);
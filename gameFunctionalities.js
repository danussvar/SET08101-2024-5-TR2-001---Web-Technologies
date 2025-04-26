

function initialiseLives(){
	
	let lives = parseInt(sessionStorage.getItem("lives")) || 3;
	updateHearts(lives);
	return lives;
	
}

function updateHearts(lives){
	
	const hearts = [
		document.getElementById("heart-1"),
		document.getElementById("heart-2"),
		document.getElementById("heart-3")
	
	];
	
	for(let i = 0; i < hearts.length; i++){
		if(i < lives){
			hearts[i].style.color = "red";
		}
		else{
			hearts[i].style.color = "grey";
		}
		
	}
	
	
	
}


function loseLife(redirectOnDeath){
	let lives = parseInt(sessionStorage.getItem("lives")) || 3;
	
	if(lives > 0){
		lives--;
	}
	
	sessionStorage.setItem("lives",lives);
	updateHearts(lives);
	
	 if (lives === 0) {
        setTimeout(function () {
            alert("You lost all your lives, restarting...");
            sessionStorage.setItem("lives", 3);
            window.location.href = redirectOnDeath;
        }, 100);
    }
	
	

	
}

function setupMusicToggle() {
    const music = document.getElementById("bg-music");
    const soundOn = document.getElementById("sound-on");
    const soundOff = document.getElementById("sound-off");

    music.muted = true;

    function toggleMusic() {
        if (music.muted) {
            music.muted = false;
            music.play();
            soundOn.style.display = "inline";
            soundOff.style.display = "none";
        } else {
            music.muted = true;
            music.pause();
            soundOn.style.display = "none";
            soundOff.style.display = "inline";
        }
    }

    soundOn.addEventListener("click", toggleMusic);
    soundOff.addEventListener("click", toggleMusic);
}


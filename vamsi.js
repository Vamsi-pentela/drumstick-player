var documentSounds = document.querySelectorAll(".drum").length;

function myFunction() {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;

        default: 
            console.log(buttonInnerHTML);
    }
}

for (var i = 0; i < documentSounds; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", myFunction);
}

function myFunctionKey(event) {
    var buttonInnerHTML = event.key;

    switch (buttonInnerHTML) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;

        default: 
            console.log(buttonInnerHTML);
    }
}

for (var i = 0; i < documentSounds; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keypress", myFunctionKey);
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


//it's a comment
var noOfButton = document.querySelectorAll(".drum").length;

for (var i=0; i<noOfButton; i++){
  document.querySelectorAll("button")[i].addEventListener("click",function (){
        let whichOne = this.innerHTML;
        console.log(whichOne);
        var audio = new Audio("sounds/tom-"+whichOne+".mp3");
        audio.play();
        buttonAnimation(whichOne);
  });
}


document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
      case "w":
      var audio = new Audio("sounds/tom-w.mp3");
      audio.play();
        break;
      case "a":
      var audio = new Audio("sounds/tom-a.mp3");
      audio.play();
      break;
        case "d":
        var audio = new Audio("sounds/tom-d.mp3");
        audio.play();
          break;
          case "j":
          var audio = new Audio("sounds/tom-j.mp3");
          audio.play();
            break;
            case "l":
            var audio = new Audio("sounds/tom-l.mp3");
            audio.play();
              break;
              case "k":
              var audio = new Audio("sounds/crash.mp3");
              audio.play();
                break;
    }
};

function buttonAnimation(currentKey){
    var keyPressed = document.querySelector("."+currentKey);
    keyPressed.classList.add("pressed");

    setTimeout(function(){
      keyPressed.classList.remove("pressed");
    },100);

}

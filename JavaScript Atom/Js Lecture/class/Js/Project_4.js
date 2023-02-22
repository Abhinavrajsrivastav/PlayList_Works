consol.log("welcome to spotify");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('Sun Maahi(PagalWorld.com.se).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
  {songName: "Sun Maahi", filePath: "musics-4/Sun Maahi(PagalWorld.com.se).mp3",coverPath: "covers/1.jpg"},
  {songName: "Sun Maahi", filePath: "musics-4/Sun Maahi(PagalWorld.com.se).mp3",coverPath: "covers/1.jpg"},
  {songName: "Sun Maahi", filePath: "musics-4/Sun Maahi(PagalWorld.com.se).mp3",coverPath: "covers/1.jpg"},
  {songName: "Sun Maahi", filePath: "musics-4/Sun Maahi(PagalWorld.com.se).mp3",coverPath: "covers/1.jpg"},
]

let audioElement = new Audio('Sun Maahi(PagalWorld.com.se).mp3');

// audio Element.play('')
//handle play/pause click
masterPlay.addEventListener('click',()=>{
  if(audioElement.pause || audioElement.currentTime<=0){
    audioElement.play();
  }
})
//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
  console;log('timeupdate');

})

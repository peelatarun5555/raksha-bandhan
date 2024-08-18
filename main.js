// Audio Section
var myAudio = document.getElementById("myAudio");
var myAudioEng = document.getElementById("myAudioEng");
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    myAudio.pause();
  } else {
    myAudio.play();
  }
  isPlaying = !isPlaying;
};

function togglePlayEng() {
  if (isPlaying) {
    myAudioEng.pause();
  } else {
    myAudioEng.play();
  }
  isPlaying = !isPlaying;
};

myAudio.addEventListener("play", function() {
  isPlaying = true;
});

myAudio.addEventListener("pause", function() {
  isPlaying = false;
});

myAudioEng.addEventListener("play", function() {
  isPlaying = true;
});

myAudioEng.addEventListener("pause", function() {
  isPlaying = false;
});

$('.sound div').click(function(){
  $(this).find('i').toggleClass('fa-music fa-pause');
  if ($(this).hasClass('hindi')) {
    togglePlay();
  } else {
    togglePlayEng();
  }
});

window.onload = function(){

var myAudio = document.getElementById('my-audio');

  myAudio.addEventListener('progress', function() {
    var duration =  myAudio.duration;
    if (duration > 0) {
      for (var i = 0; i < myAudio.buffered.length; i++) {
            if (myAudio.buffered.start(myAudio.buffered.length - 1 - i) < myAudio.currentTime) {
                document.getElementById("buffered-amount").style.width = (myAudio.buffered.end(myAudio.buffered.length - 1 - i) / duration) * 100 + "%";
                break;
            }
        }
    }
  });

  myAudio.addEventListener('timeupdate', function() {
    var duration =  myAudio.duration;
    if (duration > 0) {
      document.getElementById('progress-amount').style.width = ((myAudio.currentTime / duration)*100) + "%";
    }
  });
}
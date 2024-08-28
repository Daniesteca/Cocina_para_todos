// Variable global para almacenar el reproductor de video actual
var currentPlayer;

document.getElementById('button1').addEventListener('click', function() {
  openVideo('KmRyNQcf-0A');
});

document.getElementById('button2').addEventListener('click', function() {
  openVideo('7F9JS35dhN8');
});

document.getElementById('button3').addEventListener('click', function() {
  openVideo('ZaDvh8Ph14A');
});

document.getElementById('button4').addEventListener('click', function() {
  openVideo('uFGFtLB7hWw');
});

function openVideo(videoId) {
  // Detener y destruir el reproductor actual, si existe
  if (currentPlayer) {
    currentPlayer.stopVideo();
    currentPlayer.destroy();
  }

  document.getElementById('modal').style.display = 'block';
  currentPlayer = new YT.Player('videoPlayer', {
    height: '315',
    width: '560',
    videoId: videoId,
    events: {
      'onReady': function(event) {
        event.target.playVideo();
      }
    }
  });

  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    currentPlayer.stopVideo();
    document.getElementById('modal').style.display = 'none';
  });
}

// Cargar el script de la API de YouTube
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

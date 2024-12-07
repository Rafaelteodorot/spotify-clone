window.addEventListener('load', function() {
  const audioPlayer = document.querySelector('audio');

  const playAndPauseButton = document.querySelector('#player-play-and-pause-button');
  const mutedButton = document.querySelector('#player-muted-button')

  const volumeSeek = document.querySelector('#player-volume-seek');

  const volumeMutedIcon = document.querySelector('#player-muted-icon');
  const volumeLowIcon = document.querySelector('#player-low-icon');
  const volumeMediumIcon = document.querySelector('#player-medium-icon');
  const volumeHighIcon = document.querySelector('#player-high-icon');

  // const playIcon = document.querySelector('#player-play-icon');
  // const pauseIcon = document.querySelector('#player-pause-icon');
  const playIcon = `
    <svg id="player-play-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
      <path
        d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z">
      </path>
    </svg>
  `;
  const pauseIcon = `
    <svg id="player-pause-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
      <path 
        d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z">
      </path>
    </svg>
    `;

  function handleVolume() {
    if (audioPlayer.volume <= 0.3) {
      volumeMutedIcon.classList.add('none');
      volumeLowIcon.classList.remove('none');
      volumeMediumIcon.classList.add('none');
      volumeHighIcon.classList.add('none');
    } else if (audioPlayer.volume > 0.3 && audioPlayer.volume < 0.7) {
      volumeMutedIcon.classList.add('none');
      volumeLowIcon.classList.add('none');
      volumeMediumIcon.classList.remove('none');
      volumeHighIcon.classList.add('none');
    } else {
      volumeMutedIcon.classList.add('none');
      volumeLowIcon.classList.add('none');
      volumeMediumIcon.classList.add('none');
      volumeHighIcon.classList.remove('none');
    }
  }  

  playAndPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) { 
      audioPlayer.play();
      playAndPauseButton.innerHTML = pauseIcon;
      // playIcon.classList.add('none');
      // pauseIcon.classList.remove('none');
    } else {
      audioPlayer.pause();
      playAndPauseButton.innerHTML = playIcon;
      // playIcon.classList.remove('none');
      // pauseIcon.classList.add('none');
    }
  });

  audioPlayer.addEventListener('volumechange', function () {
    if (audioPlayer.muted) {
      return;
    }
    
    handleVolume();
  });

  volumeSeek.addEventListener('change', function (event) {
    if (audioPlayer.muted) {
      audioPlayer.muted = false;
    }

    audioPlayer.volume = event.target.value;
  });

  mutedButton.addEventListener('click', function() {
    if (audioPlayer.muted) {
      audioPlayer.muted = false;
      handleVolume();
    } else {
      volumeMutedIcon.classList.remove('none');
      volumeLowIcon.classList.add('none');
      volumeMediumIcon.classList.add('none');
      volumeHighIcon.classList.add('none');
      audioPlayer.muted = true;
    };
  });
}); 
window.addEventListener('load', function() {
  const songs = [
    'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3', // 0
    'https://cdn.pixabay.com/audio/2024/12/09/audio_5c5be993bd.mp3', // 1
    'https://cdn.pixabay.com/audio/2024/12/02/audio_4255c48290.mp3', // 2 
    'https://cdn.pixabay.com/audio/2024/11/29/audio_45bbd49c34.mp3', // 3
    'https://cdn.pixabay.com/audio/2024/11/10/audio_593e8523e6.mp3', // 4
  ];
  let currentSong = 0;
  let repeaterMode = 'off'; // off | playlist | song

  // Selecionando o elemento <audio>
  const audioPlayer = document.querySelector('audio');
  let seeking = false;  // Variável para controlar quando o usuário está alterando o tempo da música
  audioPlayer.volume = 0.1;  // Inicializando o volume do áudio em 10%
  let durationMode = 'total'; // Mostra a duração total ou rest do tempo da música

  // Seleção dos botões e elementos de controle
  const playAndPauseButton = document.querySelector('#player-play-and-pause-button');  // Botão de play/pause
  const backwardButton = document.querySelector('#player-backward-button'); // Botão de voltar para a música anterior
  const farwardButton = document.querySelector('#player-farward-button'); // Botão de próxima música
  const repeaterButton = document.querySelector('#player-repeater-button'); // Botão de repetir a música
  const mutedButton = document.querySelector('#player-muted-button');  // Botão de mudo
  const durationButton = document.querySelector('#player-duration');  // Elemento para exibir a duração total
  const timeIndicatorSeek = document.querySelector('#player-time-indicator-seek');  // Indicador de tempo atual
  const timeSeek = document.querySelector('#player-time-seek');  // Barra de progresso de tempo
  const currentTimeSeek = document.querySelector('#player-current-time');  // Elemento que exibe o tempo atual

  const volumeSeek = document.querySelector('#player-volume-seek');  // Barra de controle de volume
  const volumeIndicatorSeek = document.querySelector('#player-volume-indicator-seek');  // Indicador de volume

  // Ícones de volume
  const volumeMutedIcon = document.querySelector('#player-muted-icon');
  const volumeLowIcon = document.querySelector('#player-low-icon');
  const volumeMediumIcon = document.querySelector('#player-medium-icon');
  const volumeHighIcon = document.querySelector('#player-high-icon');

  // Ícones de play e pause
  const playIcon = `
    <svg id="player-play-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
      <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
    </svg>
  `;
  const pauseIcon = `
    <svg id="player-pause-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
      <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg>
  `;

  const repeaterIcon = `
  <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
    <path
      d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z">
    </path>
  </svg>
`;
const repeaterSongIcon = `
  <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h.75v1.5h-.75A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5ZM12.25 2.5a2.25 2.25 0 0 1 2.25 2.25v5A2.25 2.25 0 0 1 12.25 12H9.81l1.018-1.018a.75.75 0 0 0-1.06-1.06L6.939 12.75l2.829 2.828a.75.75 0 1 0 1.06-1.06L9.811 13.5h2.439A3.75 3.75 0 0 0 16 9.75v-5A3.75 3.75 0 0 0 12.25 1h-.75v1.5h.75Z"></path>
    <path d="m8 1.85.77.694H6.095V1.488c.697-.051 1.2-.18 1.507-.385.316-.205.51-.51.583-.913h1.32V8H8V1.85Z"></path><path d="M8.77 2.544 8 1.85v.693h.77Z"></path>
  </svg>
`;

  function handleDuarationLabel() {
    const audioDurationInMinutes = Math.floor(audioPlayer.duration / 60); // Calcula minutos
    const audioDurationInSeconds = Math.floor(audioPlayer.duration % 60); // Calcula segundos

    const durationLabel = `${audioDurationInMinutes}:${audioDurationInSeconds.toString().padStart(2, '0')}`;
    durationButton.innerHTML = durationLabel;  // Exibe a duração total no formato mm:ss
    timeSeek.max = Math.floor(audioPlayer.duration).toString();  // Define o valor máximo da barra de progresso
  };

  function handleNextSong() {
    let nextSongIndex = currentSong + 1;

    if (randomizeMode === 'on') {
      nextSongIndex = handleNextSongRandomized();
    }

    currentSong = nextSongIndex;
    let nextSong = songs[currentSong];

    if (!nextSong && repeaterMode === 'off') {
      currentSong = songs.length - 1;
      audioPlayer.currentTime = 0;
      return;
    }

    if (!nextSong) {
      currentSong = 0;
      nextSong = songs[0];
    }

    audioPlayer.src = nextSong;
    audioPlayer.play();
  };

  // Função para controlar os ícones de volume com base no nível de volume
  function handleVolume() {
    if (audioPlayer.volume === 0) {
      volumeMutedIcon.classList.remove('none');
      volumeLowIcon.classList.add('none');
      volumeMediumIcon.classList.add('none');
      volumeHighIcon.classList.add('none');
    } else if (audioPlayer.volume <= 0.3) {
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

  // Evento para trocar o durationMode
  durationButton.addEventListener('click', function() {
    if (durationMode === 'total') {
      durationMode = 'rest';
    } else {
      durationMode = 'total';
    }
  });

  // Evento de voltar para a música anterior
  backwardButton.addEventListener('click', function() {
    currentSong = currentSong - 1;
    let previousSong = songs[currentSong];

    if (!previousSong && repeaterMode === 'off') {
      currentSong = 0;
      audioPlayer.currentTime = 0;
      return;
    };

    if (!previousSong) {
      currentSong = songs.length - 1;
      previousSong = songs[currentSong];
    };

    audioPlayer.src = previousSong;
    audioPlayer.play();
  })

  // Evento de passar a próxima música
  farwardButton.addEventListener('click', handleNextSong);

  // Evento de repetir a música
  repeaterButton.addEventListener('click', function() {
    if (repeaterMode === 'off') {
      repeaterMode = 'playlist';
      repeaterButton.classList.add('active', 'playlist');
      repeaterButton.innerHTML = repeaterIcon;
    } else if (repeaterMode === 'playlist') {
      repeaterMode = 'song';
      repeaterButton.classList.add('active', 'playlist');
      repeaterButton.innerHTML = repeaterSongIcon;
    } else {
      repeaterMode = 'off';
      repeaterButton.classList.remove('active');
      repeaterButton.classList.remove('playlist');
      repeaterButton.innerHTML = repeaterIcon;
    };
  });

  // Evento para play/pause ao clicar no botão de controle
  playAndPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
      audioPlayer.play();  // Começa a tocar a música
      playAndPauseButton.innerHTML = pauseIcon;  // Muda o ícone para pause
    } else {
      audioPlayer.pause();  // Pausa a música
      playAndPauseButton.innerHTML = playIcon;  // Muda o ícone para play
    };
  });

  // Evento de quando a música acaba
  audioPlayer.addEventListener('ended', handleNextSong);

  // Evento para detectar mudanças no volume
  audioPlayer.addEventListener('volumechange', function () {
    if (audioPlayer.muted) {
      return;  // Se estiver mudo, não faz nada
    };
    handleVolume();  // Atualiza os ícones de volume
  });

  // Evento que dispara quando a duração do áudio é carregada
  audioPlayer.addEventListener('loadedmetadata', handleDuarationLabel);

  // Evento para atualizar o tempo da música enquanto está tocando
  audioPlayer.addEventListener('timeupdate', function() {
    if (seeking) {
      return;  // Se o usuário estiver buscando um novo tempo, não faz nada
    };

    const timeIndicator = audioPlayer.currentTime / audioPlayer.duration;  // Calcula a posição atual na música
    const currentTimeInMinutes = Math.floor(audioPlayer.currentTime / 60);  // Converte o tempo atual para minutos
    const currentTimeInSeconds = Math.floor(audioPlayer.currentTime % 60);  // Converte o tempo atual para segundos

    const currentTimeLabel = `${currentTimeInMinutes}:${currentTimeInSeconds.toString().padStart(2, '0')}`;
    currentTimeSeek.innerHTML = currentTimeLabel;  // Exibe o tempo atual na tela
    
    timeSeek.value = Math.floor(audioPlayer.currentTime).toString();  // Atualiza a barra de progresso
    timeIndicatorSeek.style.width = `${timeIndicator * 100}%`;  // Atualiza a barra de progresso visual

    if (durationMode === 'rest') {
      const totalRestInSeconds = audioPlayer.duration - audioPlayer.currentTime;
      const restInMinutes = Math.floor(totalRestInSeconds / 60);
      const restInSecondes = Math.floor(totalRestInSeconds % 60);
      
      const durationLabel = `-${restInMinutes}:${restInSecondes.toString().padStart(2, '0')}`;
      durationButton.innerHTML = durationLabel;
    } else {
      handleDuarationLabel();
    };
  });

  // Evento para controlar o volume com a barra de volume
  volumeSeek.addEventListener('input', function (event) {
    if (audioPlayer.muted) {
      audioPlayer.muted = false;  // Desmuta o áudio se estiver mudo
    };

    const indicatorWidth = Math.floor(event.target.value * 100);  // Calcula a largura do indicador de volume
    volumeIndicatorSeek.style.width = `${indicatorWidth}%`;  // Atualiza a largura do indicador de volume
    audioPlayer.volume = event.target.value;  // Define o novo volume do áudio
  });

  // Evento para alterar o tempo da música com a barra de progresso
  timeSeek.addEventListener('input', function(event) {
    seeking = true;  // Marca que o usuário está buscando um novo tempo

    const currentTimeInMinutes = Math.floor(event.target.value / 60);  // Converte o tempo para minutos
    const currentTimeInSeconds = Math.floor(event.target.value % 60);  // Converte o tempo para segundos

    const currentTimeLabel = `${currentTimeInMinutes}:${currentTimeInSeconds.toString().padStart(2, '0')}`;
    currentTimeSeek.innerHTML = currentTimeLabel;  // Atualiza o tempo exibido na tela

    const timeIndicator = event.target.value / Math.floor(audioPlayer.duration);  // Calcula a posição da barra
    timeIndicatorSeek.style.width = `${timeIndicator * 100}%`;  // Atualiza a largura da barra de progresso
  });

  // Evento para alterar o tempo da música quando o usuário termina de buscar um novo tempo
  timeSeek.addEventListener('change', function(event) {
    seeking = false;  // Marca que o usuário não está mais buscando
    audioPlayer.currentTime = event.target.value;  // Define o novo tempo na música
  });

  // Evento para alternar o mudo
  mutedButton.addEventListener('click', function() {
    if (audioPlayer.muted) {
      audioPlayer.muted = false;  // Desmuta a música
      handleVolume();  // Atualiza os ícones de volume
    } else {
      volumeMutedIcon.classList.remove('none');  // Exibe o ícone de mudo
      volumeLowIcon.classList.add('none');  // Esconde os outros ícones de volume
      volumeMediumIcon.classList.add('none');
      volumeHighIcon.classList.add('none');
      audioPlayer.muted = true;  // Ativa o mudo
    };
  });

  // Carrega o áudio se ele ainda não estiver carregado
  if (audioPlayer) {
    audioPlayer.load();
  };
});

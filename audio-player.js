window.addEventListener('load', function() {
  // Selecionando o elemento <audio>
  const audioPlayer = document.querySelector('audio');
  let seeking = false;  // Variável para controlar quando o usuário está alterando o tempo da música
  audioPlayer.volume = 0.1;  // Inicializando o volume do áudio em 10%

  // Seleção dos botões e elementos de controle
  const playAndPauseButton = document.querySelector('#player-play-and-pause-button');  // Botão de play/pause
  const mutedButton = document.querySelector('#player-muted-button');  // Botão de mudo
  const duration = document.querySelector('#player-duration');  // Elemento para exibir a duração total
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

  // Evento para play/pause ao clicar no botão de controle
  playAndPauseButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
      audioPlayer.play();  // Começa a tocar a música
      playAndPauseButton.innerHTML = pauseIcon;  // Muda o ícone para pause
    } else {
      audioPlayer.pause();  // Pausa a música
      playAndPauseButton.innerHTML = playIcon;  // Muda o ícone para play
    }
  });

  // Evento para detectar mudanças no volume
  audioPlayer.addEventListener('volumechange', function () {
    if (audioPlayer.muted) {
      return;  // Se estiver mudo, não faz nada
    }
    handleVolume();  // Atualiza os ícones de volume
  });

  // Evento que dispara quando a duração do áudio é carregada
  audioPlayer.addEventListener('loadedmetadata', function() {
    const audioDurationInMinutes = Math.floor(audioPlayer.duration / 60); // Calcula minutos
    const audioDurationInSeconds = Math.floor(audioPlayer.duration % 60); // Calcula segundos

    const durationLabel = `${audioDurationInMinutes}:${audioDurationInSeconds.toString().padStart(2, '0')}`;
    duration.innerHTML = durationLabel;  // Exibe a duração total no formato mm:ss
    timeSeek.max = Math.floor(audioPlayer.duration).toString();  // Define o valor máximo da barra de progresso
  });

  // Evento para atualizar o tempo da música enquanto está tocando
  audioPlayer.addEventListener('timeupdate', function() {
    if (seeking) {
      return;  // Se o usuário estiver buscando um novo tempo, não faz nada
    }

    const timeIndicator = audioPlayer.currentTime / audioPlayer.duration;  // Calcula a posição atual na música
    const currentTimeInMinutes = Math.floor(audioPlayer.currentTime / 60);  // Converte o tempo atual para minutos
    const currentTimeInSeconds = Math.floor(audioPlayer.currentTime % 60);  // Converte o tempo atual para segundos

    const currentTimeLabel = `${currentTimeInMinutes}:${currentTimeInSeconds.toString().padStart(2, '0')}`;
    timeSeek.value = Math.floor(audioPlayer.currentTime).toString();  // Atualiza a barra de progresso
    currentTimeSeek.innerHTML = currentTimeLabel;  // Exibe o tempo atual na tela
    timeIndicatorSeek.style.width = `${timeIndicator * 100}%`;  // Atualiza a barra de progresso visual
  });

  // Evento para controlar o volume com a barra de volume
  volumeSeek.addEventListener('input', function (event) {
    if (audioPlayer.muted) {
      audioPlayer.muted = false;  // Desmuta o áudio se estiver mudo
    }

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
    }
  });

  // Carrega o áudio se ele ainda não estiver carregado
  if (audioPlayer) {
    audioPlayer.load();
  }
});

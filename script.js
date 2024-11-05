window.addEventListener('load', function() {
  // Seleciona o botão que fica do lado esquerdo inferior da tela, para ocultar/exibir informações da banda
  const infoBandButton = document.querySelector('footer .player-info > .container-info > .container-image > button.icon-button');
  // Seleciona a barra lateral direita (Painel que exibe as informações da banda)
  const rightSidebar  = document.querySelector('main > div.right-sidebar');

  const buttonSidebarClose = document.querySelector('#button-sidebar-close');

  // Seleciona todos os botões/div que tem a classe "follow"
  const followButtons = document.querySelectorAll('body button.follow, body div.button.follow');
  
  // Seleciona o botão "sobre o artista"
  const aboutArtistButton = document.querySelector('#about-artist-button');
  // Seleciona o botão que fecha a modal "sobre o artista"
  const aboutArtistModalCloseButton = document.querySelector('#about-artist-modal-close-button');

  aboutArtistButton.addEventListener('click', function() {
    const modal = document.querySelector('#about-artist-modal');

    modal.style.display = 'flex';
  });

  aboutArtistModalCloseButton.addEventListener('click', function() {
    const modal = document.querySelector('#about-artist-modal');

    modal.style.display = 'none';
  });

  // Adiciona um evento que o usuário ao clicar no botão
  infoBandButton.addEventListener('click', function() {
    // Verifica se contém a a classe 'none'
    if (rightSidebar.classList.contains('none')) {
      rightSidebar.classList.remove('none');
      infoBandButton.classList.remove('rotate-180deg');
    } else {
      rightSidebar.classList.add('none');
      infoBandButton.classList.add('rotate-180deg');
    }
  });

  buttonSidebarClose.addEventListener('click', function() {
    const rightSidebar = document.querySelector('#right-sidebar');

    rightSidebar.classList.add('none');
})

  // Percorre todos os botões do array (lista)
  followButtons.forEach(function (button) {
     // Adiciona o evento que o usuário ao clicar no botão de follow/unfollow
    button.addEventListener('click', () => {

      // Verifica se o texto que está dentro do HTML do botão tem a string 'Seguir'
      if (button.textContent === 'Seguir') {
        // Altera o texto do botão para 'Deixar de seguir'
        button.textContent = 'Deixar de seguir';
      } else {
        // Altera o texto do botão para 'Seguir'
        button.textContent = 'Seguir';
      }
    });
  });
});
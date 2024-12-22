window.addEventListener('load', function() {
  const buttonModalRightSidebar = document.querySelector('#button-modal-right-sidebar');
  const modalRightSidebar = document.querySelector('#modal-right-sidebar');
  let isModalRightSidebar = false;

  buttonModalRightSidebar.addEventListener('click', function() {
    // Se a modal já está aberta, vamos fechá-la
    if (isModalRightSidebar) {
      modalRightSidebar.classList.add('none');  // Esconde a modal
      isModalRightSidebar = false;
      return; // Sai da função para evitar que o código abaixo seja executado
    }

    const topOffset = buttonModalRightSidebar.getBoundingClientRect().top; // Distância do topo
    const leftOffset = buttonModalRightSidebar.getBoundingClientRect().left; // Distância da esquerda
    const buttonHeight = buttonModalRightSidebar.getBoundingClientRect().height; // Altura do botão
    const buttonWidth = buttonModalRightSidebar.getBoundingClientRect().width; // Largura do botão


    modalRightSidebar.classList.remove('none');  // Remove a classe 'none' para mostrar a modal

    const modalDropdownActually = document.querySelector('#modal-right-sidebar');
    const modalWidth = modalDropdownActually.getBoundingClientRect().width;

    modalRightSidebar.style.top = `${topOffset + buttonHeight}px`;  // Coloca a modal abaixo do botão
    modalRightSidebar.style.left = `${leftOffset - modalWidth + buttonWidth}px`; // Posiciona a modal ao lado esquedo do botão


    isModalRightSidebar = true;
  });

  // Fechar a modal ao clicar fora dela
  window.addEventListener('click', function(event) {
    const element = event.target;

    // Verifica se o clique foi fora da modal e do botão
    if (isModalRightSidebar && !modalRightSidebar.contains(element) && !buttonModalRightSidebar.contains(element)) {
      modalRightSidebar.classList.add('none');  // Esconde a modal
      isModalRightSidebar = false;
    }
  });
});
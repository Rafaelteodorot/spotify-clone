window.addEventListener('load', function() {
  const buttonModalDropdown = document.querySelector('#button-modal-dropdown');
  const modalDropdown = document.querySelector('#modal-dropdown');
  let isModalDropdown = false;

  buttonModalDropdown.addEventListener('click', function() {
    if (isModalDropdown) {
      modalDropdown.style.display = 'none';
      isModalDropdown = false;
      return;
    }

    const topOffset = buttonModalDropdown.getBoundingClientRect().y;
    const leftOffset = buttonModalDropdown.getBoundingClientRect().x; // Exemplo: 20 
    const buttonHeight = buttonModalDropdown.getBoundingClientRect().height;
    const buttonWidth = buttonModalDropdown.getBoundingClientRect().width;

    modalDropdown.style.display = 'flex';

    const modalDropdownActually = document.querySelector('#modal-dropdown');
    const modalWidth = modalDropdownActually.getBoundingClientRect().width;

    modalDropdown.style.top = `${topOffset + (buttonHeight - 8)}px`;
    modalDropdown.style.left = `${leftOffset - modalWidth + buttonWidth}px`; // 20px
    isModalDropdown = true;
  });

  window.addEventListener('click', function(event) {
     const element = event.target;

     if (!modalDropdown.contains(element) && !buttonModalDropdown.contains(element) && isModalDropdown) {
       modalDropdown.style.display = 'none';
       isModalDropdown = false;
     }
   });
});
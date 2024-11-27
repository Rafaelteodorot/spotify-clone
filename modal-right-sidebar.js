window.addEventListener('load', function() {

  const buttonModalRightSidebar = document.querySelector('#button-modal-right-sidebar');
  
  buttonModalRightSidebar.addEventListener('click', function() {
  
    const modalRightSidebar = document.querySelector('#modal-right-sidebar');
    
    modalRightSidebar.classList.remove('none');
  });
});
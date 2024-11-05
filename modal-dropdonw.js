window.addEventListener('load', function() {

  const buttonModalDropdonw = document.querySelector('#button-modal-dropdonw');
  const modalDropdonw = document.querySelector('#modal-dropdonw');
  let isModalDropdonw = false;
  
  
    buttonModalDropdonw.addEventListener('click', function() {
      if (isModalDropdonw) {
        modalDropdonw.style.display = 'none';
        isModalDropdonw = false;
        return;
      }

      modalDropdonw.style.display = 'flex';
      isModalDropdonw = true;
  })

    window.addEventListener('click', function(event) {
      const element = event.target;

      if (!modalDropdonw.contains(element) && !buttonModalDropdonw.contains(element) && isModalDropdonw) {
      modalDropdonw.style.display = 'none';
      isModalDropdonw = false;
      }
    })
})
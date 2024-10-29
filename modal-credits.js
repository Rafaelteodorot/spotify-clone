window.addEventListener('load', function() {
    const aboutCreditsButton = document.querySelector('#about-credits-button');
    
    const containedModalCretis = document.querySelector('#contained-modal-credits');

    aboutCreditsButton.addEventListener('click', function() {
        const modal = document.querySelector('#modal-credits');

        modal.classList.remove('none');
        
    containedModalCretis.addEventListener('click', function() {
        const button = document.querySelector('#modal-credits')
    
        button.classList.add('none');
    });
    });
});
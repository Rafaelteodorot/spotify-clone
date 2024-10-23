window.addEventListener('load', function() {
    const aboutCreditsButton = document.querySelector('#about-credits-button');

    aboutCreditsButton.addEventListener('click', function() {
        const modal = document.querySelector('#modal-credits');

        modal.classList.remove('none');
    });
});
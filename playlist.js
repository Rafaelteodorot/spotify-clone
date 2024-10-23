window.addEventListener('load', function() {
    const cardPlaylists = document.querySelectorAll('main > div.left-sidebar > div.your-library > div.list > ul.playlists > li.card-playlist');

    const homeButton = document.querySelector('main > div.left-sidebar ul.box > li:first-child');

    homeButton.addEventListener('click', function() {
      const content = document.querySelector('main > div.content-wrapper > div.content');

      const contentPlaylist = document.querySelector('main > div.content-wrapper > div.content-playlist');

      content.classList.remove('none');
      contentPlaylist.classList.add('none');
    })

    cardPlaylists.forEach(function (list) {
        list.addEventListener('click', function() {
            const content = document.querySelector('main > div.content-wrapper > div.content');

            const contentPlaylist = document.querySelector('main > div.content-wrapper > div.content-playlist');

            content.classList.add('none');
            contentPlaylist.classList.remove('none');
        })
    })
});
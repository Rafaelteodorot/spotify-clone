import './global.css';
import './initialize.css';
import './index';


export function ContentWrapper() {
  return (
      <div className="content">
        <header>
          <nav className="flex">
            <button className="icon-button">
              <svg className="sm-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z">
                </path>
              </svg>
            </button>
            <button className="icon-button">
              <svg className="sm-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z">
                </path>
              </svg>
            </button>
          </nav>
          <div className="flex items-center">
            <button className="button-white">Ver planos Premium</button>
            <button className="button-black">
              <svg className="sm-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z">
                </path>
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
              </svg>
              Instalar aplicativo
            </button>
            <button className="icon-button">
              <svg className="sm-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z">
                </path>
              </svg>
            </button>
            <button className="icon-button">
              <span>E</span>
            </button>
          </div>
        </header>

        <div className="sections">
          <section className="flex flex-col">
            <div className="section-title flex justify-space-between items-center">
              <div className="flex flex-col">
                <a href="#" className="font-title link">Feito para Edy Rodrigues</a>
              </div>
              <a href="#" className="link text-gray font-bold">Mostrar tudo</a>
            </div>

            <div className="cards-container">
              <div className="section-card">
                <div>
                  <img
                    src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5c3349ddba6b8e064c1bab16/1/pt/default" />
                </div>
                <span className="description">Avril Lavigne, Deorro, Pitbull e mais</span>
              </div>

              <div className="section-card">
                <div>
                  <img
                    src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb95937743bc43f4408033e7c6/2/pt/default" />
                </div>
                <span className="description">Chemical Surf, Liu, Vegas (Brazil) e mais</span>
              </div>

              <div className="section-card">
                <div>
                  <img
                    src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb95937743bc43f4408033e7c6/3/pt/default" />
                </div>
                <span className="description">Chemical Surf, Liu, Vegas (Brazil) e mais</span>
              </div>

              <div className="section-card">
                <div>
                  <img
                    src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/4/pt/default" />
                </div>
                <span className="description">Eminem, Chris Brown, Wiz Khalifa e mais</span>
              </div>
            </div>
          </section>

          <section className="flex flex-col">
            <div className="section-title flex justify-space-between items-center">
              <div className="flex flex-col">
                <a href="#" className="font-title link">Seus mixes mais ouvidos</a>
              </div>
              <a href="#" className="link text-gray font-bold">Mostrar tudo</a>
            </div>

            <div className="cards-container">
              <div className="section-card">
                <div>
                  <img src="https://seed-mix-image.spotifycdn.com/v6/img/artist/1Ffb6ejR6Fe5IamqA5oRUF/pt/default" />
                </div>
                <span className="description"><a href="#" className="link text-gray">Architects</a>, <a href="#"
                  className="link text-gray">A Day To Remember</a> e <a href="#" className="link text-gray">Bullet...</a>
                </span>
              </div>

              <div className="section-card">
                <div>
                  <img src="https://seed-mix-image.spotifycdn.com/v6/img/punk/0p4nmQO2msCgU4IF37Wi3j/pt/default" />
                </div>
                <span className="description"><a href="#" className="link text-gray">Avril Lavigne</a>, <a href="#"
                  className="link text-gray">Green Day</a> e mais</span>
              </div>

              <div className="section-card">
                <div>
                  <img src="https://seed-mix-image.spotifycdn.com/v6/img/upbeat/2DlGxzQSjYe5N6G9nkYghR/pt/default" />
                </div>
                <span className="description"><a href="#" className="link text-gray">Jennifer Lopes</a>, <a href="#"
                  className="link text-gray">USHER</a>, <a href="#" className="link text-gray">P!nk</a> e mais</span>
              </div>

              <div className="section-card">
                <div>
                  <img src="https://seed-mix-image.spotifycdn.com/v6/img/artist/6XyY86QOPPrYVGvF9ch6wz/pt/default" />
                </div>
                <span className="description"><a href="#" className="link text-gray">Bring Me The Horizon</a>, <a href="#"
                  className="link text-gray">Green Day</a> e mais</span>
              </div>
            </div>
          </section>

          <section className="flex flex-col">
            <div className="section-title flex justify-space-between items-center">
              <div className="flex flex-col">
                <a href="#" className="font-title link">Tocados recentemente</a>
              </div>
              <a href="#" className="link text-gray font-bold">Mostrar tudo</a>
            </div>

            <div className="cards-container">
              <div className="section-card">
                <div>
                  <img
                    src="https://mosaic.scdn.co/300/ab67616d00001e02413697269620e16f4466f543ab67616d00001e0260cf7c8dd93815ccd6cb4830ab67616d00001e027c2b1dc1639152beaeadf00dab67616d00001e02ab0b0448520d99ff0aa7b1eb" />
                </div>
                <span className="title">2005 - 2014</span>
                <span className="description">De Edy Rodrigues</span>
              </div>

              <div className="section-card">
                <div>
                  <img src="https://i.scdn.co/image/ab67616d00001e029c291af4bf0c3071847f2b80" />
                </div>
                <span className="title">Under My Skin</span>
                <span className="description"><a href="#" className="link text-gray">Avril Lavigne</a></span>
              </div>

              <div className="section-card">
                <div>
                  <img src="https://i.scdn.co/image/ab67616d00001e02413697269620e16f4466f543" />
                </div>
                <span className="description"><a href="#" className="link text-gray">Jennifer Lopes</a>, <a href="#"
                  className="link text-gray">USHER</a>, <a href="#" className="link text-gray">P!nk</a> e mais</span>
              </div>

              <div className="section-card fill"></div>
            </div>
          </section>

          <section className="flex flex-col">
            <div className="section-title flex justify-space-between items-center">
              <div className="flex flex-col">
                <span>Inspirado na sua atividade recente</span>
                <a href="#" className="font-title link">Com base no que você ouviu recentemente</a>
              </div>
              <a href="#" className="link text-gray font-bold">Mostrar tudo</a>
            </div>

            <div className="cards-container">
              <div className="section-card">
                <div>
                  <img src="https://i.scdn.co/image/ab67706f0000000254faa65c795bfb2902106094" />
                </div>
                <span className="description">Relembre e descubra grandes sucessos em 2005. Foto: Pussycat Dolls</span>
              </div>

              <div className="section-card">
                <div>
                  <img src="https://i.scdn.co/image/ab67706f000000023e56ec6cc663723d73617d61" />
                </div>
                <span className="description"><a href="#" className="link text-gray">Relembre e descubra grandes sucessos em
                  2002.
                  Foto: Nelly</a></span>
              </div>

              <div className="section-card">
                <div>
                  <img src="https://i.scdn.co/image/ab67706f00000002e2d544ca628ce77d96987382" />
                </div>
                <span className="description">Relembre e descubra grandes sucessos em 2008. Foto: Rihanna</span>
              </div>

              <div className="section-card">
                <div>
                  <img src="https://i.scdn.co/image/ab67706f000000029bcc934fd810adc4a1e7c811" />
                </div>
                <span className="description">Relembre e descubra grandes sucessos em 2013. Foto: Bruno Mars</span>
              </div>
            </div>
          </section>
        </div>

        <footer>
          <div className="flex gap-8px">
            <div className="flex flex-col gap-8px">
              <span className="font-bold text-white">Empresa</span>
              <a href="#" className="link text-gray">Sobre</a>
              <a href="#" className="link text-gray">Empregos</a>
              <a href="#" className="link text-gray">For the Record</a>
            </div>

            <div className="flex flex-col gap-8px">
              <span className="font-bold text-white">Comunidades</span>
              <a href="#" className="link text-gray">Para Artistas</a>
              <a href="#" className="link text-gray">Desenvolvedores</a>
              <a href="#" className="link text-gray">Publicidade</a>
              <a href="#" className="link text-gray">Investidores</a>
              <a href="#" className="link text-gray">Fornecedores</a>
            </div>

            <div className="flex flex-col gap-8px">
              <span className="font-bold text-white">Link úteis</span>
              <a href="#" className="link text-gray">Suporte</a>
              <a href="#" className="link text-gray">Aplicativo móvel grátis</a>
            </div>

            <div className="flex flex-col gap-8px">
              <span className="font-bold text-white">Planos do Spotify</span>
              <a href="#" className="link text-gray">Premium Individual</a>
              <a href="#" className="link text-gray">Premium Duo</a>
              <a href="#" className="link text-gray">Premium Família</a>
              <a href="#" className="link text-gray">Premium Universitário</a>
              <a href="#" className="link text-gray">Spotify Free</a>
            </div>

            <div className="link-medias flex items-center">
              <a href="https://instagram.com/spotify" target="_blank" className="icon-button">
                <svg className="sm-icon fill-white" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                  <path
                    d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.348.128.663.332.921.598.266.258.47.573.599.921.11.282.24.706.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.204-.275 1.486a2.654 2.654 0 0 1-1.518 1.518c-.282.11-.706.24-1.486.275-.843.039-1.097.047-3.233.047s-2.39-.008-3.232-.047c-.78-.035-1.204-.165-1.486-.275a2.477 2.477 0 0 1-.921-.599 2.477 2.477 0 0 1-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.844-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.129-.348.333-.663.599-.921a2.49 2.49 0 0 1 .92-.599c.283-.11.707-.24 1.487-.275.843-.038 1.096-.047 3.232-.047L8 1.441zm.001-1.442c-2.172 0-2.445.01-3.298.048-.854.04-1.435.176-1.943.373a3.928 3.928 0 0 0-1.417.923c-.407.4-.722.883-.923 1.417-.198.508-.333 1.09-.372 1.942C.01 5.552 0 5.826 0 8c0 2.172.01 2.445.048 3.298.04.853.174 1.433.372 1.941.2.534.516 1.017.923 1.417.4.407.883.722 1.417.923.508.198 1.09.333 1.942.372.852.039 1.126.048 3.299.048 2.172 0 2.445-.01 3.298-.048.853-.04 1.433-.174 1.94-.372a4.087 4.087 0 0 0 2.34-2.34c.199-.508.334-1.09.373-1.942.039-.851.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.853-.174-1.433-.372-1.94a3.924 3.924 0 0 0-.923-1.418A3.928 3.928 0 0 0 13.24.42c-.508-.197-1.09-.333-1.942-.371-.851-.041-1.125-.05-3.298-.05l.001-.001z">
                  </path>
                  <path
                    d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 6.775a2.668 2.668 0 1 1 0-5.335 2.668 2.668 0 0 1 0 5.335zm4.27-5.978a.96.96 0 1 0 0-1.92.96.96 0 0 0 0 1.92z">
                  </path>
                </svg>
              </a>

              <a href="https://x.com/spotify?mx=2" className="icon-button" target="_blank">
                <svg className="sm-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                  <path
                    d="M13.54 3.889a2.968 2.968 0 0 0 1.333-1.683 5.937 5.937 0 0 1-1.929.738 2.992 2.992 0 0 0-.996-.706 2.98 2.98 0 0 0-1.218-.254 2.92 2.92 0 0 0-2.143.889 2.929 2.929 0 0 0-.889 2.15c0 .212.027.442.08.691a8.475 8.475 0 0 1-3.484-.932A8.536 8.536 0 0 1 1.532 2.54a2.993 2.993 0 0 0-.413 1.523c0 .519.12 1 .361 1.445.24.445.57.805.988 1.08a2.873 2.873 0 0 1-1.373-.374v.04c0 .725.23 1.365.69 1.92a2.97 2.97 0 0 0 1.739 1.048 2.937 2.937 0 0 1-1.365.056 2.94 2.94 0 0 0 1.063 1.5 2.945 2.945 0 0 0 1.77.603 5.944 5.944 0 0 1-3.77 1.302c-.243 0-.484-.016-.722-.048A8.414 8.414 0 0 0 5.15 14c.905 0 1.763-.12 2.572-.361.81-.24 1.526-.57 2.147-.988a9.044 9.044 0 0 0 1.683-1.46c.5-.556.911-1.155 1.234-1.798a9.532 9.532 0 0 0 .738-1.988 8.417 8.417 0 0 0 .246-2.429 6.177 6.177 0 0 0 1.508-1.563c-.56.249-1.14.407-1.738.476z">
                  </path>
                </svg>
              </a>

              <a href="https://web.facebook.com/SpotifyBrasil/?brand_redir=6243987495" className="icon-button"
                target="_blank">
                <svg className="sm-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                  <path
                    d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8z">
                  </path>
                </svg>
              </a>
            </div>
          </div>

          <hr />

          <div className="more-links">
            <div>
              <a href="#" className="link text-gray">Legal</a>
              <a href="#" className="link text-gray">Segurança e Centro de privacidade</a>
              <a href="#" className="link text-gray">Política de privacidade</a>
              <a href="#" className="link text-gray">Cookies</a>
              <a href="#" className="link text-gray">Sobre anúncios</a>
              <a href="#" className="link text-gray">Acessibilidade</a>
            </div>
            <div>
              © 2024 Spotify AB
            </div>
          </div>
        </footer>
      </div>
  );
}
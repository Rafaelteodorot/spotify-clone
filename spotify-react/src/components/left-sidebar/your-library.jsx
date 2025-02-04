import './your-library.css';
import { Button } from '../buttons/button';
import { Icon } from '../icons/icon';
import { YourLibraryIcon } from '../icons/your-library-icon';
import { IconButton } from '../buttons/icon-button';
import { IconButtonSvgMore } from '../buttons/icon-button-svg-more';
import { IconButtonSvgArrow } from '../buttons/icon-button-svg-arrow';
import { ButtonContained } from '../buttons/button-contained';
import { IconButtonSvgSearch } from '../buttons/icon-button-svg-search';

export function YourLibrary() {
  return (
    <div className="your-library">
      <header className="flex justify-space-between items-center">
        <Button highlightSmoothingText adornmentLeft={
          <Icon highlightSmoothing>
            <YourLibraryIcon />
          </Icon>
        }>Sua Biblioteca</Button>

        <div className="flex">
          {/* Create playlist */}
          <IconButton highlight>
            <IconButtonSvgMore />
          </IconButton>

          {/* View more */}
          <IconButton highlight>
            <IconButtonSvgArrow />
          </IconButton>
        </div>
      </header>

      <div className="filter flex items-center">
        <ButtonContained button contained>Playlists</ButtonContained>
        <ButtonContained button contained>Podcasts e programas</ ButtonContained>
      </div>

      <div className="list flex flex-col">
        <div className="filter flex justify-space-between">
          <ButtonContained button>
            <IconButtonSvgSearch />
          </ButtonContained>

          <ButtonContained button>
            Recentes
          </ButtonContained>
          <button id="button-modal-dropdown" className="button-base scale flex justify-content-center items-center">
            <span>Recentes</span>
              <svg className="sm-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path
                  d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z">
                </path>
              </svg>
          </button>
        </div>

        <ul className="playlists flex flex-col">
          <li className="card-playlist flex">
            <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png"/>
            <div className="info">
              <h3 className="text-white"> Música Curtidas</h3>
              <span>
                <svg className="xs-icon" data-encore-id="icon" role="img" aria-hidden="false" viewBox="0 0 16 16">
                  <title>Fixado</title>
                  <path
                    d="M8.822.797a2.72 2.72 0 0 1 3.847 0l2.534 2.533a2.72 2.72 0 0 1 0 3.848l-3.678 3.678-1.337 4.988-4.486-4.486L1.28 15.78a.75.75 0 0 1-1.06-1.06l4.422-4.422L.156 5.812l4.987-1.337L8.822.797z">
                  </path>
                </svg>

                <span>Playlist • 14 músicas</span>
              </span>
            </div>
          </li>

          <li className="card-playlist flex">
            <img src="https://mosaic.scdn.co/60/ab67616d00001e02413697269620e16f4466f543ab67616d00001e0260cf7c8dd93815ccd6cb4830ab67616d00001e027c2b1dc1639152beaeadf00dab67616d00001e02ab0b0448520d99ff0aa7b1eb"/>
            <div className="info">
              <h3 className="text-white">2005 - 2014</h3>
              <span>
                <span>Playlist • Edy Rodrigues</span>
              </span>
            </div>
          </li>

          <li className="card-playlist flex">
            <img src="https://mosaic.scdn.co/60/ab67616d00001e02c95743f0a5cb08dd4de28f72ab67616d00001e02dfbea1d3bedc0479e648e7bfab67616d00001e02f506c5f1c2a213cc11ca4ec4ab67616d00001e02fc14ffa9bb92aa7e107f5219" />
            <div className="info">
              <h3 className="text-white">playlist stream</h3>
              <span>
                <span>Playlist • ClovaoBengala</span>
              </span>
            </div>
          </li>

          <li className="card-playlist flex">
            <img src="https://i.scdn.co/image/ab6765630000bdcfc0fe1cb83b05bc1f078b79ec"/>
            <div className="info">
              <h3 className="text-white">Listening Time: English Practice</h3>
              <span>
                <span>Podcast • Sonoro | Conner Pe</span>
              </span>
            </div>
          </li>

          <li className="card-playlist flex">
            <div className="folder">
              <svg className="icon" data-encore-id="icon" role="img" aria-hidden="true" data-testid="folder" viewBox="0 0 24 24">
                <path
                  d="M1 4a2 2 0 0 1 2-2h5.155a3 3 0 0 1 2.598 1.5l.866 1.5H21a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7.155 0H3v16h18V7H10.464L9.021 4.5a1 1 0 0 0-.866-.5z">
                </path>
              </svg>
            </div>
            <div className="info">
              <h3 className="text-white">Rock</h3>
              <span>
                <span>3 playlist</span>
              </span>
            </div>

            <button className="icon-button">
              <svg className="sm-icon" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16">
                <path d="m14 6-6 6-6-6h12z"></path>
              </svg>
            </button>
          </li>

          <li className="card-playlist flex">
            <img src="https://mosaic.scdn.co/60/ab67616d00001e027d6d0bcf4a2596b57343b50dab67616d00001e02c5328aa8e9841656eac3a092ab67616d00001e02e29659427c625d1ea362b108ab67616d00001e02fcc6c59793b1d97b89cc53ff"/>
            <div className="info">
              <h3 className="text-white">Poesia Acústica</h3>
              <span>
                <span>Playlist • Edy Rodrigues</span>
              </span>
            </div>
          </li>

          <li className="card-playlist flex">
            <img src="https://mosaic.scdn.co/60/ab67616d00001e020cee78c3082e95d273d95f77ab67616d00001e02312aaa2812c795109dd87a25ab67616d00001e025c01b2cf88f8e7e2c5c8165fab67616d00001e0261fb1b0126353b13d9bc59ad"/>
            <div className="info">
              <h3 className="text-white">Trap</h3>
              <span>
                <span>Playlist • Edy Rodrigues</span>
              </span>
            </div>
          </li>

          <li className="card-playlist flex">
              <img src="https://mosaic.scdn.co/60/ab67616d00001e0211a057790180926439c1912cab67616d00001e024f0f4ae1cfcd901cd8ce2987ab67616d00001e0268f69db0f08857ec0bbc8dd9ab67616d00001e02ddf7b784cdc455690c747b63"/>
              <div className="info">
                <h3 className="text-white">Funk</h3>
                <span>
                  <span>Playlist • Edy Rodrigues</span>
                </span>
              </div>
            </li>

            <li className="card-playlist flex">
              <img src="https://i.scdn.co/image/ab67616d0000e1a3fbd9b41a77b7bb918a820541"/>
              <div className="info">
                <h3 className="text-white">Games</h3>
                <span>
                  <span>Playlist • Edy Rodrigues</span>
                </span>
              </div>
            </li>

            <li className="card-playlist flex">
              <img
                src="https://mosaic.scdn.co/60/ab67616d00001e021faa5acc9f479da7a0258c8aab67616d00001e02654ddf5725b164761d445181ab67616d00001e02c6b6244ab810f6b0b8528bfaab67616d00001e02fda751b535b40b6f1066e480"/>
              <div className="info">
                <h3 className="text-white">Earthquake</h3>
                <span>
                  <span>Playlist • Felipe martins pupo</span>
                </span>
              </div>
            </li>
        </ul>
      </div>
    </div>
  );
}
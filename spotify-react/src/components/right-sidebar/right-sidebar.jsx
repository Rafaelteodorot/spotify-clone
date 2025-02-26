import { Button } from '../buttons/button';
import { RightSidebarIcon } from './right-sidebar-icon';
import './right-sidebar.css';
import { Icon } from '../icons/icon';
import { RightSidebarCloseIcon } from './right-sidebar-close-icon';
import { RightSidebarCheckIcon } from './right-sidebar-check-icon';
 
const RightSidebarCard = [
  {
    title: 'Em turnê',
    ButtonText: 'Mostrar tudo',
  },
  {
    date: 'Ago.',
    date: '17',
  },
  {
    location: '千葉市美浜区',
    description: 'GLAY com Belle and Sebastian, Gen Hoshino, SUPER BEAVER e OneRepublic mais…',
    date: 'sáb.,',
    time: '11:00 •',
    location: 'ZOZOマリンスタジアム/幕張メッセ',
  },
  {
    date: 'Ago.',
    date: '17',
  },
  {
    location: '吹田市',
    description: 'SUMMER SONIC 2024 [OSAKA]',
    date: 'sáb.,',
    time: '11:00 •',
    location: ' 万博記念公園',
  },
  {
    title: 'A seguir',
    ButtonText: 'Abrir fila',
  }]

export function RightSidebar() {
  return (

  <div id="right-sidebar" className="right-sidebar">
  <header>
    <a href="#">Throne</a>
    <div>
      <Button>
        <Icon highlightSmoothing size='sm'>
          <RightSidebarIcon />
        </Icon>
      </Button>

      <Button>
        <Icon highlightSmoothing size='sm'>
          <RightSidebarCloseIcon />
        </Icon>
      </Button>
    </div>
  </header>
  <div>
    <div className="track-info">
      <div>
        <a href="#">
        <img src="https://i.scdn.co/image/ab67616d0000b273413697269620e16f4466f543" />
        </a>
      </div>
      <div>
        <div className="artist-info">
          <a href="#">Throne</a>
          <a href="#">Bring Me The Horizon</a>
        </div>

        <Button>
          <Icon color='green'>
            <RightSidebarCheckIcon />
          </Icon>
        </Button>
      </div>
    </div>


    <button className="about-artist card" id="about-artist-button">
      <img src="https://i.scdn.co/image/ab6761670000ecd4aa00546de6a62ce643102ffc" />
      <div>
        <a href="#" className="font-title link font-bold">Bring Me The Horizon</a>
        <div>
          <span className="text-gray font-text">14.169.460 ouvintes mensais</span>
          <div className="button follow">Seguir</div>
        </div>
        <div>
          <span className="text-gray font-text font-bold">BRING ME THE HORIZON</span>
          <span className="text-gray font-text font-bold">https://www.bmthofficial.com</span>
        </div>
      </div>
    </button>

    <div className="card">
      <div className="flex justify-space-between items-center">
        <span className="font-title text-white">Créditos</span>
        <button id="about-credits-button" className="button-link">Mostrar tudo</button>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col">
          <a className="link text-white" href="#">Bring Me The Horizon</a>
          <span className="text-gray font-text font-14px">Artista Principal</span>
        </div>
        <button className="button follow">Seguir</button>
      </div>

      <div className="flex flex-col">
        <span className="text-white">Oliver Sykes</span>
        <span className="text-gray font-text font-14px">Compositor, Letrista, Produtor</span>
      </div>

      <div className="flex flex-col">
        <span className="text-white">Lee Malia</span>
        <span className="text-gray font-text font-14px">Compositor, Letrista</span>
      </div>
    </div>

    <div className="card">
      <div className="flex justify-space-between items-center">
        <span className="font-title text-white">Em turnê</span>
        <Button highlightSmoothingText scale link fontSize="font-14px">Mostrar tudo</Button>
      </div>

      <a className="card-calendar" href="#">
        <div className="date">
          <span>Ago.</span>
          <span>17</span>
        </div>

        <div className="info">
          <h3>千葉市美浜区</h3>
          <p>GLAY com Belle and Sebastian, Gen Hoshino, SUPER BEAVER e OneRepublic mais…</p>
          <div>sáb., 11:00 • ZOZOマリンスタジアム/幕張メッセ</div>
        </div>
      </a>

      <a className="card-calendar" href="#">
        <div className="date">
          <span>Ago.</span>
          <span>17</span>
        </div>

        <div className="info">
          <h3>吹田市</h3>
          <p>SUMMER SONIC 2024 [OSAKA]</p>
          <div>sáb., 11:00 • 万博記念公園</div>
        </div>
      </a>
    </div>

    <div className="card">
      <div className="flex justify-space-between items-center">
        <span className="font-title text-white">A seguir</span>
        <Button highlightSmoothingText scale link>Abrir fila</Button>
      </div>

      <div className="card-track">
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="icon">
          <path d="M10 2v9.5a2.75 2.75 0 1 1-2.75-2.75H8.5V2H10zm-1.5 8.25H7.25A1.25 1.25 0 1 0 8.5 11.5v-1.25z">
          </path>
        </svg>
        <img src="https://i.scdn.co/image/ab67616d000048517c2b1dc1639152beaeadf00d" />
        <div className="flex flex-col">
          <a className="link text-white" href="#">Teardrops</a>
          <a className="link text-gray" href="#">Bring Me The Horizon</a>
        </div>
      </div>
    </div>
  </div>

</div>
  );
}
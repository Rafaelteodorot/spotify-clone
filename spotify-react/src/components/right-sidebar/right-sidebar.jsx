import { Button } from '../buttons/button';
import { RightSidebarIcon } from './right-sidebar-icon';
import './right-sidebar.css';
import { Icon } from '../icons/icon';
import { RightSidebarCloseIcon } from './right-sidebar-close-icon';
import { RightSidebarCheckIcon } from './right-sidebar-check-icon';
import { EventItem } from './event-item';
import { QueueItem } from './queue-item';

const events = [
  {
    month: 'Ago.',
    day: '17',
    title: '千葉市美浜区',
    description: 'GLAY com Belle and Sebastian, Gen Hoshino, SUPER BEAVER e OneRepublic mais…',
    moreInfo: 'sáb., 11:00 • ZOZOマリンスタジアム/幕張メッセ',
  },
  {
    month: 'Ago.',
    day: '17',
    title: '吹田市',
    description: 'SUMMER SONIC 2024 [OSAKA]',
    moreInfo: 'sáb., 11:00 • 万博記念公園',
  },
];

const queue = [
  {
    indicator: 'A seguir',
    button: 'Abrir fila',
    icon: <QueueItem.Icon />,
    image: 'https://i.scdn.co/image/ab67616d000048517c2b1dc1639152beaeadf00d',
    songName: 'Teardrops',
    artistName: 'Bring Me The Horizon',
  },
];

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

          {events.map((events, index) => {
            return (
              <EventItem.Root key={index}>
                <EventItem.DateContainer>
                  <EventItem.Month>{events.month}</EventItem.Month>
                  <EventItem.Day>{events.day}</EventItem.Day>
                </EventItem.DateContainer>

                <EventItem.InfoContainer>
                  <EventItem.Title>{events.title}</EventItem.Title>
                  <EventItem.Description>{events.description}</EventItem.Description>
                  <EventItem.MoreInfo>{events.moreInfo}</EventItem.MoreInfo>
                </EventItem.InfoContainer>
              </EventItem.Root>
            );
          })}
        </div>

        
        {queue.map((queueItem, index) => {
          return (
            <QueueItem.Root key={index}>
              <QueueItem.Actions>
                <QueueItem.Indicator>A seguir</QueueItem.Indicator>
                <QueueItem.Button>Abrir fila</QueueItem.Button>
              </QueueItem.Actions>

              <QueueItem.NextTrack>
                <QueueItem.Icon />
                <QueueItem.Image src={queueItem.image} />
                <QueueItem.TrackInfo>
                  <QueueItem.SongName>{queueItem.songName}</QueueItem.SongName>
                  <QueueItem.ArtistName>{queueItem.artistName}</QueueItem.ArtistName>
                </QueueItem.TrackInfo>
              </QueueItem.NextTrack>
            </QueueItem.Root>
          );
        })}
      </div>

    </div>
  );
}
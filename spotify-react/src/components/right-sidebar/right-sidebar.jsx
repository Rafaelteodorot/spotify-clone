import { Button } from '../buttons/button';
import { RightSidebarIcon } from './right-sidebar-icon';
import './right-sidebar.css';
import { Icon } from '../icons/icon';
import { RightSidebarCloseIcon } from './right-sidebar-close-icon';
import { RightSidebarCheckIcon } from './right-sidebar-check-icon';
import { EventItem } from './event-item';
import { QueueItem } from './queue-item';
import { BandCard } from './band-card';
import { BandInfo } from './band-info';

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

        <BandCard 
          imageSrc="https://i.scdn.co/image/ab6761670000ecd4aa00546de6a62ce643102ffc" 
          bandName="Bring Me The Horizon" 
          website="https://www.bmthofficial.com"
          numberOfListeners="14.169.460"
        />

        {/* <BandCardComposition.Root>
          <BandCardComposition.Image src="https://i.scdn.co/image/ab6761670000ecd4aa00546de6a62ce643102ffc" />
          <BandCardComposition.Container>
            <BandCardComposition.Name>Bring Me The Horizon</BandCardComposition.Name>
            <BandCardComposition.ActionsContainer>
              <BandCardComposition.NumberOfListeners>
                14.169.460 ouvintes mensais
              </BandCardComposition.NumberOfListeners>
              <BandCardComposition.FollowButton>Seguir</BandCardComposition.FollowButton>
            </BandCardComposition.ActionsContainer>
            <BandCardComposition.MoreInfoContainer>
              <BandCardComposition.MoreInfoTitle>Bring Me The Horizon</BandCardComposition.MoreInfoTitle>
              <BandCardComposition.MoreInfoDescription>https://www.bmthofficial.com</BandCardComposition.MoreInfoDescription>
            </BandCardComposition.MoreInfoContainer>
          </BandCardComposition.Container>
        </BandCardComposition.Root> */}

        <BandInfo
          members={[
            {
              name: "Oliver Sykes",
              roles: ["Compositor", "Letrista", "Produtor"],
            },
            {
              name: "Lee Malia",
              roles: ["Compositor", "Letrista"],
            },
            {
              name: "Jessica Tamanaha",
              roles: ["Engenheira", "Cientista de dados"],
            }
          ]}
          bandName="Bring Me The Horizon"
        />

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
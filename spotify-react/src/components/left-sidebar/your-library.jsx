import './your-library.css';
import { Button } from '../buttons/button';
import { Icon } from '../icons/icon';
import { YourLibraryIcon } from '../icons/your-library-icon';
import { IconButton } from '../buttons/icon-button';
import { IconButtonSvgMore } from '../buttons/icon-button-svg-more';
import { IconButtonSvgArrow } from '../buttons/icon-button-svg-arrow';
import { IconButtonSvgSearch } from '../buttons/icon-button-svg-search';
import { RecentsIcon } from '../icons/recents-icon';
import { PlaylistItem } from './playlist-item';

const playlists = [
  {
    imageUrl: 'https://misc.scdn.co/liked-songs/liked-songs-64.png',
    title: 'Músicas Curtidas',
    fixed: true,
    description: 'Playlist • 14 músicas',
    folder: false,
  },
  {
    imageUrl: 'https://mosaic.scdn.co/60/ab67616d00001e02413697269620e16f4466f543ab67616d00001e0260cf7c8dd93815ccd6cb4830ab67616d00001e027c2b1dc1639152beaeadf00dab67616d00001e02ab0b0448520d99ff0aa7b1eb',
    title: '2005 - 2014',
    fixed: false,
    description: 'Playlist • Edy Rodrigues',
    folder: false,
  },
  {
    imageUrl: 'https://mosaic.scdn.co/60/ab67616d00001e02c95743f0a5cb08dd4de28f72ab67616d00001e02dfbea1d3bedc0479e648e7bfab67616d00001e02f506c5f1c2a213cc11ca4ec4ab67616d00001e02fc14ffa9bb92aa7e107f5219',
    title: 'playlist stream',
    fixed: false,
    description: 'Playlist • ClovaoBengala',
    folder: false,
  },
  {
    imageUrl: 'https://i.scdn.co/image/ab6765630000bdcfc0fe1cb83b05bc1f078b79ec',
    title: 'Listening Time: English Practice',
    fixed: false,
    description: 'Podcast • Sonoro | Conner Pe',
    folder: false,
  },
  {
    imageUrl: null,
    title: 'Rock',
    fixed: false,
    description: '3 playlist',
    folder: true,
  },
  {
    imageUrl: 'https://mosaic.scdn.co/60/ab67616d00001e027d6d0bcf4a2596b57343b50dab67616d00001e02c5328aa8e9841656eac3a092ab67616d00001e02e29659427c625d1ea362b108ab67616d00001e02fcc6c59793b1d97b89cc53ff',
    title: 'Poesia Acústica',
    fixed: false,
    description: 'Playlist • Edy Rodrigue',
    folder: false,
  },
  {
    imageUrl: 'https://mosaic.scdn.co/60/ab67616d00001e020cee78c3082e95d273d95f77ab67616d00001e02312aaa2812c795109dd87a25ab67616d00001e025c01b2cf88f8e7e2c5c8165fab67616d00001e0261fb1b0126353b13d9bc59ad',
    title: 'Trap',
    fixed: false,
    description: 'Playlist • Edy Rodrigues',
    folder: false,
  },
  {
    imageUrl: 'https://mosaic.scdn.co/60/ab67616d00001e0211a057790180926439c1912cab67616d00001e024f0f4ae1cfcd901cd8ce2987ab67616d00001e0268f69db0f08857ec0bbc8dd9ab67616d00001e02ddf7b784cdc455690c747b63',
    title: 'Funk',
    fixed: false,
    description: 'Playlist • Edy Rodrigues',
    folder: false,
  },
  {
    imageUrl: 'https://i.scdn.co/image/ab67616d0000e1a3fbd9b41a77b7bb918a820541',
    title: 'Games',
    fixed: false,
    description: 'Playlist • Edy Rodrigues',
    folder: false,
  },
  {
    imageUrl: 'https://mosaic.scdn.co/60/ab67616d00001e021faa5acc9f479da7a0258c8aab67616d00001e02654ddf5725b164761d445181ab67616d00001e02c6b6244ab810f6b0b8528bfaab67616d00001e02fda751b535b40b6f1066e480',
    title: 'Earthquake',
    fixed: false,
    description: 'Playlist • Felipe martins pupo',
    folder: false,
  }];

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
        <Button variant="contained">Playlists</Button>
        <Button variant="contained">Podcasts e programas</Button>
      </div>

      <div className="list flex flex-col">
        <div className="filter flex justify-space-between">
          <IconButton highlight variant="text">
            <IconButtonSvgSearch />
          </IconButton>

          <Button highlightSmoothingText scale adornmentRight={
            <Icon highlightSmoothing size="sm">
              <RecentsIcon />
            </Icon>
          }>Recentes</Button>
        </div>


        <ul className="playlists flex flex-col">
          {playlists.map((playlist, index) => {
            return (
              <PlaylistItem.Root key={index}>
                {playlist.folder ? <PlaylistItem.IconFolder /> : <PlaylistItem.Image src={playlist.imageUrl} />}
                <PlaylistItem.Content>
                  <PlaylistItem.Title>{playlist.title}</PlaylistItem.Title>
                  <PlaylistItem.ContainerDescription>
                    {playlist.fixed && <PlaylistItem.Icon />}
                    <PlaylistItem.Description>{playlist.description}</PlaylistItem.Description>
                  </PlaylistItem.ContainerDescription>
                </PlaylistItem.Content>
                {playlist.folder && <PlaylistItem.Button />}
              </PlaylistItem.Root>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
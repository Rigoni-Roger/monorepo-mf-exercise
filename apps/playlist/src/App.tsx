import React from 'react';
import { AppShell } from 'ui';
//@ts-ignore
import MoviesContent from 'movies/Movies';
//@ts-ignore
import PlaylistContent from 'movies/Playlist';

function App() {
  return (
    <AppShell
      title="Playlist"
      colorScheme="dark"
      routes={[
        {
          path: '/',
          element: MoviesContent,
        },
        {
          path: '/playlist',
          element: PlaylistContent,
        },
      ]}
      navLinks={[
        { label: 'Home', path: '/' },
        { label: 'Playlist', path: '/playlist' },
      ]}
    />
  );
}

export default App;

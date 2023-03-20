import React from 'react';
import { AppShell } from 'ui';
import MoviesContent from './MoviesContent';
import PlaylistContent from './PlaylistContent';

function App() {
  return (
    <AppShell
      title="Movies"
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

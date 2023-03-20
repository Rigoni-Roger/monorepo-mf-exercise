import React from 'react';
import { AppShell } from 'ui';

function App() {
  return (
    <AppShell
      title="Movies"
      routes={[
        {
          path: '/',
          element: () => <div>Welcome to the Home page!</div>,
        },
        {
          path: '/playlist',
          element: () => <div>Playlist!!</div>,
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

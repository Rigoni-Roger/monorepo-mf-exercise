import React from 'react';
import { MovieCard } from 'card';
import { Grid, Box, Title } from '@mantine/core';
import { useStore } from 'store';

const PlaylistContent = () => {
  const { movies } = useStore();
  return (
    <>
      <Box>
        <Title>Viewing List</Title>
      </Box>
      <Grid mt={20} sx={{ gap: '1rem' }}>
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.title} showAddButton />
        ))}
      </Grid>
    </>
  );
};
export default PlaylistContent;

import React from 'react';
import { MovieCard } from 'card';
import { Grid } from '@mantine/core';

const movies = [
  {
    title: 'The Magician`s Elephant',
    image:
      'https://www.themoviedb.org/t/p/w440_and_h660_face/kCULfWcKxjzYD2NweXkBdEzeLFC.jpg',
  },
  {
    title: 'Halo',
    image:
      'https://www.themoviedb.org/t/p/w440_and_h660_face/kCULfWcKxjzYD2NweXkBdEzeLFC.jpg',
  },
  {
    title: 'Halo',
    image:
      'https://www.themoviedb.org/t/p/w440_and_h660_face/kCULfWcKxjzYD2NweXkBdEzeLFC.jpg',
  },
  {
    title: 'Halo',
    image:
      'https://www.themoviedb.org/t/p/w440_and_h660_face/kCULfWcKxjzYD2NweXkBdEzeLFC.jpg',
  },
  {
    title: 'Halo',
    image:
      'https://www.themoviedb.org/t/p/w440_and_h660_face/kCULfWcKxjzYD2NweXkBdEzeLFC.jpg',
  },
];

const MoviesContent = () => {
  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.title} showAddButton />
      ))}
    </Grid>
  );
};
export default MoviesContent;

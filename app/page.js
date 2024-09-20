'use client'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://dummyapi.online/api/movies')
      .then(res => {
        console.log(res);
        setMovies(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100'>
      <h1 className='bg-black text-white text-3xl py-6 px-10 mt-6 rounded-lg shadow-lg'>
        Movie Database
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 p-6 w-full max-w-7xl'>
        {movies.map((movie) => (
          <div key={movie.id} className='bg-white shadow-md rounded-lg overflow-hidden'>
            <img
              src={movie.image}
              alt={movie.movie}
              className='w-full h-64 object-cover transition-transform transform hover:scale-105 duration-300'
            />
            <div className='p-4'>
              <h2 className='text-xl font-bold text-gray-800'>{movie.movie}</h2>
              <p className='text-gray-600 mt-2'>Rating: {movie.rating}</p>
              <a
                href={movie.imdb_url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-4 text-blue-500 hover:underline'>
                View on IMDb
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

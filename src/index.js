const axios = require('axios');

const dotenv = require('dotenv');
dotenv.config();



const api_key = process.env.MOVIE_DB_API_KEY;

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  axios('https://api.themoviedb.org/3/discover/movie?api_key=')
    .then(function (response) {
      console.log(response);
    })

}

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  return axios('https://api.themoviedb.org/3/discover/movie?api_key=')
    .then(function () {
      console.log('Movies', response)
      return result.data;
    })
}

const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
  axios('https://api.themoviedb.org/3/discover/movie?api_key=')
    .then(function () {
      console.log('Movies', response.data)

    })
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}

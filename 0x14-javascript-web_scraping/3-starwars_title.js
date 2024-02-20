#!/usr/bin/node
const request = require('request');

const baseUrl = 'https://swapi-api.alx-tools.com/api/films/'; // Adjust if using different API

// Function to fetch movie title by ID
const getMovieTitleById = (movieId) => {
  const url = `${baseUrl}${movieId}`;

  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) {
        reject(error); // Handle API request errors
      } else if (response.statusCode !== 200) {
        reject(new Error(`API request failed with status: ${response.statusCode}`)); // Handle non-200 responses
      } else {
        const movieData = JSON.parse(body);
        resolve(movieData.title); // Return movie title if successful
      }
    });
  });
};

// Get movie ID from command line arguments (adapt as needed)
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

// Fetch and print movie title
getMovieTitleById(movieId)
  .then((title) => {
    console.log(`Star Wars Episode ${movieId}: ${title}`);
  })
  .catch((error) => {
    console.error(`Error fetching movie title: ${error.message}`);
  });


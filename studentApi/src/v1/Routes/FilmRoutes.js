const express = require('express');
const { fetchAllMovies, fetchMovieById, fetchMoviesByDirector, createMovie, modifyMovieById, removeMovieById, fetchMoviesByYear } = require('../Controller/FilmController');
 
const router = express.Router();
 
// Routes

// dette har viser alle filmer
router.get('/', fetchAllMovies);

// dette henter en film basert på ID
router.get('/:id', fetchMovieById);

// dette henter filmer basert på år
router.get('/year/:year', fetchMoviesByYear);

// dette henter filmer basert på regissør
router.get('/director/:director', fetchMoviesByDirector);

// dette legger til en ny film
router.post('/', createMovie);

// dette oppdaterer en film basert på ID
router.put('/:id', modifyMovieById);

// dette sletter en film basert på ID
router.delete('/:id', removeMovieById);
 
// Export the router, så du kan bruke den i app.js
module.exports = router;
 
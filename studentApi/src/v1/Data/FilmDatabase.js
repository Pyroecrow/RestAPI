let movies = [
    { id: 1, title: 'Frankenstein', director: 'Guillermo del Toro', year: 2025 },
    { id: 2, title: 'Civil War', director: 'Alex Garland', year: 2024 },
    { id: 3, title: 'Pacific Rim', director: 'Guillermo del Toro', year: 2013 },
    { id: 4, title: '1917', director: 'Sam Mendes', year: 2016 },
    { id: 5, title: 'Dungeons & Dragons: Honour Among Thieves', director: ' John Francis Daley', year: 2023 },
];

// Get all movies
const getAllMovies = () => {
    return [...movies];
}
 
// Add movie
const addMovie = (movie) => {
    const id = movies.length ? movies[movies.length - 1].id + 1 : 1; // Ensure the ID is unique by checking the length of the movies array
    const newMovie = { id, director, year, ...movie };
    movies.push(newMovie);
    return newMovie;
}
 
// Get movie by id
const getMovieById = (id) => {
    id = parseInt(id);
    if (isNaN(id)) return null; // Return null if id is not a number
    return movies.find((movie) => movie.id === id); // // Ensure the id is a number with parseInt
}

// GET movie by year
const getMoviesByYear = (year) => {
    year = parseInt(year);
    if (isNaN(year)) return []; // Return empty array if year is not a number
    return movies.filter((movie) => movie.year === year);
}
 
// GET movie by director
const getMoviesByDirector = (director) => {
    return movies.filter((movie) => movie.director === director);
}
 
// Delete movie by id
const deleteMovieById = (id) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs
 
    // makes index = id of movie
    const index = movies.findIndex((movie) => movie.id === id);
 
    // Check if index is not -1/does not exist | if it does exist, delete it by splicing. Splicing removes the element at the specified index
    if (index !== -1) {
        movies.splice(index, 1);
        return true;
    }
    return false;
}
 
// Update movie by id
const updateMovieById = (id, updatedMovie) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs
 
    // makes index = id of movie | check if id/movie exists | if it does, update it.
    const index = movies.findIndex((movie) => movie.id === id);
    if (index !== -1) {
        movies[index] = { ...movies[index], ...updatedMovie };
        return movies[index];
    }
    return null;
}
 
 
module.exports = {
    getAllMovies,
    getMoviesByDirector,
    addMovie,
    getMovieById,
    deleteMovieById,
    updateMovieById,
    getMoviesByYear
}
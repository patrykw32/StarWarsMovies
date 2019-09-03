
//Get movies and push into array
async function getFilms(){
    const movies = [];
    let url = "https://swapi.co/api/films/";
    while(url !== null){
        const response = await getResponse(url);
        movies.push(...response.results);
        url = response.next;
    }
    return movies;
}
// Get single movie
async function getFilm(url){
    let movie = await getResponse(url);
    return movie; 
}


import CardMovie from './CardMovie'
// import {movies} from './Data/MoviesData'
// ratingSearch
function MoviesList({movies,nameSearch,rating}) {
    // const movies = props.movies
    console.log(movies)
    return (
        
        <>
        {
            movies.filter(movie=>movie.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) && rating<=movie.rating ).map((e,i) =>  
            <CardMovie key={i}
            name = {e.name} description = {e.description}
            rating={e.rating} posterURL = {e.posterURL}  />
            )
        }
        </>
    )
}
export default MoviesList   
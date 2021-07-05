import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviesList from './components/MoviesList';
import { CardGroup } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AddModal from './components/AddMovie';
import SearchPage from './components/Search';
import Rating from './components/Rating'


function App() {
  const [movies, setMovies] = useState([
    { id: 1, name: "A Quiet Place Part", posterURL: "https://i.egycdn.com/pic/RHNhSUNlY21ZcG1tRXZjbWJtRUVjbW1tcGptZndseHZ3.jpg", description: 'Sans un bruit 2 ou Un coin tranquille 2e partie au Québec (A Quiet Place: Part II) est un film dhorreur américain écrit, produit et réalisé par John Krasinski', rating: 3, trailer: 'https://www.youtube.com/watch?v=BpdDN9d9Jio' },
    { id: 2, name: "Fatherhood", posterURL: "https://i.egycdn.com/pic/WmFwZndlY21IY21FbVRidk5FRWNtbWFhYVBtcFli.jpg", description: 'Fatherhood (2021) ... A father brings up his baby girl as a single dad after the unexpected death of his wife who died a day after their daughters birth', rating: 4 },
    { id: 3, name: "الخطة العايمة", posterURL: "https://i.egycdn.com/pic/RHNhSUNlY21ZRW1FbXBtbW12UmNtYnZ3YXZjbXBFUG16.jpg", description: '13 mai 2021 — الخطة العايمة (2020) ... في إطار كوميدي لايت تدور الأحداث حول أحد الأشخاص يتطلع إلى سرقة أحد البنك لوجود أوراق هامة في الخزانة', rating: 2 },
    {
      id: 4, name: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic.",
        posterURL:
        "https://www.babunga.alobi.cd/wp-content/uploads/2017/12/movieposter-279x400.jpg",
      rating: 4
    }
  ])


  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }

  const [nameSearch, setNameSearch] = useState("")
  const [rate, setRating] = useState(0)


  return (

    <>
      <div class='row' >
        <SearchPage class='col-4' setNameSearch={setNameSearch} />
        <AddModal class='col-4' addMovie={addMovie} />
        <Rating class='col-4' setRating={setRating} rate={rate} />
      </div>
      {/* <Rating  setRating={setRating} rate={rate}  /> */}
      <CardGroup>
        <MoviesList movies={movies} nameSearch={nameSearch} rating={rate} />
      </CardGroup>
    </>

  );

}

export default App;

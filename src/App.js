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
   const [movies,setMovies]=useState( [
    { id: 1, name: "A Quiet Place Part", posterURL: "https://i.egycdn.com/pic/RHNhSUNlY21ZcG1tRXZjbWJtRUVjbW1tcGptZndseHZ3.jpg", description: 'test 1', rating: 3 },
    { id: 2, name: "Fatherhood ", posterURL: "https://i.egycdn.com/pic/WmFwZndlY21IY21FbVRidk5FRWNtbWFhYVBtcFli.jpg", description: 'test 2', rating: 4 },
    { id: 3, name: "الخطة العايمة", posterURL: "https://i.egycdn.com/pic/RHNhSUNlY21ZRW1FbXBtbW12UmNtYnZ3YXZjbXBFUG16.jpg", description: 'test 3', rating: 2 },
    ])


    const addMovie=(newMovie)=>{
      setMovies([...movies,newMovie])
    }

    const [nameSearch,setNameSearch]=useState("")
    const [rating, setRating]=useState(0)

    movies.defaultProps = {
      posterURL: "https://i.egycdn.com/pic/RHNhSUNlY21ZRW1FbXBtbW12UmNtYnZ3YXZjbXBFUG16.jpg"
    }
      
  return (

    <>
      <div class='row' >
      <SearchPage class='col-6' setNameSearch={setNameSearch} rating={rating}/>
      <AddModal class='col-6' addMovie={addMovie}   />
      </div>
      <Rating/>
      <CardGroup>
      <MoviesList movies = {movies} nameSearch={nameSearch} rating={rating}/>
      </CardGroup>
      </>

  );
  
}



export default App;

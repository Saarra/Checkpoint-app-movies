
import { Card } from 'react-bootstrap';
import ReactStars from "react-star-rating-component"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function CardMovie({name,description,rating,posterURL, trailer}) {
   
    return (     
   <>   
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            {/* <Card.Text >Lien Annonce</Card.Text> */}
            {/* <Route path={{trailer}} /> */}
            <ReactStars
            count={5}
           value={rating}
            size={80}
            activeColor = "#ffd700"
           />
        </Card.Body>
        </Card>
   </>
    )
}
export default CardMovie
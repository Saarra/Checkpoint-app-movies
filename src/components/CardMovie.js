
import { Card } from 'react-bootstrap';
import Rating from '../components/Rating'
function CardMovie({name,description,rating,posterURL}) {

    return (
   <>   
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Rating rating={rating} />
        </Card.Body>
        </Card>
   </>
    )
}
export default CardMovie
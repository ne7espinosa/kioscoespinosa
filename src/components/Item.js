import { CardDeck, Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({item}) {

    return (
        <div className="container text-center bg-dark" style={{ marginTop: '50px', marginBottom: '30px' }} >
            <div className="overflow">
        <CardDeck>
        <Card >
            <Card.Img fluid="true" src={item.pictureUrl} style={{ width: '100%', height: 'auto'}}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}, {item.price}
                </Card.Text>
                <Nav.Link as={Link} to={"/item/"+item.id}>
                <Button variant="outline-secondary">Detalles</Button>
                </Nav.Link>
              
            </Card.Body>
        </Card>
        </CardDeck>
        </div>
        </div>
    )
}

export default Item;
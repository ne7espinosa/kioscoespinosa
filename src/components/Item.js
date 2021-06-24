import { CardDeck, Card, Button } from 'react-bootstrap'

function Item({item}) {

    return (
        <div className="container text-center bg-dark" style={{ marginTop: '30px', marginBottom: '30px' }} >
            <div className="overflow">
        <CardDeck>
        <Card >
            <Card.Img variant="top" src={item.pictureUrl} style={{ width: '300px', height: '300px'}}/>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}, {item.price}
                </Card.Text>
                <Button variant="primary">Detalles</Button>
            </Card.Body>
        </Card>
        </CardDeck>
        </div>
        </div>
    )
}

export default Item;
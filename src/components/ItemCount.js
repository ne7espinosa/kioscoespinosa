import React, { useState } from 'react'
import { Button, Card, Container, Col, Row } from 'react-bootstrap'


export default function ItemCount({ initialStock, initial, onAdd }) {
    const [count, setCount] = useState(initial)
    const [stock, setStock] = useState(initialStock)

    const addCount = () => {
        if(initialStock > 0 && count < initialStock) {
            setCount(count + 1)
            setStock(stock - 1)
        }
    }

    const subtractCount = () =>
    {
        if(initialStock > 0 && count > 0)
        {
            setCount(count - 1)
            setStock(stock + 1)
        }
    }

    const addSale = () => {
        if(count > 0){
          onAdd(count);
        }
        else{
          alert("No se agregaron elementos");
        }
    }

    return (
        <Card border="light" className="mx-auto" style={{ width: '18rem' }}>
            <Card.Body>
                <Container>
                    <Row xs="auto" className="justify-content-md-center">
                        <Col lg="3" xs="5"><Button onClick={subtractCount} variant="outline-secondary"> - </Button></Col>
                        <Col md="auto" xs="auto" className="mt-1" >{count}</Col>
                        <Col lg="3" xs="5"><Button onClick={addCount} variant="outline-secondary">+</Button></Col>
                    </Row>
                    <Col xs md lg="auto">
                    <Button className="mt-2" onClick={addSale} variant="outline-secondary">Agregar al Carrito</Button>
                    </Col>
                    
                </Container>
            </Card.Body>
        </Card>
    )
}

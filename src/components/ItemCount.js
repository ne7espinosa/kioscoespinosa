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
                    <Row xs={4} className="justify-content-md-center">
                        <Col ><Button onClick={subtractCount} variant="outline-info"> - </Button></Col>
                        <Col className="mt-1" xs={2}>{count}</Col>
                        <Col ><Button onClick={addCount} variant="outline-info">+</Button></Col>
                    </Row>
                    <Button xs={4} className="mt-2" onClick={addSale} variant="outline-info">Agregar al Carrito</Button>
                </Container>
            </Card.Body>
        </Card>
    )
}

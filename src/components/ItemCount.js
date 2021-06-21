import React, { useState } from 'react'
import { Button, Card, Container, Col, Row } from 'react-bootstrap'


export default function ItemCount({ stock: initialStock, initial, onAdd }) {
    const [count, setCount] = useState(initial)
    const [stock, setStock] = useState(initialStock)

    const addCount = () => {
        if ( (stock > 0 ) && (count < initialStock )) {
            setCount(count + 1)
            setStock(stock - 1)
        }
    }

    const subtractCount = () =>
    {
        if( (initialStock > 1) && (count > 1) )
        {
            setCount(count - 1)
            setStock(stock + 1)
        }
    }

    return (
        <Card className="mx-auto" style={{ width: '18rem' }}>
            <Card.Body>
                <Container>
                    <Row xs={4} className="justify-content-md-center">
                        <Col ><Button onClick={subtractCount} variant="outline-info"> - </Button></Col>
                        <Col className="mt-1" xs={2}>{count}</Col>
                        <Col ><Button onClick={addCount} variant="outline-info">+</Button></Col>
                    </Row>
                    <Button xs={4} className="mt-2" onClick={onAdd} variant="outline-info">Agregar al Carrito</Button>
                </Container>
            </Card.Body>
        </Card>
    )
}

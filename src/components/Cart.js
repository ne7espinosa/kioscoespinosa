import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link, useHistory } from 'react-router-dom';
import { Button, Nav, Alert, Modal, Container, InputGroup, FormControl } from 'react-bootstrap';
import { DataGrid } from '@material-ui/data-grid';
import { getFirestore } from '../firebase';

function Cart() {
    const cartContext = useContext(CartContext);
    const columns = [

        { field: 'item.id', headerName: 'ID', width: 70, hide: true },
        {
            field: 'item.title', headerName: <strong>Item</strong>, width: 200, valueGetter: (params) => {
                return params.row.item.title;
            }
        },
        {
            field: 'item.price', headerName: <strong>Precio</strong>, width: 200, valueGetter: (params) => {
                return params.row.item.price;
            }
        },
        { field: 'quantity', headerName: <strong>Cantidad</strong>, width: 200 },
        {
            field: "", headerName: <strong>Acción</strong>, width: 200, disableClickEventBubbling: true,
            renderCell: (item) => {
                const borrarItem = () => {
                    cartContext.removeItem(item.id)
                };
                return <Button variant="outline-danger" onClick={borrarItem}>Borrar</Button>;
            }
        }
    ];
    const [mail, setMail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [name, setName] = React.useState("");
    const history = useHistory();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFinish = () => {
        const db = getFirestore()
        const buyer = { name: name, phone: phone, mail: mail }

        db.collection("orders").add({
            buyer: buyer,
            items: cartContext.cartItems,
            total: cartContext.cartItems.reduce((elem1, elem2) => {
                return elem1 + (parseInt(elem2.item.price) * elem2.quantity)
            }, 0)
        }).then((responseInsert) => {
            const itemRef = db.collection("items");
            cartContext.cartItems.map(element => {
                itemRef.doc(element.item.serverId).update({
                    stock: element.item.stock - element.quantity
                }).then(responseUpdate => {
                    cartContext.clear()
                    history.push("/")
                }).catch(err => {
                    console.log('Error updating documents', err);
                })

                return element
            })

        }).catch(err => {
            console.log('Error saving documents', err);
        });

    };

    const bodyModal = (
        <div>
            
            <Container>
                <InputGroup className="mb-2">
                    <FormControl
                        placeholder="Nombre"
                        aria-describedby="basic-addon2"
                        onChange={event => setName(event.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-2">
                    <FormControl
                        placeholder="Mail"
                        aria-describedby="basic-addon2"
                        onChange={event => setMail(event.target.value)}
                    />
                </InputGroup>
                <InputGroup className="mb-2">
                    <FormControl
                        placeholder="Telefono"
                        aria-describedby="basic-addon2"
                        onChange={event => setPhone(event.target.value)}
                    />
                </InputGroup>
            </Container>
        </div>
    );

    return (

        <div class="container">
            {cartContext.cartItems.length > 0 ?
                <div flex="true" className="inlineBlock" style={{ marginTop: '50px', height: 400, width: '100%', backgroundColor: 'white' }}>
                    <DataGrid getRowId={(r) => r.item.id} rows={cartContext.cartItems} columns={columns} pageSize={20} />
                    <Alert variant="dark">
                        Total: $
                        {cartContext.cartItems.reduce((elem1, elem2) => {
                            return elem1 + (parseInt(elem2.item.price) * elem2.quantity)
                        }, 0)
                        }
                    </Alert>
                    <Button variant="outline-success" onClick={handleShow}>Finalizar</Button>
                </div>
                :
                <div style={{ marginTop: '100px' }}>
                    <Alert variant="dark">
                        <Alert.Heading>No existen items en el carrito</Alert.Heading>
                        <p>
                            Debe cargar items en su carrito para seguir con la compra
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Nav.Link as={Link} to={"/"}>
                                <Button variant="dark" color="primary" className="marginTop2">Volver a Lista </Button>
                            </Nav.Link>
                        </div>
                    </Alert>


                </div>
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Llene sus datos para finalizar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {bodyModal}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleFinish}>
                        Terminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Cart;
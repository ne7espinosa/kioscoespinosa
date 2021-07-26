import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import { Button, Nav, Alert } from 'react-bootstrap';
import { DataGrid } from '@material-ui/data-grid';

function Cart() {
    const cartContext = useContext(CartContext);
    const columns = [

        { field: 'item.id', headerName: 'ID', width: 70, hide: true },
        { field: 'item.title', headerName: <strong>Item</strong>, width: 200, valueGetter: (params) => 
            {
                return params.row.item.title;
            }
        },
        { field: 'item.price', headerName: <strong>Precio</strong>, width: 200, valueGetter: (params) => 
            {
                return params.row.item.price;
            }
        },
        { field: 'quantity', headerName: <strong>Cantidad</strong>, width: 200 },
        { field: "", headerName: <strong>Acción</strong>, width: 200, disableClickEventBubbling: true,
            renderCell: (item) => {
                const borrarItem = () => {
                    cartContext.removeItem(item.id)
                };
                return <Button variant="outline-danger" onClick={borrarItem}>Borrar</Button>;
            }
        }
    ];

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

        </div>
    )
}

export default Cart;
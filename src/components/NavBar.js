import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap'
import CartWidget from './CartWidget';
import { IoCartOutline } from "react-icons/io5";

function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#incio">KioscoEspinosa</Navbar.Brand>
                
                <Nav className="mr-auto">
                    <Nav.Link href="#incio">Inicio</Nav.Link>
                    <Nav.Link href="#listado">Listado</Nav.Link>
                    <Nav.Link href="#productos">Productos</Nav.Link>
                </Nav>
                <Form inline>
                    <CartWidget icono={<IoCartOutline color={"white"} size={28}/>}/>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    <Button variant="outline-info">Buscar</Button>
                </Form>
            </Navbar>
        </>
    )

}

export default NavBar;
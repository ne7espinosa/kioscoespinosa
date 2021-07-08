import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import CartWidget from './CartWidget';
import { IoCartOutline } from "react-icons/io5";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
    const categoriaProductosList = [{ "id": 1, "description": "Chocolates" }, { "id": 2, "description": "Caramelos" }, { "id": 3, "description": "Snacks" }];

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <Nav.Link as={Link} className="bi bi-box-seam" to="/">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Nav.Link>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {categoriaProductosList.map((elem, index) => {
                        return (

                            <Nav.Link as={Link} key={index} index={index} to={"/category/" + elem.id}>
                                {elem.description}
                            </Nav.Link>

                        )
                    })}
                </Nav>
                <Form inline>
                    <CartWidget icono={<IoCartOutline color={"white"} size={28} />} />
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    <Button variant="outline-info">Buscar</Button>
                </Form>
            </Navbar>
        </>
    )

}

export default NavBar;
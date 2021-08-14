import React from 'react'
import { Navbar, Nav, Form, Dropdown } from 'react-bootstrap'
import CartWidget from './CartWidget';
import { IoCartOutline } from "react-icons/io5";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

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
                <Dropdown className="mr-auto" id="dropdowncategorias">
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                        Categorias
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {categoriaProductosList.map((elem, index) => 
                        {
                            return (
                                <Dropdown.Item as={Link} key={index} index={index} to={"/category/" +elem.id}>{elem.description}</Dropdown.Item>
                        )
                    })}
                    </Dropdown.Menu>
                </Dropdown>
                <Form inline>
                    <CartWidget icono={<IoCartOutline color={"white"} size={28} />} />
                </Form>
            </Navbar>
        </>
    )

}

export default NavBar;
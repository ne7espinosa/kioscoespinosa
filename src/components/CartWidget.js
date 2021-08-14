import React, { useContext } from 'react'
import { Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

function CartWidget(props) {
  const cartContext = useContext(CartContext);
  return (
    <div>
      <Button variant="none" as={Link} to={"/cart/"}>{props.icono}
        <Badge style={{ color: 'white', fontSize: '15px', top: '0' }}>
          {cartContext.cartItems.reduce((elem1, elem2) => {
            return elem1 + elem2.quantity
          }, 0)}
        </Badge>
      </Button>
      :
      <></>
    </div>
  )
}

export default CartWidget;
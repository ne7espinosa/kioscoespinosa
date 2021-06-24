import React from 'react';
import { Button } from 'react-bootstrap'

function CartWidget (props) {
    return (
      <Button variant="none">{props.icono}</Button>
    )
  }

export default CartWidget;
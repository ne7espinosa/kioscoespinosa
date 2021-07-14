import React, { useState } from 'react'
import { Image, Button, Nav } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

function ItemDetail({ item }) {

  const onAdd = (cantidad) => {
      setItemQuantity(cantidad)
  }

  const [itemQuantity, setItemQuantity] = useState();


  return (

    <div className="container">
      <div className="card border-0 shadow my-5" style={{ width: '900px', height: '550px' }}>
        <div className="row no-gutters" style={{ marginTop: '100px' }}>
          <div className="col-md-4">
            <Image src={item.pictureUrl} fluid style={{ height: '200px' }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                ${item.price}
              </p>
              <p className="card-text">
                <small className="text-muted">{item.description}</small>
              </p>

            </div>
          </div>
        </div>
        <div className="row no-gutters" style={{ marginTop: '60px' }}>
          {!itemQuantity ?
            <div className="col-md-4">
              <div flex="true">
                <ItemCount initialStock={item.stock} initial={0} onAdd={onAdd}></ItemCount>
              </div>
            </div>
            :
            <div className="col-md-4">
              <Nav.Link as={Link} to={"/cart/"}>
              <Button size="lg" className="mt-2" onClick={onAdd} variant="outline-info">Terminar Compra</Button>
            </Nav.Link>
          </div>
          }
      </div>
    </div>
    </div >
  )
}

export default ItemDetail

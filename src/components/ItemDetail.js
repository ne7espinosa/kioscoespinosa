import React from 'react'
import {Image} from 'react-bootstrap'

function ItemDetail({item}) {
    return (
        <div className="container">
        <div className="card border-0 shadow my-5">
          <div className="card-body p-5">
            <h1 className="font-weight-light">{item.title}</h1>
            <Image src={item.pictureUrl} fluid />
            <p className="p-4 itemdesc">{item.description}</p>
            <div style={{ heigth: '600px' }}></div>
            <strong><p className="mb-0">Precio: ${item.price}</p></strong>
          </div>
        </div>
      </div>
      
    )
}

export default ItemDetail

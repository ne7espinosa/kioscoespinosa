import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [item, setItemDetail] = useState([]);
  //Lo cambio despues cuando uso la api
  const mockItem = {
    id: '1',
    title: 'Huevo Kinder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 75,
    pictureUrl: 'https://i.ibb.co/3fK66vz/Producto1.png'
  };

  useEffect(() => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve(mockItem), 30000)
    }).then(
      (itemResolve) => {
        setItemDetail(itemResolve)
      }
    )

  }, []);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer

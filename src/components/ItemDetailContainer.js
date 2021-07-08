import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
const useParams = require("react-router-dom").useParams;

function ItemDetailContainer() {
  const [item, setItemDetail] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    setTimeout(function(){
      fetch('../productos.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      )
      .then(function(response)
      {
        return response.json()
      }).then(function(categoriaLista)
      {;
        const categoriaBuscada = categoriaLista.find(categoria => categoria.items.find(item => item.id === itemId));
        const item = categoriaBuscada.items.find(item => item.id === itemId);
        
      if(item)
        {
          setItemDetail(item);
        }
      })

    }, 2000)
  }, [itemId]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer

import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore} from '../firebase'
const useParams = require("react-router-dom").useParams;

function ItemDetailContainer() {
  const [item, setItemDetail] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore()
    const itemList = db.collection('items').where('id','==',itemId)
    itemList.get().then((query) => {
      let item = query.docs.map(doc => doc.data())[0]
      setItemDetail(item);    
    }).catch(err => {
      console.log('Error getting documents', err);
    });
}, [itemId]);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer

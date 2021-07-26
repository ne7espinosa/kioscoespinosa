import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getFirestore } from '../firebase';

const useParams = require("react-router-dom").useParams;


function ItemListContainer() {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const db = getFirestore()
        let itemCollection = db.collection('items')

        if (categoryId) {
            const itemList = itemCollection.where('categoryId', '==', categoryId)
            itemList.get().then((query) => {
                setProductos(query.docs.map(doc => doc.data()));
            })

        }
        else {
            itemCollection.get().then((query) => {
                setProductos(query.docs.map(doc => doc.data()));
            })
        }
    }, [categoryId]);
    return (
        <div flex="true" className="container justify-content-center align-items-center h-100">
            <ItemList productos={productos} />

        </div>
    )

}



export default ItemListContainer;

import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import ItemCount from './ItemCount';

const useParams = require("react-router-dom").useParams;
const onAdd = (cantidad) => 
{
    alert("Se agrego" + Number(cantidad) +" productos a tu compra")
}

function ItemListContainer() {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(function () {
            fetch('../productos.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (productosResolve) {
                    let category = productosResolve.filter(item => item.id === categoryId)[0]
                    if (category) {
                        setProductos([...category.items]);
                    }
                })
        }, 2000);


    }, [categoryId]);

    return (
        <div flex="true" className="container justify-content-center align-items-center h-100">
            <ItemList productos={productos} />
            <div flex="true">
            <ItemCount initialStock={5} initial={0} onAdd={ onAdd }></ItemCount>
            </div>
        </div>
    )

}



export default ItemListContainer;

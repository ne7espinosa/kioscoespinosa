import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const useParams = require("react-router-dom").useParams;


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
                    else
                    {
                        let allProducts = productosResolve.map(({items}) => items).flat().sort((a, b) => a.id - b.id);
                        setProductos(allProducts);
                    }
                })
        }, 2000);
    

    }, [categoryId]);

    return (
        <div flex="true" className="container justify-content-center align-items-center h-100">
            <ItemList productos={productos} />

        </div>
    )

}



export default ItemListContainer;

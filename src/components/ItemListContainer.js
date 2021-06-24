import React, { useState, useEffect} from 'react';
import ItemList from './ItemList'

const productosData = [
    {
        producto: {
            id: '1',
            title: 'Huevo Kinder',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 75,
            pictureUrl: 'https://i.ibb.co/3fK66vz/Producto1.png'
        }
    },
    {
        producto: {
            id: '2',
            title: 'Doritos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 84,
            pictureUrl: 'https://i.ibb.co/LpzG0HT/Producto2.jpg'
        }
    },
    {
        producto: {
            id: '3',
            title: 'Chicle Seven',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 20,
            pictureUrl: 'https://i.ibb.co/1G9HnVR/Producto3.webp'
        }
    },
    {
        producto: {
            id: '4',
            title: 'Alfajor Pepito',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 85,
            pictureUrl: 'https://i.ibb.co/9ZSF7tN/Producto4.jpg'
        }
    },
    {
        producto: {
            id: '5',
            title: 'Gomita Mogul',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 85,
            pictureUrl: 'https://i.ibb.co/9rHCH6q/Producto5.webp'
        }
    },
    {
        producto: {
            id: '6',
            title: 'Chocolate Block',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            price: 85,
            pictureUrl: 'https://i.ibb.co/KzsBWgC/Producto6.jpg'
        }
    },
]

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    useEffect(() => { 
        return new Promise((resolve, reject) => {
            setTimeout(resolve(productosData), 30000)
        }).then(
            (productosResolve) => {
                setProductos(productosResolve)
            }
        ) 

    }, []);

    return(
        <div className="container d-flex justify-content-center align-items-center h-100">
        <ItemList productos={productos} />
        </div>
    )

}



export default ItemListContainer;

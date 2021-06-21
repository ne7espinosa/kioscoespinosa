import React from 'react'
import ItemCount from './ItemCount'

export default class ItemListContainer extends React.Component
{
    
    render() {
        return( 
        <div>
        <h2>{this.props.greeting}!</h2>
        <ItemCount initial={1} stock={5} onAdd={() => console.log("Se agrego")} />
        </div>
        )
      }
}
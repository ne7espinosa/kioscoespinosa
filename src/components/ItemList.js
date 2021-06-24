import Item from './Item'


function ItemList({ productos }) {
    return (

            <div className="row">
                {productos.map(i =>
                    <div className="col-md-4">
                        <Item className="col-md-4" item={i.producto} />
                    </div>)}
            </div>
   
    )
}

export default ItemList;
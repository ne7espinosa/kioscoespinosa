import Item from './Item'


function ItemList({ productos }) {

    return (
        <div className="row">
            {
            productos.map(item => {
                return(
                    <div className="col-md-4" key={item.id}>
                        <Item item={item} />
                    </div>
                    )})}
        </div>

    );
}

export default ItemList;






const CartItem = ({item, deleteFromCart}) => {

    const {name, price, id} = item;

    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <h5>${price}</h5>
            <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
            <button>Eliminar todos</button>
        </div>
    )
}

export default CartItem
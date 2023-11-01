import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    return (
        <div>
            <h3>Whishlist</h3>
            <div className="cartWrapper" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"900px"}}>
                {products.map((product) => (
                    <div key={product.id} className="cartCard" style={{
                    border:"2px solid",
                    width:"220px",
                    margin:"10px 10px 10px 10px",
                    height:"260px",
                    borderRadius:"10px",
                    padding:"10px 10px 10px 10px"
                    }}>
                        <img src={product.thumbnailUrl} alt="" />
                        <h5>{product.title}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;

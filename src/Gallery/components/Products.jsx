import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        <div className="productsWrapper" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",width:"900px"}}>
            {products.map((product) => (
                <div>
                <div className="card" 
                style={{
                    border:"2px solid",
                    width:"220px",
                    margin:"10px 10px 10px 10px",
                    height:"350px",
                    borderRadius:"10px"
                    }} key={product.id}>
                    <img src={product.thumbnailUrl} alt="" />
                    <h4>{product.title}</h4>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Whishlist
                    </button>
                </div>
                </div>
            ))}
        </div>
    );
};

export default Products;

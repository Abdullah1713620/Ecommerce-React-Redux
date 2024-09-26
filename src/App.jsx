import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/cartSlice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function App() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const productsData = await response.json();
            setProducts(productsData); 
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
   
        const isProductInCart = cartItems.some(item => item.id === product.id);
        if (isProductInCart) {
            alert('Cart mai add hai yay item');
        } else {
            dispatch(addToCart(product));
        }
    };

    return (
        <div className="container mx-auto p-4">
            <header className="flex justify-between items-center bg-gray-800 p-4 text-white">
                <h1 className="text-xl font-bold">My Store</h1>
                <Link to="/cart" className="text-white flex items-center">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                    Cart ({cartItems.length})
                </Link>
            </header>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="border p-4 rounded shadow flex flex-col">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-48 object-cover mb-2 flex-grow" 
                            />
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="mb-4">{product.description}</p>
                            <div className="flex justify-between mt-auto">
                                <button 
                                    onClick={() => handleAddToCart(product)} 
                                    className="bg-blue-500 text-white p-2 rounded flex-grow mr-1"
                                >
                                    Add to Cart
                                </button>
                                <button className="bg-green-500 text-white p-2 rounded flex-grow ml-1">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
        </div>
    );
}

export default App;

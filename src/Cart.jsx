import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './redux/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleBuyNow = (item) => {

        console.log("Buying now:", item);
        
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 mt-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="border p-4 rounded shadow">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-2" />
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p>{item.description}</p>
                            <div className="flex justify-between mt-4">
                                <button 
                                    onClick={() => handleRemoveFromCart(item.id)} 
                                    className="bg-red-500 text-white p-2 rounded">
                                    Remove from Cart
                                </button>
                                <button 
                                    onClick={() => handleBuyNow(item)} 
                                    className="bg-green-500 text-white p-2 rounded">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;

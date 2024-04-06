import React, { useState } from 'react'
import { useAuth } from '../ContextApi/TokenApi';
import { MdDelete } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity,clearCart } = useAuth();
  const navigate = useNavigate();
  // Function to calculate total amount
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };
  const [totalAmount, setTotalAmount] = useState(calculateTotal(cart));
  const handlePayment = () => {
    setTotalAmount(0);
    // Clear the entire cart
    clearCart();
    navigate("/Payment");

  };

  return (
    <div>
      <h1 className='Header-cart'>Shopping Cart</h1>
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imgSrc} alt="images" className="card-media" />
            <p className='cart-title'>{item.title}</p>
            <p className='cart-price'>${item.price}</p>
            <p className='cart-quantity'>Quantity: {item.quantity}</p>
            <button onClick={() => incrementQuantity(item.id)} className="cart-button"><FaPlus/></button>
            <button onClick={() => decrementQuantity(item.id)} className="cart-button"><FiMinus/></button>
            <button onClick={() => removeFromCart(item.id)} className="cart-button"><MdDelete /></button>
          </div>
        ))}
      </div>
      <p className="cart-total">Total Amount: ${calculateTotal()}</p>
      {/* Payment button to reset the entire cart */}
      <button onClick={handlePayment} className="payment-button">Proceed to Payment</button>
    </div>
  );
};

export default Cart;



import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useOrders } from './OrdersContext';
import axios from 'axios';
import useRazorpay from "react-razorpay";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AlarmSmoke } from 'lucide-react';

export default function CartPage() {
    const { addOrder } = useOrders();
    const { cartItems, clearCart } = useCart();
    const [Razorpay] = useRazorpay();
    const navigate = useNavigate();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const completePayment = (payment_id, order_id, signature) => {
        axios.post('http://127.0.0.1:8000/razorpay/order/complete/', {
            payment_id: payment_id,
            order_id: order_id,
            signature: signature,
            amount: totalAmount,
            currency: "INR"
        })
        .then((response) => {
            if (response.status === 201) {
                setPaymentSuccess(true);
                const newOrder = {
                    items: cartItems,
                    totalAmount: totalAmount,
                    date: new Date().toISOString()
                };
                addOrder(newOrder);
            }
        })
        .catch((err) => {
            console.log(err);
            alert('Payment failed: ' + err.message);
        });
    };

    const handleRazorpayPayment = () => {
        axios.post('http://127.0.0.1:8000/razorpay/order/create/', {
            amount: totalAmount,
            currency: "INR"
        })
        .then((response) => {
            console.log("Order created successfully:", response.data); // Log for debugging
            const order_id = response.data.id;
            const options = {
                key: "rzp_test_1zXQtFHkqqeCQB",
                name: "",
                order_id: order_id,
                handler: function (response) {
                  alert(response.razorpay_order_id)
                  alert(response.razorpay_payment_id)
                  alert(response.razorpay_signature)
                    completePayment(
                        response.razorpay_payment_id,
                        response.razorpay_order_id,
                        response.razorpay_signature
                    );
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#10B981",
                },
            };
            const rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", function (response) {
                alert(response.error.description);
            });
            rzp1.open();
        })
        .catch((err) => {
            console.error("Error during Razorpay order creation:", err.response?.data || err.message); // Log error details
        });
    };

    return (
        <div className="basket-container">
            <h2 className="basket-title">Your Basket</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart"><b>No items in the cart</b></p>
            ) : (
                <div>
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-quantity">Quantity: {item.quantity}</p>
                                    <p className="item-price">₹{item.price * item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total-amount">
                        <h3>Total Amount: ₹{totalAmount}</h3>
                    </div>
                    <button onClick={handleRazorpayPayment} className="pay-button">Pay ₹{totalAmount}</button>
                </div>
            )}
            {paymentSuccess && (
                <div>
                    <h3>Payment Successful!</h3>
                    <Link to="/yourorders">View Your Orders</Link>
                </div>
            )}

<style jsx>{`
          .basket-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          .basket-title {
            font-size: 2.5em;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
            animation: fadeIn 0.5s ease-out;
          }

          .empty-cart {
            text-align: center;
            font-size: 1.2em;
            color: #666;
            margin-top: 50px;
          }

          .cart-items {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          .cart-item {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: flex;
            align-items: center;
            transition: transform 0.3s ease;
            animation: slideIn 0.5s ease-out;
          }

          .cart-item:hover {
            transform: translateY(-5px);
          }

          .item-image {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
            margin-right: 15px;
          }

          .item-details {
            flex-grow: 1;
          }

          .item-name {
            font-size: 1.2em;
            margin: 0 0 5px;
            color: #333;
          }

          .item-quantity, .item-price {
            font-size: 0.9em;
            color: #666;
            margin: 2px 0;
          }

          .total-amount {
            margin-top: 30px;
            text-align: right;
            font-size: 1.5em;
            color: #333;
            animation: fadeIn 0.5s ease-out;
          }

          .payment-section {
            margin-top: 40px;
            background-color: #f9f9f9;
            padding: 30px;
            border-radius: 10px;
            animation: fadeIn 0.5s ease-out;
          }

          .payment-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form-input {
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 1em;
            transition: border-color 0.3s ease;
          }

          .form-input:focus {
            border-color: #10B981;
            outline: none;
          }

          .pay-button {
            background-color: #10B981;
            color: white;
            border: none;
            padding: 12px;
            border-radius: 6px;
            font-size: 1.1em;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .pay-button:hover {
            background-color: #059669;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>
        </div>
    );
}

import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token, currency } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2 className="my-orders-title">My Orders</h2>
      {data.length > 0 ? (
        <div className="my-orders-container">
          {data.map((order, index) => (
            <div key={index} className="my-orders-card">
              <img src={assets.parcel_icon} alt="Parcel Icon" className="my-orders-icon" />
              <div className="my-orders-details">
                <p className="my-orders-items">
                  {order.items.map((item, idx) =>
                    idx === order.items.length - 1
                      ? `${item.name} x ${item.quantity}`
                      : `${item.name} x ${item.quantity}, `
                  )}
                </p>
                <p className="my-orders-price">
                  <strong>{currency}{order.amount}.00</strong>
                </p>
                <p className="my-orders-item-count">Items: {order.items.length}</p>
                <p className="my-orders-status">
                  <span className="status-indicator"></span>
                  <strong>{order.status}</strong>
                </p>
              </div>
              <button className="my-orders-track-btn" onClick={fetchOrders}>
                Track Order
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="my-orders-empty">No orders yet. Start ordering now!</p>
      )}
    </div>
  );
};

export default MyOrders;


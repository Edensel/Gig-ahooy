// HandsPage.js

import React, { useState } from 'react';
import "../style.css";

const HandsPage = () => {
  const [formData, setFormData] = useState({
    weightSize: '',
    collectionAddress: '',
    collectionTime: '',
    deliveryAddress: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the formData here, e.g., sending it to a backend or logging it
    alert('Your order has been placed! We will contact you for confirmation.');
    // Reset form if necessary
    setFormData({
      weightSize: '',
      collectionAddress: '',
      collectionTime: '',
      deliveryAddress: '',
      contactInfo: '',
    });
  };

  return (
    <div className="container">
      <h1>Place Your Delivery Order</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Weight/Size:
          <input
            type="text"
            name="weightSize"
            value={formData.weightSize}
            onChange={handleChange}
          />
        </label>
        <label>
          Collection Address:
          <input
            type="text"
            name="collectionAddress"
            value={formData.collectionAddress}
            onChange={handleChange}
          />
        </label>
        <label>
          Collection Time:
          <input
            type="time"
            name="collectionTime"
            value={formData.collectionTime}
            onChange={handleChange}
          />
        </label>
        <label>
          Delivery Address:
          <input
            type="text"
            name="deliveryAddress"
            value={formData.deliveryAddress}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact Information:
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default HandsPage;
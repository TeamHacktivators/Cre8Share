import React, { useState } from "react";
import axios from "axios";

const StockForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      window.alert("Please login first");
      return;
    }
    try {
      await axios.post("http://localhost:8000/stocks/addStock", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFormData({
        name: "",
        quantity: "",
      });

      // Redirect to localhost:3000/creatorDashBoard after successful form submission
      window.location.href = `http://localhost:3000/MyCreator?token=${token}`;
    } catch (error) {
      console.error("Stock allocation failed:", error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
  );
};

export default StockForm;

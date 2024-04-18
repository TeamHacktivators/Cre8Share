import React, { useState, useEffect } from "react";
import axios from "axios";

const StockList = () => {
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/api/v1/stockListAPI",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStocks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {stocks.map((stock) => (
            <li key={stock._id}>
              {stock.name} - {stock.quantity}
              <br />
              Current Price - {stock.currentPrice}
              <br />
              {stock.currentPrice - stock.buyPrice >= 0 ? "Profit" : "Loss"}
              <br />
              List Price - {stock.buyPrice}
              <br />
              By - {stock.creator.channelName}
              <br />
              <a href={`/users/buyStock/${stock._id}`}>Buy</a>
              <br />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default StockList;

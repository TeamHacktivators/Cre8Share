import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import StockForm from "../StockForm/StockForm";

const CreatorDashboard = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [creatorData, setCreatorData] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams(location.search);
      const token = queryParams.get("token");
      if (!token) {
        setError("Token not found.");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", token);

      try {
        const [creatorResponse, analyticsResponse, stocksResponse] = await Promise.all([
          axios.get("http://localhost:8000/api/v1/creatorsAPI", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/api/v1/analyticsAPI", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:8000/api/v1/stocksAPI", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setCreatorData(creatorResponse.data);
        setAnalyticsData(analyticsResponse.data);
        setStocks(stocksResponse.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 style={{ fontSize: 24, textAlign: "center" }}>
        Welcome To Creator Dashboard
      </h3>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : creatorData ? (
        <div>
          <p>Creator Name: {creatorData.name}</p>
          <p>Email: {creatorData.email}</p>
          <p>Channel Name: {creatorData.channelName}</p>
          <p>Channel ID: {creatorData.channelID}</p>
          <img src={creatorData.channelImage} alt="Channel Image" />
          <p>Balance: {creatorData.balance}</p>
          <h1>Analytics Data</h1>
          <ul>
            <li>Likes: {analyticsData.stats[0].likes}</li>
            <li>Dislikes: {analyticsData.stats[0].dislikes}</li>
            <li>Subscribers: {analyticsData.stats[0].subscribers}</li>
            <li>VideoCount: {analyticsData.stats[0].videoCount}</li>
            <li>Current Valuation: {analyticsData.stats[0].valuation}</li>
          </ul>
          <h3>List of stocks:</h3>
          <ul>
            {stocks.map((stock) => (
              <li key={stock._id}>
                <p>Stock Name: {stock.name}</p>
                <p>Current Price: {stock.currentPrice}</p>
                <p>Buy Price: {stock.buyPrice}</p>
                <p>Quantity: {stock.quantity}</p>
                <p>Sold: {stock.sold}</p>
                <p>Unsold: {stock.unsold}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No creator data found.</div>
      )}

      <StockForm />

    </div>
  );
};

export default CreatorDashboard;

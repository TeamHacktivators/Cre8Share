import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockList from '../../StockList/StockList';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/v1/usersAPI', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

       const portfolioResponse = await axios.get('http://localhost:8000/api/v1/usersAPI/getPortfolio', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setPortfolio(portfolioResponse.data);
        setUserData(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  // Render loading state if data is not available yet
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render userData if available
  return (
    <div>
      {/* Render userData here */}
      {userData && (
       <>
         <div>
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
        <h1>
          Portfolio:-        
        </h1>
        {portfolio.stocks.map((stock,index)=>(
          <ul key={index}>
            <li>Stock Name: {stock.stockName}</li>
            <li>Stock Quantity: {stock.totalQuanityPerStock}</li>
            <li>Stock Price: {stock.gainPerStock}</li>
          </ul>
        ))}
        <h2>Total Gain: {portfolio.totalGain}</h2>
       </>
      )}
    </div>
  );
}

export default UserDashboard;

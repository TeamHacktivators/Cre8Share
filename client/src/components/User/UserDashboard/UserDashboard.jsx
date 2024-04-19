import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockList from '../../StockList/StockList';
const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8000/api/v1/usersAPI', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
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
          {/* Render other user data properties as needed */}
        </div>
        <h1>
          Stock List         
        </h1>
        <StockList/>
       </>
      )}
    </div>
  );
}

export default UserDashboard;

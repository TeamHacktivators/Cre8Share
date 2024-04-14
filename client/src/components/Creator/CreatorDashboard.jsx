import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const CreatorDashboard = () => {
  const location = useLocation();
  const [creatorData, setCreatorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      localStorage.setItem('token', token);
      fetchCreatorData(token);
    }
  }, [location]);

  const fetchCreatorData = async (token) => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/creatorsAPI', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCreatorData(response.data);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching creator data:', error);
      setLoading(false); 
    }
  };

  return (
    <div>
      <h3 style={{ fontSize: 24, textAlign: 'center' }}>Welcome To Creator Dashboard</h3>
      {loading ? (
        <div>Loading...</div>
      ) : creatorData ? (
        <div>
          <p>Creator Name: {creatorData.name}</p>
          <p>Email: {creatorData.email}</p>
          <p>Channel Name: {creatorData.channelName}</p>
          <p>Channel ID: {creatorData.channelId}</p>
          <img src={creatorData.channelImage} alt='Channel Image'/>
        </div>
      ) : (
        <div>No creator data found.</div>
      )}
    </div>
  );
};

export default CreatorDashboard;

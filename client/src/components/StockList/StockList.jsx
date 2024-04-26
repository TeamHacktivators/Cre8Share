import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';
import './StockListPage.css'; // Import CSS file for styling

const StockListPage = () => {
  const [shares, setShares] = useState([]);
  const [selectedShare, setSelectedShare] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(true);

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
        setShares(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stocks:", error);
      }
    };

    fetchStocks();
  }, []);

  const openModal = (share) => {
    setSelectedShare(share);
    setQuantity(0);
    setModalIsOpen(true);
    setWarning('');
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleBuy = () => {
    if (quantity > selectedShare.quantity) {
      setWarning('Quantity exceeds available quantity!');
      return;
    }
    const buyStock = async () => {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `http://localhost:8000/users/buy/${selectedShare._id}`,
          { quantity },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // setShares(shares.map(share => {
        //   if (share.id === selectedShare.id) {
        //     return {
        //       ...share,
        //       quantity: share.quantity - quantity,
        //     };
        //   }
        //   return share;
        // }));

        buyStock();
      } catch (error) {
        console.error("Error buying stock:", error);
      }
    }
    closeModal();
  };

  return (
    <div className="stock-market-container">
      <h1>Stock Market</h1>
      <div className="share-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          shares.map((share) => (
            <div key={share.id} className="share">
              <h2>{share.name}</h2>
              <p>Price: ${share.currentPrice}</p>
              <p>Available Quantity: {share.unsold}</p>
              <p>Creator: {share.creator.channelName}</p>
              <button onClick={() => openModal(share)}>Buy</button>
            </div>
          ))
        )}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <h2>Buy {selectedShare && selectedShare.name}</h2>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min={0}
          max={selectedShare && selectedShare.quantity}
        />
        {warning && <p className="warning">{warning}</p>}
        <button onClick={handleBuy} disabled={quantity > (selectedShare?.quantity || 0)}>
          Buy
        </button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default StockListPage;

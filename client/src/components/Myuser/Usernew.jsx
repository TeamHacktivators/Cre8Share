import React, { useEffect, useState } from "react";
import axios from "axios";
import { Usernewdata, Portfolio } from "./Usernewdata";
import "./Usernew.css";
import { Link } from "react-router-dom";
const Usernew = () => {
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(true);
  const [portfolio, setPortfolio] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8000/api/v1/usersAPI",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const portfolioResponse = await axios.get(
          "http://localhost:8000/api/v1/usersAPI/getPortfolio",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setPortfolio(portfolioResponse.data);
        setUserData(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  // Render loading state if data is not available yet
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="Sidebar">
        <ul>
          {Usernewdata.map((val, key) => {
            return (
              <li key={key} style={{ listStyleType: "none" }}>
                <div style={{ padding: 12, color: "aliceblue", fontSize: 23 }}>
                  {val.title === "Buy Stocks" ? (
                    <Link to="/Myuser/StockListPage" style={{color:"white"}}>Buy Stocks</Link>
                  ) : (
                    val.title
                  )}

                  <br />
                  {"_________________"}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="main-menu">
        <div className="upperpart">
          <div className="upperpartone">
            Portfolio
            <p>Total Gain: - {portfolio.totalGain}</p>
            <p>Total Quantity :- {portfolio.totalQuantity}</p>
          </div>
          <div className="upperpartwo">
            About
            <p>Name:- {userData.name} </p>
            <p>Email:- {userData.email}</p>
          </div>
          <div className="upperpartthree">Prices</div>
        </div>
        <h3 style={{ marginLeft: 300, fontSize: 25, marginTop: 10 }}>
          Channels Listed
        </h3>
        <div className="lowerpart">
          <ul>
            {portfolio.stocks.map((stock, key) => {
              return (
                <li key={key} style={{ listStyleType: "none" }}>
                  {" "}
                  <div
                    style={{ padding: 16, color: "black", fontSize: 23 }}
                    className="listitems"
                  >
                    {stock.stock.name}
                  </div>
                  <p>Current Price :- {stock.stock.currentPrice}</p>
                  <p>Gain:- {stock.gainPerStock}</p>
                  <p>Quantity:- {stock.totalQuantityPerStock}</p>
                  <p></p>
                </li>
              );
            })}
          </ul>
          <ul>
            {portfolio.stocks.map((stock, key) => {
              return (
                <li key={key} style={{ listStyleType: "none" }}>
                  {" "}
                  <div>
                    <Link to="/" className="buttonSell" type="submit">
                      + Sell Shares
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>

          <Link to="/" className="button" type="submit">
            {" "}
            Load More{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Usernew;

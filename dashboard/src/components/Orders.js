import React, { useState, useEffect } from "react";

import axios from "axios";

const Orders = () => {

    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3002/allOrders").then((res) => {
        console.log(res.data);
        setAllOrders(res.data);
  
      });
    }, []);
  
  return (
    <>
      <h3 className="title">({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((order, index) => {
            return (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price.toFixed(2)}</td>
                <td>{order.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>

      {allOrders.length === 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      )}
    </>
  );
};

export default Orders;
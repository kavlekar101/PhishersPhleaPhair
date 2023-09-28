import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ViewOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [order, setOrder] = useState(location.state.order);

  const handleSubmit = (e) => {
    navigate("/purchase/viewConfirmation", {state: { order: order }});
  };

  return (
  <div>
    <h3>Order Summaray:</h3>
    <table class="center">
      <tr>
        <th>Item</th>
        <th>Quantity</th>
      </tr>
      <tr>
        <td>Product 1</td>
        <td>{order.buyQuantity[0]}</td>
      </tr>
      <tr>
        <td>Product 2</td>
        <td>{order.buyQuantity[1]}</td>
      </tr>
    </table>
    <h3>Payment Information:</h3>
    <table class="center">
      <tr>
        <th>Credit Card Number</th>
        <th>Expiration Date</th>
        <th>cvv Code</th>
        <th>Card Holder Name</th>
      </tr>
      <tr>
        <td>{order.credit_card_number}</td>
        <td>{order.expir_date}</td>
        <td>{order.cvvCode}</td>
        <td>{order.card_holder_name}</td>
      </tr>
    </table>
    <h3>Shipping Information:</h3>
    <table class="center">
      <tr>
        <th>Name</th>
        <th>Address Line 1</th>
        <th>Address Line 2</th>
        <th>City</th>
        <th>State</th>
        <th>Zip</th>
      </tr>
      <tr>
        <td>{order.card_holder_name}</td>
        <td>{order.address_1}</td>
        <td>{order.address_2}</td>
        <td>{order.city}</td>
        <td>{order.state}</td>
        <td>{order.zip}</td>
      </tr>
    </table>
    <button onClick={handleSubmit} className='submit'>Confirm</button>
  </div>
  );
};

export default ViewOrder;

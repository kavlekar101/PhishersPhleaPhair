import React from "react";
import {useNavigate} from 'react-router-dom'
import {order} from './purchaseEntry'
import {setOrder} from './purchaseEntry'

const ShippingEntry = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {

    navigate('/purchase/viewOrder', {order: order, setOrder: setOrder})
  };

  return (
    <div>
      <h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="string"
            required
            onChange = { (e) => { order.card_holder_name = e.target.value; } }
          />
          <br/>
          <label>Address 1</label>
          <input
            type="string"
            required
            onChange = { (e) => { order.adress_1 = e.target.value; } }
          />
          <br/>
          <label>Address 2</label>
          <input
            type="string"
            required
            onChange = { (e) => { order.adress_2 = e.target.value; } }
          />
          <br/>
          <label>City</label>
          <input
            type="string"
            required
            onChange = { (e) => { order.city = e.target.value; } }
          />
          <br/>
          <label>State</label>
          <input
            type="string"
            required
            onChange = { (e) => { order.state = e.target.value; } }
          />
          <br/>
          <label>Zip code</label>
          <input
            type="number"
            required
            onChange = { (e) => { order.zip = e.target.value; } }
          />
          <button className='submit'>Submit</button>
        </form>
      </h1>
    </div>
  );
};

export default ShippingEntry;

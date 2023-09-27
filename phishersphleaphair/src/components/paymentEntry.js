import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PaymentEntry = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [order, setOrder] = useState(location.state.order);

    const handleSubmit = (e) => {
      navigate("/purchase/shippingEntry", {state: { order: order }});
    };

    return (
        <div>
            <h1>
                product 1 {location.state.order.buyQuantity[0]}
                <br/>
                product 2 {location.state.order.buyQuantity[1]}
            </h1>
            <form onSubmit={handleSubmit}>
                <label>Card Number</label>
                <input
                    type="string"
                    required
                    onChange={(e) => 
                        {order.credit_card_number = e.target.value;}}
                />
                <br/>
                <label>Expiration Date</label>
                <input
                    type="number"
                    required
                    onChange={(e) => 
                        {order.expir_date = e.target.value;}}
                />
                <br/>
                <label>CVV Code</label>
                <input
                    type="number"
                    required
                    onChange={(e) => 
                        {order.cvvCode = e.target.value;}}
                />
                <br/>
                <label>Card Holder Name</label>
                <input
                    type="string"
                    required
                    onChange={(e) => 
                        {order.card_holder_name = e.target.value;}}
                />
                <br/>
                <button className='button'>Continue</button>
            </form>
        </div>
    );
};

export default PaymentEntry;
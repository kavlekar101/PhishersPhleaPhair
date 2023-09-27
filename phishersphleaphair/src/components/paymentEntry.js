import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PaymentEntry = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      navigate("/purchase/shippingEntry", { order: location.order, setOrder: location.setOrder });
    };

    return (
        <div>
            <h1>
                product 1 {location.state.order.buyQuantity[0]}
                product 2 {location.state.order.buyQuantity[1]}
            </h1>
            <form onSubmit={handleSubmit}>
                <label>Card Number</label>
                <input
                    type="string"
                    required
                    onChange={(e) => 
                        {location.order.credit_card_number = e.target.value;}}
                />
                <br/>
                <label>Expiration Date</label>
                <input
                    type="number"
                    required
                    onChange={(e) => 
                        {location.order.expir_date = e.target.value;}}
                />
                <br/>
                <label>CVV Code</label>
                <input
                    type="number"
                    required
                    onChange={(e) => 
                        {location.order.cvvCode = e.target.value;}}
                />
                <br/>
                <label>Card Holder Name</label>
                <input
                    type="string"
                    required
                    onChange={(e) => 
                        {location.order.card_holder_name = e.target.value;}}
                />
                <br/>
                <button className='button'>Continue</button>
            </form>
        </div>
    );
};

export default PaymentEntry;
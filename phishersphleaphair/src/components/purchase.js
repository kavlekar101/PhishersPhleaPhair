import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Purchase = () => {
    let title = 'purchase';
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '',
        card_holder_name: '', adress_1: '', address_2: '', city: '', state: '', zip: '',
    });
    const navigate = useNavigate();

    // React.useEffect(() => {
    //     console.log('order: ');
    //     console.log('order: ', order);
    // }, [order]);

    const handleSubmit = (e) => {
        console.log(order);
        navigate("/purchase/paymentEntry", { state: { order: order } });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Product 1</label>
                <input
                    type="number"
                    required
                    onChange={(e) => 
                        {order.buyQuantity[0] = e.target.value;}}
                />
                <br/>
                <label>Product 2</label>
                <input
                    type="number"
                    required
                    onChange={(e) => 
                        {order.buyQuantity[1] = e.target.value;}}
                />
                <br/>
                <button className='button'>Pay</button>
            </form>
        </div>
    );
};

export default Purchase;
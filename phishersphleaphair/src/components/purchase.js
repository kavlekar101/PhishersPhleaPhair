import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Purchase = () => {
    let title = 'purchase';
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '',
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log(order);
        navigate("/purchase/paymentEntry", { state: { order: order } });
    }

    useEffect(() => {
        // query the order info
        axios.get('http://localhost:7000/get_item', {
            params: {}
        }).then((data) => {
            const data_ = JSON.parse(JSON.stringify(data.data));
            data_.forEach(order_ => {
                order.buyQuantity[order_.Id - 1] = order_.quanity;
            });
            setOrder({...order});
        });
    }, []);

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

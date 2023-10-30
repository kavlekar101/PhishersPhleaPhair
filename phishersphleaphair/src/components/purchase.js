import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Purchase = () => {
    // let title = 'purchase';
    // eslint-disable-next-line
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0], credit_card_number: '', expir_date: '', cvvCode: '',
        card_holder_name: '', address_1: '', address_2: '', city: '', state: '', zip: '',
    });
    const navigate = useNavigate();

    const purchaseHandler = (e) => {
        e.preventDefault();
        const array1 = [1,2];
        axios
        .post ("http://localhost:7001/update_quanity", {
            names: array1, 
            quanity: order.buyQuantity, user_uid: -1})
        .then((data)=>{
            const res_data = data.data;
            console.log(res_data);
            if (res_data.length > 0){
                alert(res_data);
            } else {
                navigate('/purchase/paymentEntry', { state: { order: order } });
            }
        });
        // .catch((e) => {alert("failed", e);});
    }

    useEffect(() => {
      // query the order info
      axios
        .get("http://localhost:7001/get_item", {
          params: {},
        })
        .then((data) => {
          // eslint-disable-next-line
          const data_ = JSON.parse(JSON.stringify(data.data));
          //   data_.forEach((order_) => {
          //     order.buyQuantity[order_.Id - 1] = order_.quanity;
          //   });
          //   setOrder({ ...order });
        })
        .catch((error) => {
          console.log(error);
        });
    // eslint-disable-next-line
    }, []);

    return (
        <div>
            <form onSubmit={purchaseHandler}>
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

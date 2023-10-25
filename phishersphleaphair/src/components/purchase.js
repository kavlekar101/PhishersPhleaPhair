import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Purchase = (validate) => {
    let title = 'purchase';
    const [order, setOrder] = useState({
        buyQuantity: [0,0,0,0,0],
        credit_card_number: '',
        expir_date: '',
        cvvCode: '',
        card_holder_name: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        zip: ''
    });
    const navigate = useNavigate();

    const [values, setValues] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    function validate(values) {
        let errors = {};
        if (!values.p1 && !values.p2) {
            errors.emptyOrder = "You must select at least one item to purchase";
        }
        return errors;
    }

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            navigate("/purchase/paymentEntry", { state: { order: order } });
        }
    }, [errors, isSubmitting, navigate, order]);
        
//        var orderQuanity = [order.buyQuantity[0], order.buyQuantity[1]];
//        var inventoryQuantity;
//        // query the order info
//        axios.get('http://localhost:7000/get_item', {
//            params: {}
//        }).then((data) => {
//            const data_ = JSON.parse(JSON.stringify(data.data));
//            inventoryQuantity = [data_[0].quanity, data_[1].quanity];
//            setOrder({...order});
//        });
//    }//, [order]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Product 1</label>
                <input
                    type="number"
                    defaultValue="0"
                    min="0"
                    required
                    onChange={(e) => 
                        {order.buyQuantity[0] = e.target.value;
                        values.p1 = e.target.value;}}
                />
                <br/>
                <label>Product 2</label>
                <input
                    type="number"
                    defaultValue="0"
                    min="0"
                    required
                    value={
                        values.p2
                    }
                    onChange={(e) => 
                        {order.buyQuantity[1] = e.target.value;
                        values.p2 = e.target.value;}}
                />
                <br/>
                <button className='button'>Pay</button>
            </form>
        </div>
    );
};

export default Purchase;

import React from "react";

const purchase = () => {
    let title = 'purchase';
    const [order, setOrder] = useState({
        buyQuanity: [0,0,0,0,0], credit_card_numer: '', expir_date: '', cvvCode: '',
        card_holder_name: '', adress_1: '', address_2: '', city: '', state: '', zip: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        navigate('/purchase/paymentEntry', {order: order, setOrder: setOrder})
    }

    console.log('order: ', order);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    required
                    onChange={(e) => 
                        {order.buyQuanity[0] = e.target.value;}}
                />
                <br/>
                <label>Product 2</label>
                <input
                    type="number"
                    required
                    onChange={(e) => 
                        {order.buyQuanity[1] = e.target.value;}}
                />
                <br/>
                <button className='button'>Pay</button>
            </form>
        </div>
    );
};

export default purchase;
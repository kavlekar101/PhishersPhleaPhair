import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PaymentEntry = () => {

    const location = useLocation();
    const [creditCardNumber, setCreditCardNumber] = React.useState("");
    const [expirationDate, setExpirationDate] = React.useState("");
    const [cvv, setCvv] = React.useState("");
    const [cardHolderName, setCardHolderName] = React.useState("");
    const navigate = useNavigate();

    React.useEffect(() => {
        setCreditCardNumber(location.state.order.creditCardNumber);
        setExpirationDate(location.state.order.expirationDate);
        setCvv(location.state.order.cvv);
        setCardHolderName(location.state.order.cardHolderName);
        navigate("/purchase/shippingEntry", {state: {order: location.state.order}})
    }, [navigate, location.state.order]);

    return (
        <div>
            <h1>
                product 1 {location.state.order.buyQuantity[0]}
                product 2 {location.state.order.buyQuantity[1]}
            </h1>
            <p>
                credit card number: {creditCardNumber}
                expiration date: {expirationDate}
                cvv: {cvv}
                card holder name: {cardHolderName}
            </p>
        </div>
    );
};

export default PaymentEntry;
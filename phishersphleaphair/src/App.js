import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Purchase from './components/purchase';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';

import SampleFooter from "./components/footer";
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';

import background from './images/fishBackground.png'

function App() {


  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        position: "fixed", // This will position the element relative to the viewport
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      className="App"
    >
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/" element={<Navigate replace to="/purchase" />} />
            <Route path="/purchase/paymentEntry" element={<PaymentEntry />} />
            <Route path="/purchase/shippingEntry" element={<ShippingEntry />} />
            <Route path="/purchase/viewOrder" element={<ViewOrder />} />
            <Route
              path="/purchase/viewConfirmation"
              element={<ViewConfirmation />}
            />
          </Routes>
        </div>
        <SampleFooter />
      </Router>
    </div>
  );
  
}

export default App;



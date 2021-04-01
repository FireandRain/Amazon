import React from 'react';
import Subtotal from './Subtotal';
import '../style/_checkout.scss';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2020/img/X_Site/BF20_Deals/XCM_Manual_1282705_1455352_UK_BFCM20_UK_BFW_ILM_3512951_650x45_1X_en_GB._CB417007272_.jpg" 
                    alt="checkout-banner"
                />

                <div className="checkout__title">
                    <h3>Your Shopping Basket</h3>
                </div>
                <div className="checkout__productListContainer">
                    <CheckoutProduct/>
                    <CheckoutProduct/>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

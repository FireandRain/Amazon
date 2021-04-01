import React from 'react'
import "../style/_checkout.scss";

function CheckoutProduct() {
    return (
        <div className="checkout__productList">
            <div className="checkout__productItem">
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg" 
                    alt="The-Lean-Startup"
                    className="product__image"
                />
                <div className="checkout__productItemInfo">
                    <p>The Lean Startup</p>
                        <p className="">
                            <small>£</small>
                            <strong>10</strong>
                        </p>
                    <div className="checkout__productItemInfo--ratings">
                        {Array(3)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct

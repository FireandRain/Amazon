import React from 'react'
import '../style/_subtotal.scss';
import CurrencyFormat  from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import {totalPrice} from "../reducer";


function Subtotal() {
// eslint-disable-next-line
    const [{ basket }, dispatch ] = useStateValue();

    return (
    <div className="subtotal">
        <CurrencyFormat 
            decimalScale={2}
            value={totalPrice(basket)}
            displayType={"text"}
            thousandSeparator={'true'}
            prefix={"£"}
            renderText={(value) => (
                <>
                    <p className="subtotal__title">
                        Subtotal ({basket?.length} items): 
                    <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small>
                </>
            )}
        />
        <button className="subtotal__checkoutBtn">Proceed to checkout</button>
    </div>
    )
};
export default Subtotal


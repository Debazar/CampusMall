import React from "react";
import "./Subtotal.css";
import CurrencyInput from 'react-currency-input-field';

function Subtotal(){
  return(
      <div className="subtotal">
         <CurrencyInput prefix="$"
            renderText = {(value)=> (
              <>
                <p>
                  Subtotal(0 items) : <strong>$0</strong>
                </p>
                <small className="subtotalGift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </>
            )}

            decimalScale={2}
            value = {0}
            displayType="text"
            thousandSeparator = {true}
         />
      </div>
  );
}

export default Subtotal;
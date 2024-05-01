import React from "react";
import "./Subtotal.css";
import CurrencyInput from 'react-currency-input-field';
import { UseStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Subtotal() {
  const [{ basket }, dispatch] = UseStateValue();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>${getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotalGift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <CurrencyInput
        prefix="$"
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
      />
    </div>
  );
}

export default Subtotal;

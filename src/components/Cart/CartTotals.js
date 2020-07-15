import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="conatiner">
        <div className="row">
          <div className="col-10 mx-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:${cartSubTotal}</span>
            </h5>
            <h5>
              <span className="text-title">tax:${cartTax}</span>
            </h5>
            <h5>
              <span className="text-title">total:${cartTotal}</span>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
import React from "react";
import './Paymentpage.css'; // Importing the CSS file

export default function Paymentpage() {
  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-7 cart-details"> {/* Left side for cart details */}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="h5">Shopping Cart</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/book_2.jpeg`} 
                        alt="Book 2"
                        className="rounded-3"
                        style={{ width: "120px" }}
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">Book Title 1</p>
                        <p className="mb-0">Author Name 1</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <div className="d-flex flex-row align-items-center">
                      <button className="btn-quantity">-</button>
                      <input
                        type="number"
                        className="input-quantity"
                        defaultValue={1}
                        min={0}
                      />
                      <button className="btn-quantity">+</button>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>$12.99</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/book_3.jpeg`} 
                        alt="Book 3"
                        className="rounded-3"
                        style={{ width: "120px" }}
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">Book Title 2</p>
                        <p className="mb-0">Author Name 2</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <div className="d-flex flex-row align-items-center">
                      <button className="btn-quantity">-</button>
                      <input
                        type="number"
                        className="input-quantity"
                        defaultValue={2}
                        min={0}
                      />
                      <button className="btn-quantity">+</button>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>$9.99</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-4 payment-options"> {/* Right side for payment options */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Payment Options</h5>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentOption" id="creditCard" />
                  <label className="form-check-label" htmlFor="creditCard">Credit Card</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentOption" id="debitCard" />
                  <label className="form-check-label" htmlFor="debitCard">Debit Card</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentOption" id="upi" />
                  <label className="form-check-label" htmlFor="upi">UPI</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="paymentOption" id="netBanking" />
                  <label className="form-check-label" htmlFor="netBanking">Net Banking</label>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-between">
                  <p className="mb-2">Subtotal</p>
                  <p className="mb-2">$22.98</p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">$2.99</p>
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-4">
                  <p className="mb-2">Total (tax included)</p>
                  <p className="mb-2">$25.97</p>
                </div>

                <button className="btn">Checkout - $25.97</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer section added here after all other content */}
      <footer className="footer">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} BookMart. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}

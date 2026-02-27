import React from 'react';

function OpenAccount() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 mb-3">Open a Zerodha Account</h1>
                <p className="mb-4">
                    Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades
                </p>
                <a
                    href="/signup"
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto", display: "inline-block" }}
                >
                    Signup Now
                </a>
            </div>
        </div>
    );
}

export default OpenAccount;

import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-12">
                    <h1>The Zerodha Universe</h1>
                    <p>
                        Extend your trading and investment experience even further with our
                        partner platforms
                    </p>
                </div>

                <div className="universe-grid w-100">
                    <div className="row justify-content-center">
                        <div className="col-6 col-sm-4 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
                            <img className="img-fluid universe-img" alt="Zerodha Fundhouse" src="media/images/zerodhafundhouse.png" />
                            <p className="text-small text-muted mt-2">Thematic investment platform</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
                            <img className="img-fluid universe-img" alt="Sensibull" src="media/images/sensibulllogo.svg" />
                            <p className="text-small text-muted mt-2">Options & strategies</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
                            <img className="img-fluid universe-img" alt="Tijori" src="media/images/tijori.svg" />
                            <p className="text-small text-muted mt-2">Portfolio tools</p>
                        </div>

                        <div className="col-6 col-sm-4 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
                            <img className="img-fluid universe-img" alt="Streak" src="media/images/streak-logo.png" />
                            <p className="text-small text-muted mt-2">Algo trading</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
                            <img className="img-fluid universe-img" alt="Smallcase" src="media/images/smallcase-logo.png" />
                            <p className="text-small text-muted mt-2">Curated portfolios</p>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 p-3 mt-4 d-flex flex-column align-items-center">
                            <img className="img-fluid universe-img" alt="Ditto" src="media/images/ditto-logo.png" />
                            <p className="text-small text-muted mt-2">Copy trading</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 text-center mt-4">
                    <button
                        className="p-2 btn btn-primary fs-5 mb-5"
                        style={{ width: "200px" }}
                    >
                        Signup up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Universe;
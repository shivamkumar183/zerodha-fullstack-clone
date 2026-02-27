import react from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-5 " id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className="row p-5 m-3">
                <div className="col-6 p-3">
                    <h1 className="fs-3 pb-3 ">
                        Search for an answer or browse help topics <br />
                        to create a ticket
                    </h1>
                    <input placeholder="Eg. how do I activate F&O" style={{ width: '75%' }} />
                    <br />
                    <br />
                    <a href="" className="me-3">Track account opening</a>
                    <a href="" className="me-3">Track segment activation</a>
                    <a href="" className="me-3">Intraday margins</a>
                    <br />
                    <a href="" className="me-3">Kite user manual</a>

                </div>
                <div className="col-6 p-3">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li>
                            <a href="" style={{ lineHeight: "2.5" }}>Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href="" style={{ lineHeight: "2.5" }}>Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
export default Hero;
import React from "react";
import NavBar from './nav';
import Slider from './slider';
import Header from './header';
import Footer from './footer';
import card1 from '../imgs/card1.PNG';
import card2 from '../imgs/card2.PNG';
import card3 from '../imgs/card3.PNG';
import card4 from '../imgs/card4.PNG';
import { Link } from "react-router-dom";

const DashboardComponent = () => {
    return <div>
        <NavBar />
        <Header />

        <div className="center">
            <Slider />

            <div className="card" style={{ width: "18rem" }}>
                <Link to="/registration">
                    <img className="card-img-top" src={card1} alt="Card image cap" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">Eligibility Criteria</h5>
                    <p className="card-text color_red">Must have a PEC no* </p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <Link to="/registration">
                    <img className="card-img-top" src={card2} alt="Card image cap" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">Eligibility Criteria</h5>
                    <p className="card-text color_red">Must have a PEC no*
                        Monthly Salary Must be less then 75k*
                    </p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <Link to="/registration">
                    <img className="card-img-top" src={card3} alt="Card image cap" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">Eligibility Criteria</h5>
                    <p className="card-text color_red">Must have a PEC no*
                        Gender Must Be Female* </p>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <Link to="/registration">
                    <img className="card-img-top" src={card4} alt="Card image cap" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">Eligibility Criteria</h5>
                    <p className="card-text color_red">Must have a PEC no*
                        Must have at least 5 years authentic
                        work experience* </p>
                </div>
            </div>

        </div>

        {/* <!-- Footer --> */}
        <Footer />

    </div>
}

export default DashboardComponent;

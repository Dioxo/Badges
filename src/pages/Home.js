import React from "react";
import logo from "../images/platziconf-logo.svg";
import hero from "../images/astronauts.svg";
import "./styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <div className="Home__container">
        <div className="Home__info">
          <img src={logo} alt="" />
          <h1>Print your badges</h1>
          <h2>
            The easiest way to manage your <br />
            <strong>conference</strong>
          </h2>
          <Link to="/badges">
            <button className="btn btn-primary">Start now</button>
          </Link>
        </div>
        <img className="Home__hero" src={hero} alt="" />
      </div>
    </React.Fragment>
  );
};

export default Home;

import React from "react";
import Error from "../images/404 Error.svg";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound__Container">
      <img src={Error} alt="404 NOT FOUND" />
    </div>
  );
}

export default NotFound;

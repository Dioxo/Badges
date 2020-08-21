import React from "react";
import md5 from "md5";
import "./styles/Badge.css";
import logo from "../images/logo.svg";

function Badge({ firstName, lastName, email, jobTitle, twitter }) {
  return (
    <div className="Badge">
      {/* Header */}
      <div className="Badge__header">
        <img src={logo} alt="Logo Platzi conf" />
      </div>

      {/* Username and profile pic */}
      <div className="Badge__section-name">
        <img
          className="Badge__avatar"
          src={`https://www.gravatar.com/avatar/${md5(email)}?s=120&d=retro`}
          alt="User profile"
        />
        <h1 className="Badge__section-name">
          {firstName} <br /> {lastName}
        </h1>
      </div>

      {/* User description */}
      <div className="Badge__section-info">
        <h3>{jobTitle}</h3>
        <div>@{twitter}</div>
      </div>

      {/* Footer */}
      <div className="Badge__footer">
        <p>#PlatziConf</p>
      </div>
    </div>
  );
}

export default Badge;

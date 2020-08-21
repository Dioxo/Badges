import React, { useState } from "react";
import BadgeForm from "../components/BadgeForm";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import Badge from "../components/Badge";

function useHandleChange(initVal) {
  const [value, setValue] = useState(initVal);

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return [value, handleChange];
}

function BadgeNew() {
  const userInfoObj = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    twitter: "",
  };

  const [userInfo, handleChangeUserInfo] = useHandleChange(userInfoObj);

  return (
    <React.Fragment>
      <div className="BadgeNew__hero">
        <img
          className="BadgeNew__hero_image img-fluid"
          src={header}
          alt="Logo"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={userInfo.firstName || "Alex"}
              lastName={userInfo.lastName || "Molinares"}
              email={userInfo.email || "amolinares19@gmail.com"}
              jobTitle={userInfo.jobTitle || "Software Developper"}
              twitter={userInfo.twitter || "dioxo"}
            />
          </div>
          <div className="col-6">
            <BadgeForm
              title="New"
              handleChangeUserInfo={handleChangeUserInfo}
              userInfo={userInfo}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeNew;

import React, { useEffect } from "react";
import BadgeForm from "../components/BadgeForm";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";
import Badge from "../components/Badge";
import useHandleForm from "../hooks/useHandleForm";

function BadgeEdit({ match }) {
  const userInfoObj = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    twitter: "",
  };

  const [userInfo, handleChangeUserInfo] = useHandleForm(userInfoObj);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${match.params.badgeId}`
      );

      const data = await response.json();

      const [firstName, lastName] = data.name.split(" ");

      handleChangeUserInfo({
        firstName,
        lastName,
        jobTitle: `${data.status} - ${data.species}`,
        email: data.name,
        twitter: data.name,
      });
    })();
  }, [handleChangeUserInfo, match.params.badgeId]);

  return (
    <React.Fragment>
      <div className="BadgeEdit__hero">
        <img
          className="BadgeEdit__hero_image img-fluid"
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
              title="Edit"
              handleChangeUserInfo={handleChangeUserInfo}
              userInfo={userInfo}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeEdit;

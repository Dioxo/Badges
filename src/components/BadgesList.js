import React from "react";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";

export const BadgesListItem = ({ badge }) => {
  return (
    <div className="BadgesList__container">
      <img
        className="BadgesList__avatar"
        src={badge.image}
        alt="User profile"
      />
      <div className="BadgesList__user_info">
        <h1>{badge.name}</h1>
        <div className="BadgesList__twitter">
          <img src="https://abs.twimg.com/favicons/twitter.ico" alt="twitter" />
          <h2>@{badge.name}</h2>
        </div>
        <p>
          {badge.species} - {badge.origin.name}
        </p>
      </div>
    </div>
  );
};

function BadgesList({ badges }) {
  return (
    <ul className="list-unstyled">
      {badges.length > 0 &&
        badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesList">
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}/edit`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      {badges.length === 0 && <div className="h1">No badges were found</div>}
    </ul>
  );
}

export default BadgesList;

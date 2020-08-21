import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";

const Badges = () => {
  const [data, setData] = useState({
    error: false,
    loading: true,
    page: 1,
    users: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${data.page}`
        );
        const json = await response.json();
        setData((d) => {
          return {
            ...d,
            loading: false,
            users: d.users.concat(json.results),
          };
        });
      } catch (e) {
        setData((d) => {
          return { ...d, error: true, loading: false };
        });
      }
    })();
  }, [data.page]);

  if (data.loading) {
    return <PageLoading />;
  }

  if (data.error) {
    return <h1>OH... ERROR</h1>;
  }

  return (
    <React.Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img src={confLogo} alt="Conf Logo" />
          </div>
        </div>
      </div>

      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary ">
            New Badge
          </Link>
        </div>

        <div className="Badges__list">
          <BadgesList badges={data.users} />
        </div>
        {data.users.length > 0 && (
          <button
            onClick={() => {
              setData((d) => {
                return { ...d, page: d.page + 1 };
              });
            }}
            className="btn btn-primary"
          >
            Load more
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Badges;

import React from "react";

function BadgeForm({ title, handleChangeUserInfo, userInfo }) {
  function handleClick() {
    console.log(userInfo);
  }

  return (
    <div>
      <h1>{title} Attendant</h1>
      <form>
        <div className="form-group">
          <label>First name</label>
          <input
            onChange={handleChangeUserInfo}
            value={userInfo.firstName}
            type="text"
            name="firstName"
            className="form-control"
          />
          <label>Last name</label>
          <input
            onChange={handleChangeUserInfo}
            value={userInfo.lastName}
            type="text"
            name="lastName"
            className="form-control"
          />
          <label>Email</label>
          <input
            onChange={handleChangeUserInfo}
            value={userInfo.email}
            type="email"
            name="email"
            className="form-control"
          />
          <label>Job Title</label>
          <input
            onChange={handleChangeUserInfo}
            value={userInfo.jobTitle}
            type="text"
            name="jobTitle"
            className="form-control"
          />
          <label>Twitter</label>
          <input
            onChange={handleChangeUserInfo}
            value={userInfo.twitter}
            type="text"
            name="twitter"
            className="form-control"
          />
        </div>

        <button onClick={handleClick} type="button" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default BadgeForm;

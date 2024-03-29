import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <div style={{ width: "70%", margin: "50px auto", textAlign: "center" }}>
        <h1 className="x-large text-primary">
          <i className="fas fa-exclamation-triangle" /> Page Not Found
        </h1>
        <p className="large">Sorry, this page does not exist</p>
      </div>
    </Fragment>
  );
};

export default NotFound;

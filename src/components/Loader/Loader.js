import React from "react";
import { Spinner } from "reactstrap";

const Loader = ({ isLoading, text, hidden }) => {
  if (!hidden) {
    if (isLoading) {
      return (
        <div>
          <Spinner color="danger" type="grow" className="mx-auto d-block" />
        </div>
      );
    } else {
      return <h5 className="text-center text-success">{text}</h5>;
    }
  } else {
    return null;
  }
};

export default Loader;

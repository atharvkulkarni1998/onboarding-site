import React from "react";

const pageHeader = (props) => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl font-semibold mb-4">{props.headers.mainTitle}</h1>
      <h2 className="text-base">{props.headers.subTitle}</h2>
    </div>
  );
};

export default pageHeader;

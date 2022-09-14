import React from "react";

export default function Alert(props) {
  return (
    //since initially itis null so error will arise to tackle that we have to give
    //it will first evaluate props.alert and if it is null then it will not evaluate further and if it is null then it will evaluate further portion and return that portion...
    <div style={{height:'50px'}}>
    {props.alert && (
      <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.msg}</strong>
      </div>
      </div>
    )}
    </div>
  );
}


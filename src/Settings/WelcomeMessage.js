import React from "react";
import { AppContext } from "../App/AppProvider";

export default function() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? <div>Welcome to Cryptodash</div> : null
      }
    </AppContext.Consumer>
  );
}

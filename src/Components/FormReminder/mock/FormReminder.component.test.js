import React from "react";
import ReactDOM from "react-dom";
import FormReminder from "../FormReminder.component";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FormReminder  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

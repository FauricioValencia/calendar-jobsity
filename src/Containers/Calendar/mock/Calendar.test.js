import React from "react";
import ReactDOM from "react-dom";
import Calendar from "../Calendar.container";
import reminders from "./Calendar.template";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Calendar state={reminders} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

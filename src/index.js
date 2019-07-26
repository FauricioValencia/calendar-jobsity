import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import ReminderCalendar from "./Pages/ReminderCalendar/ReminderCalendar.page";
import * as serviceWorker from "./serviceWorker";

// !REDUX
import { Provider } from "react-redux";
import configureStore from "./Shared/Redux/configure_store.store";

// ? Styles

import "./Assets/Styles/global.scss"

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <ReminderCalendar />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

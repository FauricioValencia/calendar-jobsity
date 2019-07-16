import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { createReminder } from "../../../Shared/Redux/Actions/reminder.action";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it("Create reminder", () => {
  const store = mockStore({
    reminders: [
      {
        id: 0,
        cityReminder: "bogota",
        selectDay: 10,
        textReminder: "hola2",
        timeReminder: "20:15",
        color: "blue",
        timeMilliseconds: 72900
      },
      {
        id: 1,
        cityReminder: "cali",
        selectDay: 10,
        textReminder: "hola",
        timeReminder: "13:15",
        color: "red",
        timeMilliseconds: 47700
      },
      {
        id: 2,
        cityReminder: "cali",
        selectDay: 10,
        textReminder: "hola",
        timeReminder: "13:15",
        color: "red",
        timeMilliseconds: 47700
      },
      {
        id: 3,
        cityReminder: "cali",
        selectDay: 10,
        textReminder: "hola",
        timeReminder: "13:15",
        color: "red",
        timeMilliseconds: 47700
      },
      {
        id: 4,
        cityReminder: "cali",
        selectDay: 10,
        textReminder: "hola",
        timeReminder: "13:15",
        color: "red",
        timeMilliseconds: 47700
      },
      {
        id: 5,
        cityReminder: "cali",
        selectDay: 15,
        textReminder: "hola2",
        timeReminder: "13:20",
        color: "red",
        timeMilliseconds: 48000
      }
    ]
  });
  const isCreate = true;
  let body = {
    id: 5,
    cityReminder: "cali",
    selectDay: 15,
    textReminder: "hola2",
    timeReminder: "13:20",
    color: "red",
    timeMilliseconds: 48000,
    timeMilliseconds: 300
  };
  if (isCreate) {
    store.dispatch(createReminder({ ...body, id: 2 }));
  }
});

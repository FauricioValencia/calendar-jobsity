import { handleActions } from "redux-actions";

const initialState = {
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
      selectDay: 15,
      textReminder: "hola2",
      timeReminder: "13:20",
      color: "red",
      timeMilliseconds: 48000
    }
  ]
};
export default handleActions(
  {
    CREATE_REMINDER: (state, action) => {
      return { ...state, reminders: state.reminders.concat(action.payload) };
    },
    UPDATE_REMINDER: (state, action) => {
      return { ...state, reminders: action.payload };
    },
    DELETE_REMINDER: (state, action) => {
      return { ...state, reminders: action.payload };
    },
    DELETE_ALL_REMINDERS: (state, action) => {
      return { ...state, reminders: action.payload };
    },
    DELETE_REMINDERS_DAY: (state, action) => {
      return { ...state, reminders: action.payload };
    }
  },
  initialState
);

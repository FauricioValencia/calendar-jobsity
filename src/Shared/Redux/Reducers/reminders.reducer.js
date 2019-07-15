import { handleActions } from "redux-actions";

const initialState = {
  reminders: [
    {
      id: 0,
      cityReminder: "cali",
      selectDay: 10,
      textReminder: "hola",
      timeReminder: "13:15",
      color: "red"
    },
    {
      id: 1,
      cityReminder: "cali",
      selectDay: 10,
      textReminder: "hola2",
      timeReminder: "13:15",
      color: "red"
    },
    {
      id: 2,
      cityReminder: "bogota",
      selectDay: 18,
      textReminder: "hola2",
      timeReminder: "20:15",
      color: "blue"
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

  },
  initialState
);

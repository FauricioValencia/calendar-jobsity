import { createActions } from "redux-actions";

// import config from "config";
// const KEYWAHTER= config.get("keyWhater");

export const {
  createReminder,
  updateReminder,
  deleteReminder,
  deleteAllReminders,
  getWeather
} = createActions({
  CREATE_REMINDER: body => body,
  UPDATE_REMINDER: (reminders, body) => {
    let indextUpdate = reminders.findIndex(
      currentReminder => currentReminder.id === body.id
    );
    reminders[indextUpdate] = body;
    return reminders;
  },
  DELETE_REMINDER: (reminders, id) => {
    let indextDelete = reminders.findIndex(
      currentReminder => currentReminder.id === id
    );
    reminders.splice(indextDelete, 1);
    return reminders;
  },
  DELETE_ALL_REMINDERS: () => {
    return [];
  }
});

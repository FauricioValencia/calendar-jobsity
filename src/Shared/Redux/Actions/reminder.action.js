import { createActions } from "redux-actions";
export const {
  createReminder,
  updateReminder,
  deleteReminder,
  deleteAllReminders,
  deleteRemindersDay
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
  },
  DELETE_REMINDERS_DAY: (reminders, day) => {
    let newReminders = reminders.filter(reminder => reminder.selectDay !== day);
    return newReminders;
  }
});

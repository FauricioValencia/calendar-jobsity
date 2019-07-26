import React from "react";
import "./calendar.scss";
import moment from "moment";

// ? compoenents
import DayCalendar from "../../Components/Calendar/DayCalendar/DayCalendar.component";

function Calendar(props) {
  const {
    openModalReminder,
    state,
    setIsCreate,
    deleteReminder,
    deleteReminderSpecifDay
  } = props;
  const {
    reminders: { reminders }
  } = state;
  const weekdays = moment.weekdays();
  const previusMommentContext = moment();
  const mommentContext = moment();

  const dayInMonth = () => mommentContext.daysInMonth();
  const daysInPreviosMonth = () => previusMommentContext.daysInMonth();
  const currentDay = () => mommentContext.format("D");

  // ! donde empieza la logica
  const firstDayOfMonth = () => {
    let dateContext = mommentContext;
    let firstDay = moment(dateContext)
      .startOf("month")
      .format("d");
    return firstDay;
  };

  const lastDaysOfMonth = () => {
    let lastDays = moment(mommentContext)
      .endOf("month")
      .format("d");
    return lastDays;
  };

  const weekNames = weekdays.map((day, key) => {
    return (
      <td key={key} className="week-day">
        {day}
      </td>
    );
  });

  let blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(
      <td key={i} className="empty-slot">
        <span className="single-day">{daysInPreviosMonth() - i}</span>
      </td>
    );
  }

  let lastBlanks = [];

  for (let i = 0; i < lastDaysOfMonth(); i++) {
    lastBlanks.push(
      <td key={i} className="empty-slot">
        <span className="single-day">{i + 1}</span>
      </td>
    );
  }
  const filterRemindersDay = day =>
    reminders.filter(element => element.selectDay === day);
  const updateReminder = (d, reminder) => {
    setIsCreate(false);
    openModalReminder(d, reminder);
  };
  let daysInMonth = [];
  for (let d = 1; d <= dayInMonth(); d++) {
    let className = d === currentDay() ? "day current-day" : "day";
    let reminders = filterRemindersDay(d);
    daysInMonth.push(
      <DayCalendar
        key={d}
        d={d}
        className={className}
        reminders={reminders}
        setIsCreate={() => setIsCreate(true)}
        openModalReminder={() => openModalReminder(d)}
        updateReminder={(d, reminder) => updateReminder(d, reminder)}
        deleteReminder={id => deleteReminder(id)}
        deleteReminderSpecifDay={day => deleteReminderSpecifDay(day)}
      />
    );
  }

  var totalSlots = [...blanks.reverse(), ...daysInMonth, ...lastBlanks];
  let rows = [];
  let cells = [];
  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      let insertRow = cells.slice();
      rows.push(insertRow);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });

  let trElems = rows.map((d, i) => {
    return (
      <tr key={i} className="container-days">
        {d}
      </tr>
    );
  });

  return (
    <div className="calendar-container">
      <table className="calendar">
        <thead />
        <tbody>
          <tr className="weekDays">{weekNames}</tr>
          {trElems}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;

import React, { useState, useEffect } from "react";
import "./calendar.css";
import moment from "moment";

// ? compoenents
import DayCalendar from "../../Components/Calendar/DayCalendar/DayCalendar.component";

function Calendar(props) {
  const { openModalReminder, state, setIsCreate, deleteReminder } = props;
  const {
    reminders: { reminders }
  } = state;
  const weekdays = moment.weekdays();
  const months = moment.months();
  const [previusMommentContext, setPreviusUseMomentContext] = useState(
    moment()
  );
  const [nextMommentContext, setNextUseMomentContext] = useState(moment());
  const [mommentContext, setUseMomentContext] = useState(moment());
  const [showMonthPopup, setShowMonthPopup] = useState(false);

  const month = () => mommentContext.format("MMMM");
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
  const changeMonth = (e, month) => {
    setShowMonthPopup(!showMonthPopup);
  };

  const setMonth = month => {
    blanks = [];
    let monthNo = months.indexOf(month);
    let dateContext = Object.assign({}, mommentContext);
    let finaDateContext = moment(dateContext).set("months", monthNo);
    // let previusMonth = moment(dateContext).set("months", monthNo - 1);
    // let nextMonth = moment(dateContext).set("months", monthNo + 1);

    // setPreviusUseMomentContext(previusMonth);
    setUseMomentContext(finaDateContext);
    // setNextUseMomentContext(nextMonth);
  };
  const onSelectiOnchange = (e, data) => {
    setMonth(data);
    props.onMonthChange && props.onMonthChange();
  };

  const SelectList = props => {
    let popup = props.data.map((data, key) => {
      return (
        <div key={data}>
          <a
            href="#"
            onClick={e => {
              onSelectiOnchange(e, data);
            }}
          >
            {data}
          </a>
        </div>
      );
    });
    return <div className="month-popup">{popup}</div>;
  };

  const MonthNav = () => {
    return (
      <span className="label.month" onClick={e => changeMonth(e, month)}>
        {month()}
        {showMonthPopup && <SelectList data={months} />}
      </span>
    );
  };

  const weekNames = weekdays.map((day, key) => {
    return (
      <td key={key} className="week-day">
        {day}
      </td>
    );
  });

  //! parte para hacer los dias del mes.
  let blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    // console.log('firstDayOfMonth: ', firstDayOfMonth());
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
    reminders.filter(element => element.selectDay == day);
  const updateReminder = (d, reminder) => {
    setIsCreate(false);
    openModalReminder(d, reminder);
  };
  let daysInMonth = [];
  for (let d = 1; d <= dayInMonth(); d++) {
    let className = d == currentDay() ? "day current-day" : "day";
    let reminders = filterRemindersDay(d);
    daysInMonth.push(
      <DayCalendar
        d={d}
        className={className}
        reminders={reminders}
        setIsCreate={() => setIsCreate(true)}
        openModalReminder={() => openModalReminder(d)}
        updateReminder={(d, reminder) => updateReminder(d, reminder)}
        deleteReminder={id => deleteReminder(id)}
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
      <tr key={i * 100} className="container-days">
        {d}
      </tr>
    );
  });

  return (
    <div className="calendar-container">
      <table className="calendar">
        <thead>
          <tr className="calendar-header">
            <td colSpan="20">
          <MonthNav />
          </td>
          </tr>
        </thead>
        <tbody>
          <tr className="weekDays">{weekNames}</tr>
          {trElems}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;

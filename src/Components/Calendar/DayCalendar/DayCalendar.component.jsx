import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Icon } from "antd";
import "./DayCalendar.styles.css";
function DayCalendar({
  d,
  className,
  reminders,
  setIsCreate,
  openModalReminder,
  updateReminder,
  deleteReminder,
  deleteReminderSpecifDay
}) {
  const [isHoverNewReminder, setIsHoverNewReminder] = useState(false);
  const [isHoverDeleteReminder, setIsHoverDeleteReminder] = useState(false);
  const [isHoverDeleteAllReminders, setIsHoverDeleteAllReminders] = useState(
    false
  );
  return (
    <td
      key={d}
      className={className}
      onMouseEnter={() => {
        setIsHoverNewReminder(true);
        setIsHoverDeleteAllReminders(true);
      }}
      onMouseLeave={() => {
        setIsHoverNewReminder(false);
        setIsHoverDeleteAllReminders(false);
      }}
    >
      <span className="single-day">{d}</span>
      {isHoverDeleteAllReminders && (
        <Icon
          className="anticon-delete-epa"
          type="delete"
          onClick={() => deleteReminderSpecifDay(d)}
        />
      )}
      <div className="reminders-container">
        {reminders
          .sort((a, b) => a.timeMilliseconds - b.timeMilliseconds)
          .map((reminder, index) => {
            const { color, id, timeReminder } = reminder;
            return (
              <div
                onMouseEnter={() => setIsHoverDeleteReminder(true)}
                onMouseLeave={() => setIsHoverDeleteReminder(false)}
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <p
                  style={{
                    backgroundColor: color,
                    marginBottom: 0,
                    width: "100%"
                  }}
                  className="reminder"
                  onClick={() => updateReminder(d, reminder)}
                >
                  {" "}
                  Reminder {timeReminder}
                </p>
                {isHoverDeleteReminder && (
                  <Icon type="delete" onClick={() => deleteReminder(id)} />
                )}
              </div>
            );
          })}
      </div>
      {isHoverNewReminder && (
        <Button
          type="primary"
          onClick={() => {
            setIsCreate();
            openModalReminder();
          }}
          className="container-new-reminder"
          block={true}
        >
          <Icon type="plus" />
        </Button>
      )}
    </td>
  );
}

DayCalendar.propTypes = {
  d: PropTypes.number,
  className: PropTypes.string,
  reminders: PropTypes.array,
  setIsCreate: PropTypes.func,
  openModalReminder: PropTypes.func,
  updateReminder: PropTypes.func,
  deleteReminder: PropTypes.func,
  deleteReminderSpecifDay: PropTypes.func
};

DayCalendar.defaultProps={
  d: 0,
  className: "{}",
  reminders: [],
  setIsCreate: ()=>{},
  openModalReminder: ()=>{},
  updateReminder: ()=>{},
  deleteReminder: ()=>{},
  deleteReminderSpecifDay: ()=>{}
}

export default DayCalendar;

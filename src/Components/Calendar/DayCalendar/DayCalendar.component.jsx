import React, { useState, Fragment } from "react";
import { Button, Icon } from "antd";
import "./DayCalendar.styles.css";
function DayCalendar({
  d,
  className,
  reminders,
  setIsCreate,
  openModalReminder,
  updateReminder,
  deleteReminder
}) {
  const [isHoverNewReminder, setIsHoverNewReminder] = useState(false);
  const [isHoverDeleteReminder, setIsHoverDeleteReminder] = useState(false);
  return (
    <td
      key={d}
      className={className}
      onMouseEnter={() => setIsHoverNewReminder(true)}
      onMouseLeave={() => setIsHoverNewReminder(false)}
    >
      <span className="single-day">{d}</span>
      <div className="reminders-container">
        {reminders.map((reminder, index) => {
          const { textReminder, color, id } = reminder;
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
                Reminder {index + 1}
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
          type="primary"
          className="container-new-reminder"
          block={true}
        >
          <Icon type="plus" />
        </Button>
      )}
    </td>
  );
}

export default DayCalendar;

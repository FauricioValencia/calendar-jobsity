import React, { useState } from "react";
import { Button } from "antd";
import Calendar from "../../Containers/Calendar/Calendar.component";
import FormReminder from "../../Components/FormReminder/FormReminder.component";
import Connect from "../../Hoc/Connect.hoc";
import {
  createReminder,
  updateReminder,
  deleteReminder,
  deleteAllReminders
} from "../../Shared/Redux/Actions/reminder.action";
function ReminderCalendar({ dispatch, state }) {
  const {
    reminders: { reminders }
  } = state;
  const [isModalFormReminder, setIsModalReminder] = useState(false);
  const [textReminder, setTextReminder] = useState("");
  const [timeReminder, setTimeReminder] = useState("");
  const [cityReminder, setCityReminder] = useState();
  const [selectDay, setSelectDay] = useState();
  const [color, setColor] = useState();
  const [isCreate, setIsCreate] = useState(true);
  const [idReminder, setIdReminder] = useState();
  const createReminder2 = () => {
    console.log(textReminder, timeReminder, cityReminder, selectDay);
    let body = {
      textReminder,
      timeReminder,
      cityReminder,
      selectDay,
      color
    };
    if (isCreate) {
      dispatch(createReminder({ ...body, id: reminders.length + 1 }));
    } else {
      dispatch(updateReminder(reminders, { ...body, id: idReminder }));
    }
    setIsModalReminder(false);
  };

  const deleteRe = id => {
    console.log('deleteREminder',id);
    dispatch(deleteReminder(reminders, id));
  };

  const deleteAll = () => dispatch(deleteAllReminders());

  const cancelReminder = () => setIsModalReminder(false);

  const openModalReminder = (day, reminder = {}) => {
    setIsModalReminder(!isModalFormReminder);
    setSelectDay(day);
    if (reminder) {
      console.log("reminder update");
      console.log("reminder seleccionado: ", reminder);
      setTextReminder(reminder.textReminder);
      setTimeReminder(reminder.timeReminder);
      setCityReminder(reminder.cityReminder);
      setIdReminder(reminder.id);
      setColor(reminder.color);
    } else {
      console.log("es crear");
    }
  };

  return (
    <>
      <Calendar
        openModalReminder={(day, reminder) => openModalReminder(day, reminder)}
        state={state}
        setIsCreate={isCreate => setIsCreate(isCreate)}
        deleteReminder={id => deleteRe(id)}
      />
      <FormReminder
        isModalFormReminder={isModalFormReminder}
        cancelReminder={cancelReminder}
        createReminder={createReminder2}
        textReminder={textReminder}
        setTextReminder={text => setTextReminder(text)}
        timeReminder={timeReminder}
        setTimeReminder={time => setTimeReminder(time)}
        cityReminder={cityReminder}
        setCityReminder={city => setCityReminder(city)}
        color={color}
        setColor={color => setColor(color)}
        isCreate={isCreate}
      />
      <Button onClick={deleteAll} type="danger" block>
        DELETE ALL REMINDERS
      </Button>
    </>
  );
}

export default Connect(ReminderCalendar);

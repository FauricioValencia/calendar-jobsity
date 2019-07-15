import React, { useState } from "react";
import { Button } from "antd";

import { getWeather } from "../../helpers/Calendar/fetchApi.helpers";
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
  const [weather, setWeather] = useState();
  const createReminder2 = () => {
    let body = {
      textReminder,
      timeReminder,
      cityReminder,
      selectDay,
      color,
      weather
    };
    if (isCreate) {
      dispatch(createReminder({ ...body, id: reminders.length + 1 }));
    } else {
      dispatch(updateReminder(reminders, { ...body, id: idReminder }));
    }
    setIsModalReminder(false);
  };

  const deleteRe = id => {
    console.log("deleteREminder", id);
    dispatch(deleteReminder(reminders, id));
  };

  const getWeatherCity = async city => {
    console.log("city", city);
    console.log("city id", city.id);
    let weatherCity = await getWeather(city.id);
    console.log("weather city: ", weatherCity.main.temp);
    setWeather(weatherCity.main.temp);
  };

  const deleteAll = () => dispatch(deleteAllReminders());

  const cancelReminder = () => setIsModalReminder(false);

  const openModalReminder = (day, reminder = {}) => {
    setIsModalReminder(!isModalFormReminder);
    setSelectDay(day);
    if (reminder) {
      setTextReminder(reminder.textReminder);
      setTimeReminder(reminder.timeReminder);
      setCityReminder(reminder.cityReminder);
      setIdReminder(reminder.id);
      setColor(reminder.color);
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
        setCityReminder={city => {
          console.log("julian", city);
          setCityReminder(city.name);
          getWeatherCity(city);
        }}
        color={color}
        setColor={color => setColor(color)}
        isCreate={isCreate}
        weather={weather}
      />
      <Button onClick={deleteAll} type="danger" block>
        DELETE ALL REMINDERS
      </Button>
    </>
  );
}

export default Connect(ReminderCalendar);

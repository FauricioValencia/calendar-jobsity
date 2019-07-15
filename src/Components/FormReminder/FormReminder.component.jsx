import React from "react";
import PropTypes from "prop-types";
import { Modal, Input, Select, TimePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import { CITYS } from "../../Constants/citys";
const { Option } = Select;
const { TextArea } = Input;
const format = "HH:mm";

function FormReminder({
  isModalFormReminder,
  createReminder,
  cancelReminder,
  textReminder,
  setTextReminder,
  timeReminder,
  setTimeReminder,
  cityReminder,
  setCityReminder,
  color,
  setColor,
  isCreate,
  weather
}) {
  return (
    <Modal
      title={isCreate ? "Create Reminder" : "Update Reminder"}
      visible={isModalFormReminder}
      onOk={createReminder}
      onCancel={cancelReminder}
      okText={isCreate ? "Create" : "Update"}
    >
      <TextArea
        placeholder="Type your Reminder ome"
        autosize={{ minRows: 2, maxRows: 3 }}
        onChange={e => setTextReminder(e.target.value)}
        value={textReminder && textReminder}
        maxLength={30}
        required
        // onError={()=>textReminder.length>2 &&"mala perro"}
      />
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Select
          defaultValue={cityReminder ? cityReminder : "Select city"}
          style={{ width: 120 }}
          onChange={option => setCityReminder(option)}
          required
        >
          {CITYS.map((city, key) => {
            const { name } = city;
            return (
              <Option key={key} value={city}>
                {name}
              </Option>
            );
          })}
        </Select>
        <p>{weather} c</p>
        <Select
          defaultValue={color ? color : " Color"}
          style={{ width: 120 }}
          onChange={option => setColor(option)}
        >
          <Option value="red" style={{ backgroundColor: "red" }}>
            red
          </Option>
          <Option value="blue" style={{ backgroundColor: "blue" }}>
            blue
          </Option>
        </Select>
        <TimePicker
          defaultValue={moment(timeReminder ? timeReminder : "00:00", format)}
          format={format}
          onChange={(time, timeString) => setTimeReminder(timeString, time)}
        />
      </div>
    </Modal>
  );
}
FormReminder.propTypes = {
  isVisible: PropTypes.bool,
  handleOk: PropTypes.func,
  handleCancel: PropTypes.func
};
FormReminder.propTypes = {
  isVisible: true,
  createReminder: () => {},
  cancelReminder: () => {}
};
export default FormReminder;

import React from "react";
import PropTypes from "prop-types";
import { Modal, Button, Input, Select, TimePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";

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
  isCreate
}) {
  return (
    <Modal
      title="Create Reminder"
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
        maxLength={25}
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
        >
          <Option value="cali">Cali</Option>
          <Option value="bogota">Bogota</Option>
        </Select>
        <Select
          defaultValue={color ? color : " Color"}
          style={{ width: 120, background: "yellow" }}
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

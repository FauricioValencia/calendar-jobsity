import axios from "axios";
const URL = "http://api.openweathermap.org/data/2.5/weather?id=";
const APIKEY = "89e9d294f10d10b48f9eab655c300e2a";
export const getWeather = async idCity => {
  try {
    const res = await axios.get(`${URL}${idCity}&appid=${APIKEY}`);
    console.log("res: ", res.data);
    return res.data;
  } catch (e) {
    console.error("error: ", e);
  }
};

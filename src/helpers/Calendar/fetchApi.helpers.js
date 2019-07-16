import axios from "axios";
import { URL, APIKEY } from "../../Config/config";
export const getWeather = async idCity => {
  try {
    const res = await axios.get(`${URL}${idCity}&appid=${APIKEY}`);
    return res.data;
  } catch (e) {
    console.error("error: ", e);
  }
};

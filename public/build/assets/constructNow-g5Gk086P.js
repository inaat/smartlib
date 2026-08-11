import { c as constructFrom } from "./normalizeDates-KHLYxtAK.js";
function constructNow(date) {
  return constructFrom(date, Date.now());
}
export {
  constructNow as c
};

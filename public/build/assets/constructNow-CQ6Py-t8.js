import { c as constructFrom } from "./en-US-CtEcOBul.js";
function constructNow(date) {
  return constructFrom(date, Date.now());
}
export {
  constructNow as c
};

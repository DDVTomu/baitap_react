import { GET_SEAT, REMOVE_SEAT } from "./constants";

const actGetSeat = (seat) => {
  return {
    type: GET_SEAT,
    payload: seat,
  };
};
const actRemoveSeat = (seat) => {
  return {
    type: REMOVE_SEAT,
    payload: seat,
  };
};
export { actGetSeat, actRemoveSeat };

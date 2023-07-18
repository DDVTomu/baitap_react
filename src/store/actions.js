import { GET_SEAT, REMOVE_SEAT, DELETE_USER, EDIT_USER, SUBMIT_USER } from "./constants";

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

const actSubmitUser = (user) => {
  return {
    type: SUBMIT_USER,
    payload: user,
  };
};

const actDeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

const actEditUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

export { actGetSeat, actRemoveSeat, actDeleteUser, actEditUser, actSubmitUser };

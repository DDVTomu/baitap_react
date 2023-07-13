import { GET_SEAT, REMOVE_SEAT } from "./constants";
import data from "../danhSachGhe.json";
import { useEffect } from "react";
const initialState = {
  listSeats: data,
  orderList: [],
  userEdit: null,
  keyword: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEAT: {
      let orderList = [...state.orderList];
      let listSeatClone = [...state.listSeats];
      const seatId = action.payload;
      let dataSeats = "";

      listSeatClone.map((seats) => {
        dataSeats = [...dataSeats, ...seats.danhSachGhe];
      });
      const index = dataSeats.findIndex((seat) => seat.soGhe === seatId);
      if (index !== -1) {
        orderList.push(dataSeats[index]);
      }
      state.orderList = orderList;
      return { ...state };
    }
    case REMOVE_SEAT: {
      let orderList = [...state.orderList];
      const seatId = action.payload;
      const index = orderList.findIndex((seat) => seat.soGhe === seatId);
      if (index !== -1) {
        orderList.splice(index, 1);

        //cập nhật lại state
        state.orderList = orderList;

      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default userReducer;

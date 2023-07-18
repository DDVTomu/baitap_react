import { GET_SEAT, REMOVE_SEAT, SUBMIT_USER, EDIT_USER, DELETE_USER  } from "./constants";
import data from "../danhSachGhe.json";
import { useEffect } from "react";
const initialState = {
  listSeats: data,
  listUser: [
    {
      id: 1,
      fullname: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "123456789",
    },
    {
      id: 2,
      fullname: "Nguyen Van A",
      username: "vana",
      email: "vana@gmail.com",
      phoneNumber: "123456789",
    },
  ],
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

    case SUBMIT_USER: {
      const user = action.payload;
      let listUserClone = [...state.listUser];

      if (user.id) {
        //update
        const index = listUserClone.findIndex((item) => item.id === user.id);
        if (index !== -1) {
          listUserClone[index] = user;
        }
      } else {
        //add
        const userClone = { ...user, id: new Date().getTime() };
        listUserClone.push(userClone);
      }
      //cap nhat lai state
      state.listUser = listUserClone;

      return { ...state };
    }

    case EDIT_USER: {
      state.userEdit = action.payload;

      return { ...state };
    }
    case DELETE_USER: {
      //Xoá user
      let listUserClone = [...state.listUser];
      //tìm vị trí
      const index = listUserClone.findIndex(
        (user) => user.id === action.payload
      );
      if (index !== -1) {
        listUserClone.splice(index, 1);

        //cập nhật lại state
        state.listUser = listUserClone;
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;

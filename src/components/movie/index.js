import React, { Component, useState } from "react";
import data from "../../danhSachGhe.json";
import { connect } from "react-redux";
import { actGetSeat, actRemoveSeat } from "../../store/actions";
import Orders from "./Orders";
class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  render() {
    const { getSeat, removeSeat } = this.props;
    const handleChange = (event) => {
      const chair = event.target.value;
      if (event.target.checked === true) {
        getSeat(chair);
      } else {
        removeSeat(chair);
      }
    };

    return (
      <>
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            {/* input fields */}
            {/* <div className="inputForm">
              <h2>fill the required details below and select your seats</h2>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label>
                    {" "}
                    Name
                    <span>*</span>
                  </label>
                  <input type="text" id="Username" required="" disabled="" />
                </div>
                <div className="agileits-right">
                  <label>
                    {" "}
                    Number of Seats
                    <span>*</span>
                  </label>
                  <input
                    type="number"
                    id="Numseats"
                    required=""
                    min={1}
                    disabled=""
                  />
                </div>
              </div>
              <button onclick="takeData()" disabled="">
                Start Selecting
              </button>
            </div> */}
            {/* //input fields */}
            {/*-728x90-*/}
            {/* seat availabilty list */}
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            {/* seat availabilty list */}
            {/* seat layout */}
            <div
              className="seatStructure txt-center"
              style={{ overflowX: "auto" }}
            >
              <p id="notification">
                <b
                  style={{
                    marginBottom: 0,
                    background: "#ff9800",
                    letterSpacing: 1,
                  }}
                >
                  Please Select your Seats NOW!
                </b>
              </p>
              <table id="seatsBlock">
                <tbody>
                  {data.map((seat) =>
                    seat.hang === "" ? (
                      <tr>
                        {seat.danhSachGhe.map((chair) => (
                          <td>{chair.soGhe}</td>
                        ))}
                      </tr>
                    ) : (
                      <tr>
                        <td>{seat.hang}</td>

                        {seat.danhSachGhe.map((chair) => (
                          <td>
                            <input
                              type="checkbox"
                              className="seats"
                              value={chair.soGhe}
                              disabled={chair.daDat}
                              onClick={handleChange}
                              checked={this.isChecked}
                            />
                          </td>
                        ))}
                      </tr>
                    )
                  )}{" "}
                </tbody>
              </table>
              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
            </div>
            {/* //seat layout */}
            {/* details after booking displayed here */}
            <div
              className="displayerBoxes txt-center"
              style={{ overflowX: "auto" }}
            >
              <Orders />
            </div>
            {/* //details after booking displayed here */}
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //key là props cho component UserItem
    getSeat: (seat) => {
      //dispatch gửi action lên reducer
      dispatch(actGetSeat(seat));
    },
    removeSeat: (seat) => {
      //dispatch gửi action lên reducer
      dispatch(actRemoveSeat(seat));
    },
  };
};
export default connect(null, mapDispatchToProps)(Movie);

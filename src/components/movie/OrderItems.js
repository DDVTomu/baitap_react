import React, { Component } from "react";
import { connect } from "react-redux";
import { actRemoveSeat } from "../../store/actions";

class OrderItems extends Component {
  render() {
    const { seat, removeSeat } = this.props;
    return (
      <tr key={seat.soGhe}>
        <td>{seat.soGhe}</td>
        <td>{seat.gia}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              removeSeat(seat.soGhe);
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //key là props cho component UserItem
    removeSeat: (seat) => {
      //dispatch gửi action lên reducer
      dispatch(actRemoveSeat(seat));
    },
  };
};

export default connect(null, mapDispatchToProps)(OrderItems);

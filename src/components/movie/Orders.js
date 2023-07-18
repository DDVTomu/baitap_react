import React, { Component } from "react";
import { connect } from "react-redux";
import OrderItems from "./OrderItems";
class Orders extends Component {
  renderListOrder = () => {
    let { listOrders } = this.props;
    return listOrders?.map((seat) => {
      return <OrderItems key={seat.soGhe} seat={seat} />;
    });
  };

  render() {
    return (
      <>
        <table className="Displaytable w3ls-table" width="100%">
          <tbody>
            <tr>
              <th>Number of Seats</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
            {this.renderListOrder()}
          </tbody>
        </table>
      </>
    );
  }
}
//mapStateToProps: chuyển state (reducer) thành props (component)
const mapStateToProps = (state) => {
  console.log(state.userReducer.orderList);
  return {
    //key 'listUser' là props cho component Users
    listOrders: state.userReducer.orderList,
  };
};

export default connect(mapStateToProps, null)(Orders);

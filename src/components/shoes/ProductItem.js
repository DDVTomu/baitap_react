import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={item.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <button
              className="btn btn-success"
              onClick={() => {
                setStateModal(item);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}

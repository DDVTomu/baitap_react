import React, { Component } from "react";
import data from "./dataShoes.json";
import ProductList from "./ProductList";
import Modal from "./Modal";
export default class Shoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      productDetail: data[0],
      listCart: [],
    };
  }
  handleDetailProduct = (product) => {
    //nhận product từ DSSP <= SP
    this.setState({
      productDetail: product,
    });
  };

  _findIndex = (maSP) =>
    this.state.listCart.findIndex((product) => product.maSP === maSP);

  setStateModal = (product) => {
    const index = this._findIndex(product.maSP);

    //tạo mảng listCart mới từ this.state.listCart
    let listCart = [...this.state.listCart];

    if (index !== -1) {
      //tim thay => Cap nhat SL
      listCart[index].soLuong += 1;
    } else {
      //add to listCart
      const productAddCart = {
        id: product.id,
        name: product.name,
        image: product.image,
        soLuong: 1,
        giaBan: product.price,
      };

      listCart.push(productAddCart);
    }

    //Cập nhật lại state
    this.setState({
      listCart,
    });
  };

  handleUpdateQuantity = (maSP, isPlus) => {
    let listCartClone = [...this.state.listCart];
    const index = this._findIndex(maSP);

    if (index !== -1) {
      if (isPlus) {
        //tang SL
        listCartClone[index].soLuong += 1;
      } else {
        // giam SL
        if (listCartClone[index].soLuong > 1) {
          listCartClone[index].soLuong -= 1;
        }
      }

      //cap nhat lai state
      this.setState({
        listCart: listCartClone,
      });
    }
  };

  totalQuantity = () => {
    return this.state.listCart.reduce(
      (total, product) => (total += product.soLuong),
      0
    );
  };

  render() {
    const { listCart } = this.state;
    return (
      <>
        <div className="container">
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#modelBox"
          >
            Giỏ hàng ({this.totalQuantity()})
          </button>
        </div>
        <ProductList productsData={data} setStateModal={this.setStateModal} />
        <Modal content={listCart} />
      </>
    );
  }
}

import React, { Component } from "react";
import ProductItem from "./ProductItem";
export default class ProductList extends Component {
  renderList = () => {
    const { productsData, setStateModal } = this.props;
    return productsData.map((product, key) => (
      <ProductItem key={key} item={product} setStateModal={setStateModal} />
    ));
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}

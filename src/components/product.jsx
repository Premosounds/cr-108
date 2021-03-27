import React, { Component } from "react";
import { connect } from "react-redux";
import QuantityPicker from "../quantityPicker/quantityPicker";
import "./product.css";
import { addProdToCart } from "../../store/actions/actions";

class Product extends Component {
  state = {
    min: this.props.data.minimum || 1,
    price: this.props.data.price,
    qty: this.props.data.minimum || 1,
    total: this.props.data.price,
  };

  render() {
    return (
      <div>
        <img src="https://picsum.photos/200/300"></img>

        <label>Product Description here</label>

        <label>$ Total</label>
        <label>$ Price</label>

        <QuantityPicker></QuantityPicker>
      </div>
    );
  }

  handleValueChange = (qty) => {
    let total = this.state.price * qty;
    this.setState({ qty: qty, total: total });
  };

  handleAddProduct = () => {
    var prodInCart = {
      product: this.props.data,
      qty: this.state.qty,
    };

    this.props.addProdToCart(prodInCart);
  };
}
export default connect(null, { addProdToCart })(Product);

import React, { Component } from "react";
import './quantityPicker.css';


class QuantityPicker extends Component {
    state = {
        quantity: 1,
        name: 'Jay'
     }
    render() {
        return (
            <div>
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
                <label>{this.state.quantity}</label>
                <button onClick={this.decreaseQuantity} className="btn btn-sm btn-dark">-</button>
            </div>
        );
    }

    increaseQuantity = ()  => {
        console.log("button clicked");
        // this.state.quantity = 999; <- DON'T modify state directly
        let current = this.state.quantity + 10; // read from the state
        this.setState({ quantity: current });
    }

    decreaseQuantity = () => {
        let current = this.state.quantity - 10;
        // Prevent the number going below 1
        this.setState({ quantity: current });
    }

}

export default QuantityPicker;
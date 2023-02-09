import  React, { Component } from "react";

class TextInputs extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.text}>{this.props.title}</label>
                <input type={this.props.inputType} id={this.props.text}></input>
            </div>
        )
    }
}
export default TextInputs

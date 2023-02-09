import React, { Component } from "react";

class Textarea extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
            <div>
                <label htmlFor={this.props.text}>About Yourself</label>
                <textarea id={this.props.text}></textarea>
            </div>
        )
    }
}
export default Textarea;
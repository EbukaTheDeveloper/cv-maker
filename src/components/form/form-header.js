import React, { Component } from "react";

class FormHeader extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="form-header">
            <div className="diamond">
              {this.props.child}
            </div>
            <h2>{this.props.text}</h2>
          </div>
        )
    }
}

export default FormHeader;
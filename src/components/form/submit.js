import React, { Component } from "react";
import Check from "../icon/checkSvg";

class SubmitForm extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="submit-btn-container">
                <button className="submit-btn">
                    <Check />
                </button>
            </div>
        )
    }
}

export default SubmitForm;
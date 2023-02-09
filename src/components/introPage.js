import React, { Component } from "react";

class Intro extends Component {
    constructor() {
        super();
        this.state = {
          show:true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ show: false });
    }, 3000);
    }
    render () {
        if (!this.state.show) {
          return null;
    }
        return (
            <div className="intro">
              <p className="app-name">
                <span>Resume</span>
                <span>Maker</span>
              </p>
          </div>
        )
    }
}

export default Intro;
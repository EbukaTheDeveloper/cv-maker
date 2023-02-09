import React, { Component } from "react";
import InfoIcon from "./icon/infoSvg";
import SchoolIcon from "./icon/schoolSvg";
import ContactIcon from "./icon/contactSvg";
import HubspotIcon from "./icon/hubspotSvg";
import ApacheIcon from "./icon/apacheSvg";
import SourceBranchIcon from "./icon/source-branch";
import HikingIcon from "./icon/hikingSvg";
import EarthIcon from "./icon/earthSvg";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({ visible: true });
          document.body.className = 'white-bg';
        }, 4000);
      }
    render () {
        if (!this.state.visible) return null;
        return (
            <div className="l-p">
                <header>
                    <h1>RESUME MAKER</h1>
                    <p>Make your professional resume</p>
                </header>
                <div>
                    <div className="first">
                      <InfoIcon />
                      <p>BASIC INFO</p>
                    </div>
                    <div className="second">
                      <SchoolIcon />
                      <p>EDUCATION</p>
                    </div>
                    <div className="third">
                      <ContactIcon />
                      <p>CONTACT</p>
                    </div>
                    <div className="fourth">
                      <HubspotIcon />
                      <p>EXPERIENCE</p>
                    </div>
                    <div className="fifth">
                      <ApacheIcon />
                      <p>SKILLS</p>
                    </div>
                    <div className="sixth">
                      <SourceBranchIcon />
                      <p>PROJECTS</p>
                    </div>
                    <div className="seventh">
                      <HikingIcon />
                      <p>HOBBIES</p>
                    </div>
                    <div className="eight">
                      <EarthIcon />
                      <p>LANGUAGE</p>
                    </div>
                </div>
                <button onClick={this.props.onButtonClick} className="build">Build Resume</button>
            </div>
        )
    }
}

export default LandingPage;
import React, { Component } from "react";
import Intro from './components/introPage';
import LandingPage from './components/landingPage';
import BasicInfo from './components/basicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { componentToRender: 'FirstComponent' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ componentToRender: 'SecondComponent' });
  }
  render() {
    return (
      <div>
        <main>
          <Intro />
          {this.state.componentToRender === 'FirstComponent' ? (
           <LandingPage onButtonClick={this.handleClick} />
          ) : (
            <BasicInfo />
          )
        }
        </main>
      </div>
    )
  }
}


export default App;

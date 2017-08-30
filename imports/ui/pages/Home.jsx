import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {
    //before component mounts
  }

  componentDidMount() {
    //once component mounts, ex: jquery stuff
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="header-box">
            <div className="navigation">
              <div className="menu">
                <a href="">menu</a>
              </div>
              <div className="logo-right">
                <h2>Ockupy</h2>
              </div>
            </div>
          </div>
          <div className="header-text">
            <h1>we create</h1>
            <h1>things</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

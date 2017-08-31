import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


class Home extends Component {
  componentWillMount() {
    //before component mounts
  }

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
        <SideNav />
        <div className="header">
          <div className="header-box">
            <Nav />
          </div>
          <div className="header-text">
            <h1>we create</h1>
            <h1>things</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;

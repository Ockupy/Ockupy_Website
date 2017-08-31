import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';

class Contact extends Component {

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
        <SideNav />
        <Nav />
        <h2>Contact Page</h2>
      </div>
    );
  }
}

export default Contact;

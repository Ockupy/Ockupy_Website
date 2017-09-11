import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Contact extends Component {

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
        <SideNav />
        <Nav
          navLogo='/images/logo-black.png'
        />
        <h2>Contact Page</h2>
        <Footer />
      </div>
    );
  }
}

export default Contact;

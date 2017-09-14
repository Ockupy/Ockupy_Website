import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Contact extends Component {

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
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

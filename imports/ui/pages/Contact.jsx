import React, { Component } from 'react';
import Nav from '../components/Nav';
import ContactForm from '../components/ContactForm';
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
        <div className="page-content-wrapper">
          <h2 style={{ textAlign: 'center' }}>Contact Page</h2>
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;

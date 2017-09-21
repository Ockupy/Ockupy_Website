import React, { Component } from 'react';
import Nav from '../components/Nav';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Nav
          navLogo='/images/logo-black.png'
        />
        <div className="page-content-wrapper">
          <h1 style={{ textAlign: 'center' }}>Contact Page</h1>
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;

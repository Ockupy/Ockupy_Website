import React, { Component } from 'react';

class ContactForm extends Component {

  componentDidMount() {
    //jquery
  }


  render() {
    return (
      <div>
        <form id="contact-form">
          <div className="row">
            <label>Name</label><br />
            <input type="text" ref="name" placeholder="Your Name" required/><br />
          </div>
          <div className="row">
            <label>Email</label><br />
            <input type="text" ref="email" placeholder="Your Email" required/><br />
          </div>
          <div className="row">
            <label>Subject</label><br />
            <input type="text" ref="subject" placeholder="Your Subject" required/><br />
          </div>
          <div className="row">
            <label>Message</label><br />
            <textarea ref="message" placeholder="Compose your Message Here" rows="7"></textarea><br />
          </div>
        </form>
      </div>
    );
  }
}


export default ContactForm;

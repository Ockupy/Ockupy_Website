import React, { Component } from 'react';

class ContactForm extends Component {

  constructor() {
    super();
    this.state = {
      message: {
        name: '',
        email: '',
        message: ''
      }
    }
  }

  submitForm() {
    this.state = { message: {
      name: this.refs.f_name.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    }};
  }

  componentDidMount() {
    //jquery
  }


  render() {
    return (
      <div id="contact-form">
        <form>
          <div className="form-group">
            <input type="text" required="required" />
            <label className="control-label" for="input">Name*</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <input type="text" required="required" />
            <label className="control-label" for="input">Company</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <select>
              <option ref="" disabled selected>What Can We Help You With?</option>
              <option ref="marketing">Marketing</option>
              <option ref="development">Web Development</option>
              <option ref="social">Social Media</option>
            </select>
          </div>
          <div className="form-group">
            <select>
              <option ref="" disabled selected>What is Your Estimated Budget?</option>
              <option ref="">$0 - $2,000</option>
              <option ref="">$2,000 - $5,000</option>
              <option ref="">$5,000 - $10,000</option>
              <option ref=""> > $10,000</option>
            </select>
          </div>
          <div className="form-group">
            <textarea required="required"></textarea>
            <label className="control-label" for="textarea">Tell us a bit more about your needs:</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


export default ContactForm;

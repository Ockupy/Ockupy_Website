import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';

class ContactForm extends Component {

  constructor() {
    super()
    this.state = {
      message: {
        name: '',
        email: '',
        company: '',
        message: ''
      }
    };
  }

  submitForm() {
    this.state = { message: {
      name: this.refs.name.value,
      email: this.refs.email.value,
      company: this.refs.company.value,
      message: this.refs.message.value
    }};

    Meteor.call('sendEmail', this.state.message, (error) => {
      let name = this.state.message.name;
      let company = this.state.message.company;
      let email = this.state.message.email;
      let message = this.state.message.message;

      if (name === '') {
        Bert.alert('Enter a valid name please!', 'danger');
      } else if(email === ''){
        Bert.alert('Enter a valid email please!', 'danger');
      } else if(message === ''){
        Bert.alert('Enter a valid message please!', 'danger');
      } else if(error){
        Bert.alert(error.reason, 'danger');
      } else {
        //this.contactForm.reset();
        Bert.alert('Message sent!', 'success');

        this.setState({
          message: {
            name: '',
            company: '',
            email: '',
            message: ''
          }
        });
        this.refs.name.value = '';
        this.refs.email.value = '';
        this.refs.company.value = '';
        this.refs.message.value = '';
      }
    });
  }

  componentDidMount() {
    //jquery
  }


  render() {
    return (
      <div id="contact-form">
        <form>
          <div className="form-group">
            <input ref="name" type="text" required="required" />
            <label className="control-label" htmlFor="input">Name*</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <input ref="email" type="text" required="required" />
            <label className="control-label" htmlFor="input">Email</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <input ref="company" type="text" required="required" />
            <label className="control-label" htmlFor="input">Company</label><i className="bar"></i>
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
              <option ref="1">$0 - $2,000</option>
              <option ref="2">$2,000 - $5,000</option>
              <option ref="3">$5,000 - $10,000</option>
              <option ref="4"> > $10,000</option>
            </select>
          </div>
          <div className="form-group">
            <textarea ref="message" required="required"></textarea>
            <label className="control-label" htmlFor="textarea">Tell us a bit more about your needs:</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <button onClick={this.submitForm.bind(this)}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


export default ContactForm;

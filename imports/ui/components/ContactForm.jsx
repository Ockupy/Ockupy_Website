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
        message: '',
        budgetValue: '',
        helpValue: ''
      }
    };
  }

  handleHelp(e) {
    this.setState({helpValue:e.target.value});
  }

  handleBudget(e) {
    this.setState({budgetValue:e.target.value});
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
      let budget = this.state.message.budgetValue;
      let help = this.state.message.helpValue;


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
            email: '',
            company: '',
            message: '',
            budgetValue: '',
            helpValue: ''
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
            <select value={this.state.helpValue}
              onChange={this.handleHelp}>
              <option defaultValue disabled>What Can We Help You With?</option>
              <option value="Marketing">Marketing</option>
              <option value="Development">Web Development</option>
              <option value="Social">Social Media</option>
            </select>
          </div>
          <div className="form-group">
            <select value={this.state.budgetValue}
              onChange={this.handleBudget}>
              <option defaultValue disabled>What is Your Estimated Budget?</option>
              <option value="$0 - $2,000">$0 - $2,000</option>
              <option value="$2,000 - $5,000">$2,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value=" > $10,000"> > $10,000</option>
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

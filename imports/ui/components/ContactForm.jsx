import React, { Component } from 'react';

class ContactForm extends Component {

  constructor() {
    super()
    this.state = {
      message: {
        name: '',
        company: '',
        email: '',
        message: ''
      }
    };
  }

  submitForm() {
    this.state = { message: {
      name: this.refs.name.value,
      company: this.refs.company.value,
      email: this.refs.email.value,
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
          // $('.oc-form').css({
          //   'visibility':'hidden',
          //   'opacity':'0',
          //   'transition':'all .3s ease-in-out'
          // });
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
            <label className="control-label" for="input">Name*</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <input ref="email" type="text" required="required" />
            <label className="control-label" for="input">Email</label><i className="bar"></i>
          </div>
          <div className="form-group">
            <input ref="company" type="text" required="required" />
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
            <textarea ref="message" required="required"></textarea>
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

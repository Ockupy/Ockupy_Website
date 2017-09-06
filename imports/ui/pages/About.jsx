import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class About extends Component {

  componentDidMount() {
    //jquery
  }

  blocks() {
    return [
      {_id:1, name: 'Antonio Amado', role: 'Partner &amp; Co-Founder', img: ''},
      {_id:2, name: 'Joshua Guzman', role: 'Chief Financial Officer &amp; Co-Founder', img: ''},
      {_id:3, name: 'Aaron Dielman', role: 'Project Manager &amp; Co-Founder', img: ''},
      {_id:4, name: 'Damon Mota', role: 'Project Manager', img: ''},
      {_id:5, name: 'Servio Mora', role: 'Developer', img: ''},
      {_id:6, name: 'Rita Gonzalez', role: 'Lead Designer', img: ''},
      {_id:7, name: 'Krissy Prager', role: 'Marketing', img: ''},
      {_id:8, name: 'Jason', role: 'Marketing', img: ''}
    ]
  }

  renderBlocks() {
    return this.blocks().map((block) => {
      return (
        <div className="employee" key={block._id}>
          <img className="avatar" src={block.img} />
          <div className="employee-name">{block.name}</div>
          <div className="employee-role">{block.role}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <SideNav />
        <div className="header">
          <div className="header-box">
            <Nav />
          </div>
          <div className="header-text">
            <h1>we do</h1>
            <h1>this</h1>
          </div>
        </div>
        <h2>About Page!</h2>
        <div className="employee-container">
          <div className="employee-wrapper">
            {this.renderBlocks()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;

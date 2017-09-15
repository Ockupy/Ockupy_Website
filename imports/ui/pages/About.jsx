import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SideScroll from '../components/SideScroll';

class About extends Component {

  componentDidMount() {
    //jquery
  }

  blocks() {
    return [
      {_id:1, name: 'Antonio Amado', role: 'Partner & Co-Founder', img: ''},
      {_id:2, name: 'Joshua Guzman', role: 'CFO & Co-Founder', img: ''},
      {_id:3, name: 'Aaron Dielman', role: 'Project Manager & Co-Founder', img: ''},
      {_id:4, name: 'Damon Mota', role: 'Project Manager', img: ''},
      {_id:5, name: 'Servio Mora', role: 'Developer', img: ''},
      {_id:6, name: 'Rita Gonzalez', role: 'Lead Designer', img: ''},
      {_id:7, name: 'Krissy Prager', role: 'Marketing', img: ''},
      {_id:8, name: 'Jason Basner', role: 'Marketing', img: ''}
    ]
  }

  renderBlocks() {
    return this.blocks().map((block) => {
      return (
        <div className="employee" key={block._id}>
          <img className="avatar" src={block.img} />
          <div className="employee-info">
            <div className="employee-name">{block.name}</div>
            <div className="employee-role">{block.role}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <Nav
          navLogo='/images/logo-black.png'
        />
        <SideScroll />
        <div className="page-content-wrapper">
          <div className="header-text" style={{ textAlign: 'center', fontSize: '30px' }}>
            <h1>we do</h1>
            <h1>this</h1>
          </div>
          <div className="employee-container">
            <div className="employee-wrapper">
              {this.renderBlocks()}
            </div>
            <div className="about-slogan">
              <h2><span>big or small</span></h2>
            </div>
            <h4 style={{textAlign: 'center', marginBottom: '3em'}}>We will do it - Get Started ></h4>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;

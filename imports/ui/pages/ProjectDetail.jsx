import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { FullImage } from '../components/Projects/Full-Image';
import Slider from '../components/Projects/Slider';
import axios from 'axios';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  detectUrlData() {
    let data;
    let pathname = window.location.pathname;
    let project = pathname.slice(10);

    if (pathname === `/projects/${project}`) {
      data = this.state.data.filter(function (data) {
        return data.link === `${project}`;
      })[0];
      return this.renderData(data);
    }
  }

  renderData(data) {
    return (
      <div>
        <SideNav />
        <div className="full-header" style={{ backgroundImage: `url('${data.header}')` }}>
          <Nav
            navLogo={data.logo}
            menuColor={data.menuColor}
          />
          <div className="popout">
            <h2 className="title">{data.title}</h2>
            <div className="info">{data.description}</div>
          </div>
        </div>
        <FullImage />
        <Slider />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    // get projects from json file
    axios.get('/json/projects.json')
      .then(data => {
        this.setState({ data: data.data });
      });

    this.detectUrlData();


  }


  render() {
    return (
      <div className="page-content-wrapper hideme">
        {this.detectUrlData()}
      </div>
    );
  }
}

export default ProjectDetail;

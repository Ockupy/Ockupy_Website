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
      <div className="project-detail">
        <SideNav />
        <div className="full-header"
            style=
              {{ backgroundImage: `url('${data.header}')` }}
            >
          <Nav
            navLogo={data.logo}
            menuColor={data.menuColor}
          />
          <div className="popout">
            <h2 className="title">{data.title}</h2>
            <div className="info">
              {data.detailDescription.map((p) => {
                return <p key={p._id}>{p.paragraph}</p>
              })}
              {data.detailServices ?
                <div>
                  <h3>Services:</h3>
                  <ul>
                    {data.detailServices.map((li) => {
                      return <li key={li._id}>{li.service}</li>
                    })}
                  </ul>
                </div> : null}
            </div>
          </div>
        </div>
        <FullImage
          image={data.image}
        />
        <Slider
          slides={data.sliderImages}
        />
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
      <div>
        {this.detectUrlData()}
      </div>
    );
  }
}

export default ProjectDetail;

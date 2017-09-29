import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { LetsWork } from '../components/LetsWork';
import { LastImage } from '../components/Projects/Last-Image';
import { FullImage } from '../components/Projects/Full-Image';
import { ProjectVideo } from '../components/Projects/ProjectVideo';
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
      <div className="page-content-wrapper">
        <div className="full-header"
          style=
            {{ backgroundImage: `url('${data.header}')` }}
          >
        </div>
        <div className="project-detail">
          <h2 className="title">{data.title}</h2>
          <div className="info">
            <span>
              {data.detailDescription.map((p) => {
                return <p key={p._id}>{p.paragraph}</p>
              })}
            </span>
            <div className="line"></div>
            {data.detailServices ?
              <div className="services">
                <h3>Services:</h3>
                <ul>
                  {data.detailServices.map((li) => {
                    return <li key={li._id}>{li.service}</li>
                  })}
                </ul>
                <span><b>WEBSITE:</b>&nbsp;&nbsp;&nbsp;{data.website}</span>
              </div> : null}
          </div>
        </div>
        {data.image ?
          <FullImage
            image={data.image}
          /> : null
        }
        {data.results ?
          <div className="project-stats">
            <h2>Results:</h2>
            <div className="wrapper">
              {data.results.map(stat => {
                return <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  maxWidth: '300px'
                }} key={stat._id}>
                  <h1 className="bg-animate">{stat.value}</h1>
                  <p>{stat.description}</p>
                </div>
              })}
            </div>
          </div> : null
        }
        {data.imageTwo ?
          <FullImage
            image={data.imageTwo}
          /> : null
        }
        {data.sliderImages ?
          <Slider
            slides={data.sliderImages}
          /> : null
        }
        {data.video ?
          <ProjectVideo
            source={data.video}
          /> : null
        }
        {data.imageLast ?
          <LastImage
            image={data.imageLast}
          /> : null
        }
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
        <Nav
          navLogo='/images/logo-black.png'
        />
        {this.detectUrlData()}
        <Footer />
      </div>
    );
  }
}

export default ProjectDetail;

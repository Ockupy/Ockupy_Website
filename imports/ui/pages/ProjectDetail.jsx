import React, { Component } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { LastImage } from '../components/Projects/Last-Image';
import { FullImage } from '../components/Projects/Full-Image';
import { ProjectVideo } from '../components/Projects/ProjectVideo';
import NextProjectBtn from '../components/Projects/NextProjectBtn';
import Slider from '../components/Projects/Slider';
import axios from 'axios';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.detectUrlData();
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  detectUrlData() {
    let project = this.props.projectId;

    let data = this.props.data.filter(function (data) {
      return data.link === `${project}`;
    })[0];
    return this.renderData(data);
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
                <span>WEBSITE:&nbsp;&nbsp;&nbsp;<a target="_blank" className="link">{data.website}</a></span>
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
            <h3>Results:</h3>
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
        {data.nextProject ?
          <NextProjectBtn
            nextLink={`/projects/${data.nextProject}`}
          /> : null
        }
      </div>
    );
  }


  render() {
    return (
      <div>
        <Nav />
        {this.detectUrlData()}
        <Footer />
      </div>
    );
  }
}

export default ProjectDetail;

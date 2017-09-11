import React, { Component } from 'react';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import {LeftBlock} from '../components/Blocks/Left-Block';
import {RightBlock} from '../components/Blocks/Right-Block'


class Home extends Component {
  componentWillMount() {
    //before component mounts
  }

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div>
        <SideNav />
        <div className="header">
          <div className="header-box">
            <Nav
              navLogo='/images/logo-black.png'
             />
          </div>
          <div className="header-text">
            <h1>we create</h1>
            <h1>things</h1>
          </div>
        </div>
        <LeftBlock
          blockText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <RightBlock
          blockText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
        <Footer />
      </div>
    );
  }
}

export default Home;

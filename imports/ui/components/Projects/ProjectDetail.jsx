import React, { Component } from '';
import SideNav from '../SideNav';
import Nav from '../Nav';
import Footer from '../Footer';

class ProjectDetail extends Component {

  componentDidMount() {
    //jquery
  }


  render() {
    return (
      <SideNav />
      <div className="full-header">
        <Nav />
      </div>
    );
  }
}

export default ProjectDetail;

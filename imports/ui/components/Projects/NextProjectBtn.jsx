import React, { Component } from 'react';

class NextProjectBtn extends Component {

  render() {
    return (
      <div className="view-background">
        <a href={this.props.nextLink}><h1>view next project</h1></a>
      </div>
    );
  }
}

export default NextProjectBtn;

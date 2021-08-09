import React from 'react';

class HoverCounter extends React.Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1 onMouseOver={this.incrementCount}>
          Hovered {this.state.count} Times
        </h1>
      </div>
    );
  }
}

export default HoverCounter;

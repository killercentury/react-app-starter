import React from 'react';

class Example extends React.Component {

  constructor(props) {
    super(props);
    console.log('contructor');
  }

  render() {
    return (
      <div>An example React component</div>
    );
  }

}

export default Example;

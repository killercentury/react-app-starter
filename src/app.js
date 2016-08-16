import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/atoms/example';

class App extends React.Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('react-container'));

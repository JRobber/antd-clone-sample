import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Button.css';
import PropTypes from 'prop-types';
import ListDemo from './List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Button type="primary"><Button>Click me</Button>Click me Primary</Button>
            <Button>Click me</Button>
            <Button type="dashed">Click me Dashed</Button>
            <Button type="danger">Click me Danger</Button>
            <Button type="info">Click me</Button>
          </div>
        </header>
        <p className="App-intro">
          <ListDemo />
        </p>
      </div>
    );
  }
}

export default App;

function Button(props) {
  const type = props.type;
  let buttonBGColor = "white"
  let buttonColor = "#333"

  const style = {
    backgroundColor: props.type ?
      buttonBackgrounds[props.type] : 'white',
    color: props.type ?
      buttonColors[props.type] : '#333'
  }
  return < button style={style} className="btn"> {props.children}</button >
}

const buttonBackgrounds = {
  primary: '#1890ff',
  dashed: 'white',
  danger: '#ccc',
  info: '#336699'
}

const buttonColors = {
  primary: 'white',
  danger: 'red',
  info: '#white'
}

Button.propTypes = {
  type: PropTypes.string.isRequired
}


function Button2(props) {
  const type = props.type;

  const styleToApply = props.type
    ? styleLookup[props.type]
    : {}
  const style = Object.assign({}, styleToApply)

  return < button style={style} className="btn"> Click Me Component</button >
}


const primaryStyle = {
  backgroundColor: "#1890ff",
  color: 'white',
  border: 0,
}

const dashedStyle = {
  borderStyle: "dashed"
}

const dangerStyle = {
  backgroundColor: "#999",
  color: 'red',
}

const styleLookup = {
  primary: primaryStyle,
  dashed: dashedStyle,
  danger: dangerStyle,
}
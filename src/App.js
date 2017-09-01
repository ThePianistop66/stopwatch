import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 0,
      newDeadline: ''
    };
  }

  changeDeadline(){
    console.log('newDeadline', this.state.newDeadline)
    this.setState({deadline:this.state.newDeadline * 1000 + Date.parse(new Date())});
    console.log('deadline', this.state.deadline)
    console.log('new date', Date.parse(new Date()))
  }

  render() {
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <h1 className = 'stopwatch'>
        <Stopwatch deadline={this.state.deadline} />
        </h1>
        <Form inline>
          <FormControl
            onChange = {event => this.setState({newDeadline: event.target.value})}
            placeholder = 'Enter number of seconds'
          />
          <Button onClick = {() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;

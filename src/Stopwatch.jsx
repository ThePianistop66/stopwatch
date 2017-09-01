import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  add0(num) {
    return num < 10 ? '0'+ num : num;
  }

  getTimeUntil(deadline) {
    const time = deadline - Date.parse(new Date());
    let seconds = Math.floor(time / 1000 % 60);
    let minutes = Math.floor(time / (1000 * 60) % 60);
    let hours = Math.floor(time / (1000* 3600) % 24);
    if (time <= 0) {
      seconds = 0;
      minutes = 0;
      hours = 0;
    }
    this.setState({hours,minutes,seconds});
    if (time === 0) {
      alert('done');
    }
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline),1000);
  }
  render() {
    return (
      <div>{this.add0(this.state.hours)}:{this.add0(this.state.minutes)}:{this.add0(this.state.seconds)}</div>
    )
  }
}

export default Stopwatch

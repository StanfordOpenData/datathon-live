import React from 'react';

const START_DATE = new Date("2021-04-09T23:00:00.000Z");
const END_DATE = new Date("2021-04-11T19:00:00.000Z");

function getTime(date) {
  let cur = new Date();
  let diff = date.getTime() - cur.getTime();
  diff = diff >= 0 ? diff : 0;
  return [
    Math.floor(diff / 1000 / 60 / 60 / 24),
    Math.floor((diff / 1000 / 60 / 60) % 24),
    Math.floor((diff / 1000 / 60) % 60),
    Math.floor((diff / 1000) % 60)
  ]
}

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let date = new Date() < START_DATE ? START_DATE : END_DATE;
    let times = getTime(date);
    return (
      <div id="countdown">
        <div id="timer">
          <TimerComponent value={[times[0], "DAYS"]}/>
          <h1 className="separator">:</h1>
          <TimerComponent value={[times[1], "HOURS"]}/>
          <h1 className="separator">:</h1>
          <TimerComponent value={[times[2], "MINUTES"]}/>
          <h1 className="separator">:</h1>
          <TimerComponent value={[times[3], "SECONDS"]}/>
        </div>
        <h1>Until {date === START_DATE ? "Opening Ceremony!" : "Submission Deadline!"}</h1>
      </div>
    )
  }
}

class TimerComponent extends React.Component {
  render() {
    var val = this.props.value[0].toString();
    if (val.length === 1) {
      val = "0" + val;
    }
    return (
      <div className = "timercomponent">
        <h1 className="timernumber">{val}</h1>
        <p className="timerunit">{this.props.value[1].toString()}</p>
      </div>
    );
  }
}


export default CountDown;
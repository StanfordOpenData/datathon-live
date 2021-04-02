import React from 'react'
import Home from '../components/home';
import CountDown from '../components/countdown';
import Links from '../components/links'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Home/>
        <CountDown/>
        <Links/>
      </div>
    )
  }
}

export default Landing;
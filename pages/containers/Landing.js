import React from 'react'
import styled from 'styled-components'

const Landing = styled.div`
  position: relative;
  display: block;
  min-height: 80vh;
  background-image: url('../../static/img/bg1.png');
  background-size: cover;
  background-position: center bottom;
  padding: 1.3em 0;
`

const LogoAlpaca = styled.img`
  margin-top: 1em;
`

const BreakImage = styled.img`
  margin-top: 2em;
`

const Btn = styled.button`
  margin-top: 1em;
`

class LandingPage extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('hello-img').className += ' animated fadeInUp'
      document.getElementById('break-img').className += ' animated fadeInUp'
      document.getElementById('register-btn').className += ' animated fadeInUp'
    }, 2900);
  }

  render() {
    return (
      <Landing className="row">
        <div className="col-12 text-center">
          <LogoAlpaca style={{ marginTop: '1em' }} id="hello-img" className="helloworld" src="../../static/img/logo.png" alt="logo-alpaca" />
        </div>
        <div className="col-12 text-center">
          <BreakImage id="break-img" className="breaklimit" src="../../static/img/desc.png" alt="break-limit" />
        </div>
        <div style={{zIndex: '10'}} className="col-12 text-center">
          <Btn id="register-btn" className="register-btn" >Coming Soon</Btn>
        </div>
        <img src="../../static/img/al1.png" alt="" className="alpaca-jump alpaca-jump-1" />
        <img src="../../static/img/al4.png" alt="" className="alpaca-jump alpaca-jump-2" />
        <img src="../../static/img/al7.png" alt="" className="alpaca-jump alpaca-jump-3" />
        <img src="../../static/img/al8.png" alt="" className="alpaca-jump alpaca-jump-4" />
      </Landing>
    )
  }
}

export default LandingPage
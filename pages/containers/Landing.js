import React from 'react'
import styled from 'styled-components'

const Landing = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
  background-image: url('../../static/img/bg1.png');
  background-size: cover;
  background-position: center bottom;
  padding: 1.3em 0;
`

const Btn = styled.button`
  // z-index: 100 !important;
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
          <img id="hello-img" className="helloworld" src="../../static/img/logo.png" alt="logo-alpaca" />
        </div>
        <div className="col-12 text-center">
          <img id="break-img" className="breaklimit" src="../../static/img/desc.png" alt="break-limit" />
        </div>
        <div className="col-12 text-center">
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
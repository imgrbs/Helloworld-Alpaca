import React from 'react'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="row landing-height">
        <div className="hello-field col-12 text-center">
          <img className="helloworld" src="../../static/img/logo.png" alt="logo-alpaca" />
        </div>
        <div style={{ marginTop : '2em' }} className="col-12 text-center">
          <img className="breaklimit" src="../../static/img/desc.png" alt="break-limit" />
        </div>
        <button className="register-btn" style={{marginTop:'2em'}}>Coming Soon</button>
        <img src="../../static/img/al1.png" alt="" className="alpaca-jump alpaca-jump-1" />
        <img src="../../static/img/al4.png" alt="" className="alpaca-jump alpaca-jump-2" />
        <img src="../../static/img/al7.png" alt="" className="alpaca-jump alpaca-jump-3" />
        <img src="../../static/img/al8.png" alt="" className="alpaca-jump alpaca-jump-4" />
      </div>
    )
  }
}

export default LandingPage
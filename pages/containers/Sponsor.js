import React from 'react'

class SponsorPage extends React.Component {
  render() {
    return (
      <div className="row sponsor-height">
        <div className="col-12 text-center">
          <br />
          Sponsor by<br />
          <img style={{ width: '350px' }} src="../../static/img/logo-sit.png" alt="logo-sit" /> <br /><br />
          <img className="bangmod-cloud" src="../../static/img/bbenter.png" alt="bangmodcloud" /> <br /><br />
          Created by<br />
          <img style={{height:'150px'}} src="../../static/img/logo-white1.png" alt="logo-alchemist" />
        </div>
      </div>
    )
  }
}

export default SponsorPage
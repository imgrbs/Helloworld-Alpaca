import React from 'react'

class SponsorPage extends React.Component {
  render() {
    return (
      <div className="row sponsor-height">
        <div className="col-12 text-center">
          <br />
          Sponsor by<br />
          <div className="col-12 d-flex mb-5 justify-content-center align-items-center flex-row">
            <img style={{ width: '120px' }} src="../../static/img/kmutt.png" alt="logo-sit" /> <br /><br />
            <img style={{ width: '220px', marginTop: '1em' }} src="../../static/img/sit.png" alt="logo-sit" /> <br /><br />
          </div>
          <img className="bangmod-cloud" src="../../static/img/bbenter.png" alt="bangmodcloud" /> <br /><br />
          Created by<br />
          <img style={{height:'145px'}} src="../../static/img/logo-white1.png" alt="logo-alchemist" />
        </div>
      </div>
    )
  }
}

export default SponsorPage
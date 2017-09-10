import React from 'react'

class SponsorPage extends React.Component {
  render() {
    return (
      <div className="row sponsor-height">
        <div className="col-12 text-center">
          Sponsor by <br />
          <img style={{width:'250px'}} src="../../static/img/logo-sit.png" alt="logo-sit" /> <br />
          created by <br />
          <img style={{height:'150px'}} src="../../static/img/logo-white1.png" alt="logo-alchemist" />
        </div>
      </div>
    )
  }
}

export default SponsorPage
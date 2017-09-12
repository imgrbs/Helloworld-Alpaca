import React from 'react'

class WhenPage extends React.Component {
  render() {
    return (
      <div name="when" id="when" className="row when-height">
        <div 
        //style={{ height:'250px' }} 
        className="col-12 text-center col-lg-6">
          {/* <img className="flip alpaca" src="../../static/img/al8.png" alt="alpaca" /> */}
        </div>
        <div className="col-12 text-center offset-lg-6 col-lg-6">
          <img className="what-text" src="../../static/img/when.png" alt="when" />
          <p>
            เราจะเปิดรับสมัครกันในวันจันทร์ที่ 18 กันยายน 2560 ถึง วันพฤหัสบดีที่ 21 กันยายน 2560 และเริ่มการเรียนการสอนวันที่ 9 ตุลาคม 2560 ถึงวันที่ 26 ตุลาคม 2560 ซึ่งเป็นเวลา 3 สัปดาห์ด้วยกัน
          </p>
        </div>
      </div>
    )
  }
}

export default WhenPage
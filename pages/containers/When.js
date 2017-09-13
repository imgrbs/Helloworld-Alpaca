import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  min-width: 100px;
  max-width: 139px;
  background: #fff;
  border-radius: 100%;
`
const ImageContainer = styled.div`
  font-family: 'quark';
  
  @media only screen and
  (min-width: 0px) {
    font-size: 0.9em;
  }
  @media only screen and
  (min-width: 800px) {
    font-size: 1em;
  }
`

class WhenPage extends React.Component {
  render() {
    return (
      <div name="when" id="when" className="row when-height">
        <div className="col-5"></div>
        <div className="col-7">
          <div className="col-12 text-center">
            <img className="what-text" src="../../static/img/when.png" alt="when" />
          </div>
          <div className="col-12 row text-center">
            <div className="col-4">
              <Img src="../../static/img/al1.png" alt="" />
            </div>
            <ImageContainer className="col-8 d-flex justify-content-center align-items-center">
              เปิดรับสมัคร วันจันทร์ที่ 18 กันยายน 2560<br />
            </ImageContainer>
            <div className="col-4">
              <Img src="../../static/img/al1.png" alt="" /> <br />
            </div>
            <ImageContainer className="col-8 d-flex justify-content-center align-items-center">
              ประกาศรายชื่อ 22 กันยายน 2560
            </ImageContainer>
            <div className="col-4">
              <Img src="../../static/img/al1.png" alt="" /> <br />
            </div>
            <ImageContainer className="col-8 d-flex justify-content-center align-items-center">
              เริ่มการเรียนการสอน 9 ตุลาคม 2560
            </ImageContainer>
            <div className="col-4">
              <Img src="../../static/img/al1.png" alt="" /> <br />
            </div>
            <ImageContainer className="col-8 d-flex justify-content-center align-items-center">
              Alpaca Day ! 26 ตุลาคม 2560
            </ImageContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default WhenPage
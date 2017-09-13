import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  min-width: 100px;
  background: #fff;
  border-radius: 100%;
  
  @media only screen and
  (min-width: 0px){
    max-width: 100px;
    margin-bottom: 1em;
  }
  
  @media only screen and
  (min-width: 1366px){
    max-width: 136px;
    margin-bottom: 0.5em;
  }
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
const Line = styled.div`
  position: absolute;
  margin-left: 27px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 10px;
  height: 250px;
  background-color: #fff;
  z-index: -1;
`

class WhenPage extends React.Component {
  render() {
    return (
      <div name="when" id="when" className="row when-height">
        <div className="col-lg-5"></div>
        <div className="col-12 col-lg-7">
          <div className="col-12 text-center">
            <img className="what-text" src="../../static/img/when.png" alt="when" />
          </div>
          <div style={{position:'relative'}} className="col-12 row text-center">
            <Line />
            <div className="col-4 text-right">
              <Img src="../../static/img/al1.png" alt="" />
            </div>
            <ImageContainer className="col-8 d-flex justify-content-flex-start align-items-center">
              เปิดรับสมัคร วันจันทร์ที่ 18 กันยายน 2560<br />
            </ImageContainer>
            <div className="col-4 text-right">
              <Img src="../../static/img/al1.png" alt="" /> <br />
            </div>
            <ImageContainer className="col-8 d-flex justify-content-flex-start align-items-center">
              ประกาศรายชื่อ 22 กันยายน 2560
            </ImageContainer>
            <div className="col-4 text-right">
              <Img src="../../static/img/al1.png" alt="" /> <br />
            </div>
            <ImageContainer className="col-8 d-flex justify-content-flex-start align-items-center">
              เริ่มการเรียนการสอน 9 ตุลาคม 2560
            </ImageContainer>
            <div className="col-4 text-right">
              <Img src="../../static/img/al1.png" alt="" /> <br />
            </div>
            <ImageContainer className="col-8 d-flex justify-content-flex-start align-items-center">
              Alpaca Day !
            </ImageContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default WhenPage
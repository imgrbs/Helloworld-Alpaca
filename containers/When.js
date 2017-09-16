import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  min-width: 100px;
  min-height: 90px;
  background: #fff;
  border-radius: 100%;
  z-index: 1;
  transition: .3s;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and
  (min-width: 0px){
    max-width: 45px;
    margin-bottom: 0.25em;
    border: 2px solid #000;
  }
  
  @media only screen and
  (min-width: 321px){
    max-width: 50px;
    margin-bottom: 1em;
  }

  @media only screen and
  (min-width: 1300px){
    max-width: 50px;
    margin-bottom: 1em;
  }
  
`
const ImageContainer = styled.div`
  font-family: 'quark';
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  text-align: left;
  
  @media only screen and
  (min-width: 0px) {
    margin-bottom: 0.5em;
    span {
      font-size: 0.7em;
    }
    .alpaca-day {
       font-size: 0.9em;
    }
  }
  @media only screen and
  (min-width: 321px) {
    margin-bottom: 1.1em;
    span {
      font-size: 0.8em;
    }
  }
  @media only screen and
  (min-width: 800px) {
    font-size: 1em;
  }

  @media only screen and
  (min-width: 1300px) {
    font-size: 1.1em;
    margin-bottom: 0.7em;
  }
`
const Line = styled.div`
  margin-top: 3px;
  position: absolute;
  width: 10px;
  height: 80%;
  background-color: #fff;
  z-index: 0;
`

class WhenPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Register: 'sleep.png',
      Announce: 'sleep.png',
      Start: 'sleep.png',
      Alpaca: 'sleep.png'
    }
  }

  async componentWillMount() {
    let DateNow = new Date().getTime()
    let Register = new Date(2017, 8, 18).getTime()
    let Announce = new Date(2017, 8, 22).getTime()
    let Start = new Date(2017, 9, 9).getTime()
    let Alpaca = new Date(2017, 10, 2).getTime()

    if(DateNow >= Register) {
      this.setState({
        Register: 'register.png'
      })
    }
    if(DateNow >= Announce) {
      this.setState({
        Announce: 'announce.png'
      })
    }
    if(DateNow >= Start) {
      this.setState({
        Start: 'start.png'
      })
    }
    if(DateNow >= Alpaca) {
      this.setState({
        Alpaca: 'dday.png'
      })
    }
  }

  render() {
    return (
      <div name="when" id="when" className="row when-height">
        <div className="col-lg-5"></div>
        <div className="col-12 col-lg-7">
          <div className="col-12 text-center">
            <img style={{ marginBottom : '1em'}} className="what-text" src="../static/img/when.png" alt="when" />
          </div>
          <div className="col-12 row text-center">
            <div style={{ position: 'relative' }} className="col-5 d-flex flex-column align-items-center">
              <Img src={`../static/img/${this.state.Register}`} alt="" />
              <Img src={`../static/img/${this.state.Announce}`} alt="" />
              <Img src={`../static/img/${this.state.Start}`} alt="" />
              <Img src={`../static/img/${this.state.Alpaca}`} alt="" />
            </div>
            <div style={{ position: 'relative' }} className="col-7 d-flex flex-column">
              <ImageContainer>
                <b>เปิดรับสมัคร</b> <span>18 กันยายน 2560</span> <br />
              </ImageContainer>
              <ImageContainer>
                <b>ประกาศรายชื่อ</b> <span>22 กันยายน 2560</span> <br />
              </ImageContainer>
              <ImageContainer>
                <b className="alpaca-day">Alpaca 1st Meet</b> <span>9 ตุลาคม 2560</span> <br />
              </ImageContainer>
              <ImageContainer>
                <b className="alpaca-day">Alpaca Day !</b> <span>Comming Soon...</span> <br />
              </ImageContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhenPage
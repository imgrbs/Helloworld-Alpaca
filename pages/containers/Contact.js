import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  height: 100%;
  display: flex;

  @media only screen and
  (min-width: 1024px) {
    .heighy-gif {
      height: 90%;
    }
  }
`
const Flur = Img.extend`
  position: absolute;
  bottom: 0;
  height: 25%; 
  min-width: 1366px; 
  width: 100%; 
  z-index : 3;
`

const PicContainer = styled.div`
  width: 100%;
  height: 45%;
  bottom: 2.5em;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  z-index: 2;
`

const BtnCustom = styled.button`
  color: #fff;
  cursor: pointer;
  background-color: transparent;
  margin-top: 1em;
  padding: 0.5em 1em;
  border-radius: 20px;
  border-style: solid;
  transition: 0.5s;
  transform: translateY(0px);
  &:hover {
    background-color: #fff;
    color: #233244;
    transform: translateY(-5px);
  }
`

const LogoFacebook = styled.img`
  border: 3px solid #fff;
  border-radius: 20px;
  padding: 1em;
  width: 5em;
  transition: 0.5s;
  transform: translateY(0px);
  &:hover {
    transform: translateY(-5px);
  }
`

class ContactPage extends React.Component {
  render() {
    return (
      <div name="contact" id="contact" className="row contact-height justify-content-center">
        <Flur src="../../static/img/bg8-1.png" alt="alpaca-gif" />
        <div className="col-12 text-center">
          <div className="col-12 text-center">
            <img className="what-text" src="../../static/img/contact.png" alt="contact" /> <br />
            <a style={{ color: 'white', textDecoration : 'none' }} className="quark" href="https://www.facebook.com/alchemistitbangmod/">
              <LogoFacebook className="animated infinite pulse" src="../../static/img/facebook-logo.png" alt="facebook-logo" /> <br/>
              <BtnCustom>@alchemistitbangmod</BtnCustom>
            </a>
          </div>
          <PicContainer>
            <Img src="../../static/img/al1.gif" alt="alpaca-gif" />
            <Img src="../../static/img/al2.gif" alt="alpaca-gif" />
            <Img src="../../static/img/al3.gif" alt="alpaca-gif" />
            <Img src="../../static/img/al4.gif" alt="alpaca-gif" />
          </PicContainer>
        </div>
      </div>
    )
  }
}

export default ContactPage
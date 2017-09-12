import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  height: 100%;
  display: flex;
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
`

class ContactPage extends React.Component {
  render() {
    return (
      <div name="contact" id="contact" className="row contact-height justify-content-center">
        <Flur src="../../static/img/bg8-1.png" alt="alpaca-gif" />
        <div className="col-12 text-center">
          <img className="what-text" src="../../static/img/contact.png" alt="contact" />
          <PicContainer>
            <Img 
              //style={{ bottom: '2.6em', left: '20%' }} 
            src="../../static/img/al1.gif" alt="alpaca-gif" />
            <Img 
              //style={{ bottom: '2.6em', left: '35%' }} 
            src="../../static/img/al2.gif" alt="alpaca-gif" />
            <Img 
              //style={{ bottom: '2.6em', right: '35%' }} 
            src="../../static/img/al3.gif" alt="alpaca-gif" />
            <Img 
              //style={{ bottom: '2.6em', right: '20%' }} 
            src="../../static/img/al4.gif" alt="alpaca-gif" />
          </PicContainer>
        </div>
      </div>
    )
  }
}

export default ContactPage
import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  height: 215px;
  position: absolute;
  bottom: 0;
  display: flex;
  `
  const PicContainer = styled.div`
  width: 100%;
  height: 40%;
  left: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

class ContactPage extends React.Component {
  render() {
    return (
      <div id="contact" className="row contact-height">
        <div className="col-12 text-center">
          <img className="what-text" src="../../static/img/contact.png" alt="contact" />
          <PicContainer>
            <Img 
              style={{ left: '20%' }} 
            src="../../static/img/al1.gif" alt="alpaca-gif" />
            {/* <Img 
              style={{ left: '33%' }} 
            src="../../static/img/al2.gif" alt="alpaca-gif" />
            <Img 
              style={{ right: '33%' }} 
            src="../../static/img/al3.gif" alt="alpaca-gif" /> */}
            <Img 
              style={{ right: '20%' }} 
            src="../../static/img/al4.gif" alt="alpaca-gif" />
          </PicContainer>
        </div>
      </div>
    )
  }
}

export default ContactPage
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  z-index: 1021;
  @media (min-width: 0px){
    padding: 1em 0.7em;
  }
  @media (min-width: 528px){
    padding: 2.5em 0.7em;  
  }
  @media (min-width: 660px){
    padding: 3.4em 0.7em;
  }
  @media (min-width: 1300px){
    padding: 4em 8em;
  }
`

const Dialog = styled.div`
  position: relative;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  z-index: 1022;
  animation-name: fadeInUp;
  background-position: bottom right;
  background-repeat: no-repeat;
  animation-duration: 0.5s;
  background-color: #fff;
  @media (min-width: 0px){
    padding: 2em 0.5em;
  }
  @media (min-width: 700px){
    background-size: 20%;
    background-image: url(../../static/img/${props => props.pic ? props.pic : '' });
  }
  @media (min-width: 1024px){
    padding: 2em;
  }
`

const Header = styled.div`
  h5{
    display: inline-block;
  }
`

const Body = styled.div`
  display: flex;
  display: -webkit-flex;
  text-align: left;
  text-indent: 2em;
  padding: 1em;
  @media (min-width: 0px) {
    max-height: 65vh;
    font-size: 0.7em;
    padding-top: 0;
  }
  @media (min-width: 375px) {
    font-size: 0.8em;
    padding-top: 1em;
  }
  @media (min-width: 445px) {
    overflow-y: hidden;
  }
  @media (min-width: 1300px) {
    font-size: 1em;
  }
  @media (min-width: 1440px) {
    font-size: 1.15em;
  }
  @media (min-width: 1600px) {
    font-size: 1.3em;
  }
`

const CustomBtn = styled.button`
  cursor: pointer;
  top: 1em;
  right: 1em;
  position: absolute;
  @media (min-width: 1024px) {
    font-size: 2em;
    right: 0.5em;
    top: 0.5em;
  }
`

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      on : false
    }
  }

  render() {
    return (
      <Div className="modal" active={this.props.on}>
        <Dialog pic={this.props.pic} className="b-modal-dialog animated fadeInup"  role="document">
          <div className="b-modal-content d-flex justify-content-center align-items-center flex-column">
            <Header className="b-modal-header">
              <CustomBtn type="button" className="close" onClick={() => { this.props.handle() }}>
                <span aria-hidden="true">✕</span>
              </CustomBtn>
              <h1 className="">{this.props.title}</h1>
            </Header>
            <Body>
              <p dangerouslySetInnerHTML={{ __html: `${this.props.desc}`}}></p>
            </Body>
          </div>
        </Dialog>
      </Div>
    )
  }
}

export default Modal
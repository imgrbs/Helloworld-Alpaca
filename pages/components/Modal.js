import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  // cursor: pointer;
  display: ${props => props.active ? 'block' : 'none'};
  z-index: 1021;
  @media (min-width: 0px){
    padding: 1em 0.7em;
  }
  @media (min-width: 1024px){
    padding: 1.5em;
  }
`

const Dialog = styled.div`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  z-index: 1022;
  padding: 2em;
  // background-image: url('/static/img/cloud2.png');
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  background-color: #fff;
  @media (min-width: 0px){
  }
  @media (min-width: 1024px){
    // background: transparent;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 70%;
    // background-image: url('/static/img/cloud.png');
  }
`

const Content = styled.div`
  // width: 600px;
  // margin: auto;
`

const Header = styled.div`
  border-bottom: 1px solid #d6d6d6;
  padding: 15px;

  h5{
    display: inline-block;
  }
`

const Body = styled.div`
  text-align: left;
  text-indent: 2em;
  padding: 15px;
  // max-height: 9em;
  // overflow-y: scroll;
  
`

const Footer = styled.div`
  border-top: 1px solid #d6d6d6;
  padding: 15px;
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
      <Div className="modal" active={this.props.on}
      >
        <Dialog className="b-modal-dialog animated fadeInup"  role="document">
          <Content className="b-modal-content">
            <Header className="b-modal-header">
              <h1 className="modal-title">{this.props.title}</h1>
            </Header>
            <Body className="modal-body">
              <p>{this.props.desc}</p>
            </Body>
            <Footer className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ cursor: 'pointer' }}
                onClick={() => { this.props.handle() }}
              >
                Close
              </button>
            </Footer>
          </Content>
        </Dialog>
      </Div>
    )
  }
}

export default Modal
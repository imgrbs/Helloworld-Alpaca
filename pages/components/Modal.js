import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  // cursor: pointer;
  display: ${props => props.active ? 'block' : 'none'};
  z-index: 1021;
`

const Dialog = styled.div`
  margin: 3em auto 0;
  padding: 75px 30px 70px;
  z-index: 1022;
  background: url('/static/img/cright.png');
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  background-size: 100% 100%;
  @media (min-width: 576px){
    max-width: 600px;
    padding: 75px 130px 70px;
    margin: 30px auto;
  }
`

const Content = styled.div`
  // width: 600px;
  // margin: auto;
`

const Header = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding: 15px;

  h5{
    display: inline-block;
  }
`

const Body = styled.div`
  padding: 15px;
  
`

const Footer = styled.div`
  border-top: 1px solid #e9ecef;
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
        onClick={() => { this.props.handle() }}        
      >
        <Dialog className="b-modal-dialog animated fadeInup"  role="document">
          <Content className="b-modal-content">
            <Header className="b-modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button type="button" className="close" onClick={ () => {this.props.handle()} }>
               <span aria-hidden="true">&times;</span>
              </button>
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
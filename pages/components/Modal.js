import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  cursor: pointer;
  display: ${props => props.on ? 'block' : 'none'};
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
      <Div className="modal" onClick={() => { this.props.handle() }} on={this.props.on}>
        <div className={`modal-dialog animated fadeInUp`} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button type="button" className="close" onClick={ () => {this.props.handle()} }>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.desc}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => { this.props.handle() }}>Close</button>
            </div>
          </div>
        </div>
      </Div>
    )
  }
}

export default Modal
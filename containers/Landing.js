import React from 'react'
import styled from 'styled-components'

const Landing = styled.div`
  position: relative;
  display: block;
  background-image: url('../static/img/bg1.png');
  background-size: cover;
  background-position: center bottom;
  padding: 1.3em 0;
  @media (min-width: 0px) {
    min-height: 80vh;
  }
  @media (min-width: 1300px) {
    min-height: 90vh;
  }
`

const LogoAlpaca = styled.img`
  margin-top: 1em;
`

const BreakImage = styled.img`
  margin-top: 2em;
`

const Btn = styled.button`
  margin-top: 1em;
`

class LandingPage extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       text: 'Comming Soon',
       status: false
     }
   }

   componentWillMount() {
    let Now = new Date(2017, 9, 4)
    let Open = new Date(2017, 8, 18)
    Open.setHours(19)
    Open.setMinutes(0)
    Open.setSeconds(0)
    let Announce = new Date(2017, 8, 22)
    Announce.setHours(19)
    Announce.setMinutes(0)
    Announce.setSeconds(0)
    Now = Now.getTime()
    Open = Open.getTime()
    let Start = new Date("Oct 9, 2017 13:30:00").getTime();
    let End = new Date("Oct 27, 2017 20:30:00").getTime();
    

    // if(Now >= Announce.getTime()) {
    //   this.setState({
    //     text: 'Announcement!',
    //     status: false
    //   })
    // } else if (Now >= Open) {
    //   this.setState({
    //     text: 'Register!',
    //     status: true
    //   })
    // }
  }

  componentDidMount() {
    setTimeout(() => {
      document.getElementById('hello-img').className += ' animated fadeInUp'
      document.getElementById('break-img').className += ' animated fadeInUp'
      document.getElementById('register-btn').className += ' animated fadeInUp'
      let Now = new Date()
      Now = Now.getTime()
      let Start = new Date("Oct 9, 2017 13:30:00").getTime();
      let End = new Date("Oct 27, 2017 20:30:00").getTime();
      if(Now > End){
        this.setState({
          text: 'End!',
          status: false
        })
      }else if(Now <= Start){
        Now = new Date().getTime()
        // Find the distance between now an the count down date
        var distance = Start - Now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="demo"
        let text = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
        // this.setState({ text })
        document.getElementById('register-btn').innerHTML = text
        this.showTime(Start)
      }else{
        this.setState({
          text: 'Started!',
          status: false
        })
      }
      
      
    }, 2000);
  }
  
  showTime = (Start) => {
    this.setState({
      status: false
    })
    let text = ''
    var x = setInterval(function() {
        
        let Now = new Date().getTime()
        // Find the distance between now an the count down date
        var distance = Start - Now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="register-btn"
        text = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
        
        document.getElementById('register-btn').innerHTML = text
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x)
            // text: 'Start!'
            document.getElementById("register-btn").innerHTML = "Start!"
        }
    }, 1000);
    
  }

  render() {
    return (
      <Landing className="row">
        <div className="col-12 text-center">
          <LogoAlpaca style={{ marginTop: '1em' }} id="hello-img" className="helloworld" src="../../static/img/logo.png" alt="logo-alpaca" />
        </div>
        <div className="col-12 text-center">
          <BreakImage id="break-img" className="breaklimit" src="../static/img/desc.png" alt="break-limit" />
        </div>
        <div style={{zIndex: '10'}} className="col-12 text-center">
          <a href={this.state.status ? 'https://passport.kmutt.ac.th/event/helloworld-alpaca' : 'https://announce.helloworld.itbangmod.in.th'}>
            <Btn id="register-btn" className="register-btn" >{this.state.text}</Btn>
          </a>
        </div>
        <img src="../../static/img/al1.png" alt="" className="alpaca-jump alpaca-jump-1" />
        <img src="../../static/img/al4.png" alt="" className="alpaca-jump alpaca-jump-2" />
        <img src="../../static/img/al7.png" alt="" className="alpaca-jump alpaca-jump-3" />
        <img src="../../static/img/al8.png" alt="" className="alpaca-jump alpaca-jump-4" />
      </Landing>
    )
  }
}

export default LandingPage
import React from 'react'
import Head from 'next/head'

import styled from 'styled-components'

import Nav from './components/Navbar'
import Preload from './components/Preload'

import Landing from './containers/Landing'
import Why from './containers/Why'
import Team from './containers/Team'
import Where from './containers/Where'
import When from './containers/When'
import Sponsor from './containers/Sponsor'
import Game from './containers/Game'
import Portfolio from './containers/Portfolio'
import Contact from './containers/Contact'
import Footer from './containers/Footer'

const MainContainer = styled.div`
  display: ${props => props.display ? 'block' : 'none'}
`

class Index extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      display: false,
      stuck: false,
      h: '',
      topElement: ''
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.setState({
      h: document.getElementById('nav'),
    })
    setTimeout(() => {
      this.setState({
        display: true,
        topElement: document.getElementById('nav').offsetTop
      })
      // this.setState({ h: document.getElementById("nav") })
      // this.setState({ stickyPoint: document.getElementById("nav").offsetTop })
      
      window.addEventListener('scroll', this.handleScroll);
    }, 2000);
    setTimeout(()=>{
      this.setState({
        topElement: document.getElementById('nav').offsetTop
      })
      console.log(t)
      // console.log('topasdfasd: '+this.state.topElement)
    },3000)

  }

  // handleScroll(event) {
  //   let distance = h.offsetTop - window.pageYOffset
  //   let offset = window.pageYOffset
  //   let tempStuck = this.state.stuck
  //   let tempH = this.state.h
  //   let tempStickPoint = this.state.stickyPoint
  //   // console.log('tempH: '+this.state.h)    
  //   console.log('tempH: '+tempH)
  //   // tempReadout.innerHTML = tempStickPoint + '   ' + distance + '   ' + offset + '   ' + tempStuck;
  //   if ( (distance <= 0) && !tempStuck) {
  //     tempH.style.position = 'fixed';
  //     tempH.style.top = '0px';
  //     // stuck = true;
  //     this.setState({stuck: true})
  //   } else if (tempStuck && (offset <= tempStickPoint)){
  //     tempH.style.position = 'static';
  //     this.setState({stuck: false})
  //     // stuck = false;
  //   }
  // }

  handleScroll(e) {
    // console.log(this.state.h.offsetTop)
    // console.log('test')
    let hi = this.state.h
    let offset = window.pageYOffset
    let distance = hi.offsetTop - offset
    let st = this.state.stuck
    console.log('hi: ' + hi.offsetTop)
    console.log('top: ' + this.state.topElement)
    console.log('offset: ' + offset)
    console.log('if1' + distance <= 0 )
    console.log('if2' + offset <= this.state.topElement)
    if ( distance <= 0  && !st) {
      hi.style.position = 'fixed';
      hi.style.top = '0px';
      this.setState({ stuck: true })
    } else if (st && (offset <= this.state.topElement)) {
      hi.style.position = '';
      console.log('else')
      this.setState({ stuck: false })
    }

  }

  render() {
    return (
      <div >
        <Head>
          <title>HelloWorld #Alpaca</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta charset="UTF-8" />
          <meta property="og:title" content="HelloWorld #Alpaca" />
          <meta property="og:type" content="company" />
          <meta property="og:url" content="https://helloworld.itbangmod.in.th/" />
          {/* <meta property="og:image" content="" /> */}
          <meta property="og:site_name" content="HelloWorld #Alpaca By Alchemist" />
          <meta property="og:description" content="Break Your Limit and Practice Your Skill!" />
          {/* <meta property="fb:page_id" content="1767691256809451"> */}
          <link rel="icon" type="image/ico" href="../static/favicon.ico" sizes="16x16" />
          <meta name="msapplication-TileColor" content="#FFD101" />
          <meta name="theme-color" content="#FFD101" />

          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
        </Head>

        <Preload />
        
        <MainContainer display={this.state.display} data-spy="scroll" className="container-fluid">
          <Landing />
          <Nav />
          <Why />
          <Team />
          <Where />
          <When />
          <Sponsor />
          <Game />
          <Portfolio />
          <Contact />
          <Footer />
        </MainContainer>

      </div>
    )
  }
}

export default Index
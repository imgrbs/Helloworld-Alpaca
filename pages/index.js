import React from 'react'
import Head from 'next/head'

import styled, { injectGlobal } from 'styled-components'

import Preload from '../components/Preload'
import Nav from '../components/Navbar'

import Landing from '../containers/Landing'
import Why from '../containers/Why'
import Team from '../containers/Team'
import Where from '../containers/Where'
import When from '../containers/When'
import Sponsor from '../containers/Sponsor'
import Game from '../containers/Game'
import Portfolio from '../containers/Portfolio'
import Contact from '../containers/Contact'
import Footer from '../containers/Footer'

const MainContainer = styled.div`
  display: ${props => props.display ? 'block' : 'none'}
`

const ga = `
  (function (i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-106338310-1', 'auto');
  ga('send', 'pageview');
`

const fb_init = `
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '131273967425703',
      xfbml      : true,
      version    : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
`
const Percent = '40%'

injectGlobal`
  // html {
  //   -webkit-filter: grayscale( ${Percent} ) !important; /* Chrome 19+, Safari 6+, Safari 6+ iOS */
  //   -moz-filter: grayscale( ${Percent} ) !important;
  //  -o-filter: grayscale(${Percent}) !important;
  //  filter: grayscale(${Percent}) !important; /* IE6-9 */
  // }
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

  async componentWillMount() {
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
      // console.log('topasdfasd: '+this.state.topElement)
    },3000)
  }

  handleScroll(e) {
    let hi = this.state.h
    let offset = window.pageYOffset
    let distance = hi.offsetTop - offset
    let st = this.state.stuck
    if ( distance <= 0  && !st) {
      hi.style.position = 'fixed';
      hi.style.top = '0px';
      this.setState({ stuck: true })
    } else if (st && (offset <= this.state.topElement)) {
      hi.style.position = '';
      this.setState({ stuck: false })
    }

  }

  render() {
    return (
      <div >
        <Head>
          <title>HelloWorld #Alpaca</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

          <meta charSet="UTF-8" />
          <meta property="og:title" content="HelloWorld #Alpaca" />
          <meta property="og:type" content="pages" />
          <meta property="og:url" content="https://helloworld.itbangmod.in.th/" />
          <meta property="og:image" content="https://helloworld.itbangmod.in.th/static/img/og.png" />
          <meta property="og:site_name" content="HelloWorld #Alpaca By Alchemist" />
          <meta property="og:description" content="Break Your Limit and Practice Your Skill!" />
          <meta property="fb:page_id" content="1298270230190822" />
          <meta property="fb:app_id" content="131273967425703" />
          <link rel="icon" type="image/ico" href="../static/favicon.ico" sizes="16x16" />
          <meta name="msapplication-TileColor" content="#FFD101" />
          <meta name="theme-color" content="#FFD101" />
          <script dangerouslySetInnerHTML={{ __html: ga }} />
          <script dangerouslySetInnerHTML={{ __html: fb_init }} />
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
        </Head>

        <Preload />
        
        <MainContainer id="main-container" display={this.state.display} data-spy="scroll" className="container-fluid">
          <Landing />
          <Nav />
          <Why />
          <Team />
          <Where />
          <When />
          <Sponsor />
          <Game />
          {/* <Portfolio /> */}
          <Contact />
          <Footer />
        </MainContainer>

      </div>
    )
  }
}

export default Index
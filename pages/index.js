import React from 'react'
import Head from 'next/head'

import Nav from './components/Navbar'

import Landing from './containers/Landing'
import Why from './containers/Why'
import Team from './containers/Team'
import Where from './containers/Where'
import When from './containers/When'
import Sponsor from './containers/Sponsor'
import Game from './containers/Game'
import Portfolio from './containers/Portfolio'
import Contact from './containers/Contact'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>HelloWorld #Alpaca</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
          <script src="../static/js/jquery.min.js"></script>
          <script src="../static/js/bootstrap.min.js"></script>
        </Head>
        <div className="container-fluid">
        </div>
        <div className="container-fluid">
          <Landing />
          <div id="nav" className="row">
            <div className="col-12">
              <Nav />
            </div>
          </div>
          <Why />
          <Team />
          <Where />
          <When />
          <Sponsor />
          <Game />
          <Portfolio />
          <Contact />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="row">
                footer
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
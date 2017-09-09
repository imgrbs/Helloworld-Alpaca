import React from 'react'
import Head from 'next/head'

import Landing from './containers/Landing'
import Why from './containers/Why'
import Team from './containers/Team'
import Where from './containers/Where'
import Sponsor from './containers/Sponsor'
import Game from './containers/Game'
import Portfolio from './containers/Portfolio'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>HelloWorld #Alpaca</title>
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
        </Head>
        <div className="container-fluid">
          <Landing />
          <Why />
          <Team />
          <Where />
          <Sponsor />
          <Game />
          <Portfolio />
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
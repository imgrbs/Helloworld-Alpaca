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
          <script src="../static/js/jquery.min.js"></script>
          {/* <script src="../static/js/bootstrap.min.js"></script> */}
          {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
        </Head>
        <div className="container-fluid">
        </div>
        <div data-spy="scroll" className="container-fluid">
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
        </div>
        <footer className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="row text-center">
                footer
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Index
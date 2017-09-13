import React from 'react'
import Head from 'next/head'
import ReactGA from 'react-ga'


import styled, { injectGlobal } from 'styled-components'
import Preload from './components/Preload'

injectGlobal`
    body{
        background: url('../static/img/bg1.png');
    }
`

const Container = styled.div`
    text-align: center;
`

const MobileContainer = styled.div`
    background: #FFD101;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    // display: none;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    @media (min-width: 420px) {
        display: none;
    }
    text-align:center;
    font-size: 40px;
`

const Content = styled.div`
    display: ${props => props.display ? 'block':'none'};
    @media (max-width: 420px) {
        display: none;
    }
`

const Fa = styled.i`
    font-size: 10em !important;
    display: block !important;
    text-align: center;
    margin: auto;
`
const Header = styled.h1`
    // position: relative;
    // top: 1em;
    // left: 0;
    // display: ${props => props.display ? 'block':'none'};
    
    margin-top:0.5em;
    text-align: center;
    width:100%;
`
const GameCanvas = styled.canvas`
    // position: relative;
    // // top: 3em;
    // left: 0;
    // right: 0;

    margin: 0.5em auto 1em;
    display: block;
    touch-action: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: inherit;
    width: 980px;
    height: 550px;

    background: pink;
`

class GameContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false
        }
    }

    async componentWillMount() {
        ReactGA.initialize('UA-106338310-1')
        ReactGA.set({ page: this.props.url.pathname })
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({ display: true })
        }, 2000)
    }

    render() {
        return (
            <div>
                <Head>
                    <title>HelloWorld #Alpaca | game</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <meta charset="UTF-8" />
                    <meta property="og:title" content="HelloWorld #Alpaca" />
                    <meta property="og:type" content="company" />
                    <meta property="og:url" content="https://helloworld.itbangmod.in.th/" />
                    <meta property="og:image" content="../static/img/og.png" />
                    <meta property="og:site_name" content="HelloWorld #Alpaca By Alchemist" />
                    <meta property="og:description" content="Break Your Limit and Practice Your Skill!" />
                    <meta property="fb:page_id" content="1298270230190822" />
                    <link rel="icon" type="image/ico" href="../static/favicon.ico" sizes="16x16" />
                    <meta name="msapplication-TileColor" content="#FFD101" />
                    <meta name="theme-color" content="#FFD101" />

                    <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"  crossorigin="anonymous" />
                </Head>
                <Preload />

                <Content display={this.state.display}>
                    <div className="container text-center">
                        <Header>Game Alpaca</Header>
                        <div id="game">
                            <GameCanvas />
                        </div>
                    </div>
                </Content>
                <MobileContainer>
                    <div>
                        <Fa className="fa fa-mobile" aria-hidden="true" />
                        <span>ขนาดหน้าจอเล็กเกินไป</span>
                    </div>
                </MobileContainer>
            </div>
        )
    }
}

export default GameContainer
import React from 'react'
import Head from 'next/head'

import styled, { injectGlobal } from 'styled-components'

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

const Fa = styled.i`
    font-size: 10em !important;
    display: block !important;
    text-align: center;
    margin: auto;
`


class GameContainer extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>HelloWorld #Alpaca</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />

                    <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/style.css" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"  crossorigin="anonymous" />
                </Head>
                <Container className="container">
                    Game Alpaca

                </Container>
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
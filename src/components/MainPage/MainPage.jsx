import React from 'react'
import Header from '../subcomponents/Header/Header'
import './MainPage.scss'
import Particles from 'react-particles-js';
import { motion } from 'framer-motion'

function MainPage() {
    return (
        <motion.main
            key="modal"
            initial={{ opacity: 1, y: "-40%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{
                opacity: 0, y: "-60%", transition: {
                    delay: 0,
                    duration: 0.3
                }
            }}
            className="main">
            <section className="text">
                <Header />
                <div className="text-description">
                    <h2 className="text__header">Hi, my name is <span className="text__header-span">Dan.</span></h2>
                    <h3 className="text__headersmall"><span className="text__headersmall-span">A Developer:</span></h3>
                </div>
            </section>
            <section className="animation">

                <ul class="animation-box">
                    <li class="animation-box__li">Node.js</li>
                    <li class="animation-box__li">SQL</li>
                    <li class="animation-box__li">MongoDB</li>
                    <li class="animation-box__li">Socket.io</li>
                    <li class="animation-box__li">Express</li>
                    <li class="animation-box__li">SASS</li>

                    <li class="animation-box__li">CSS</li>
                    <li class="animation-box__li">JavaScript</li>
                    <li class="animation-box__li">React.JS</li>

                </ul>
                <div className="particles">
                    <Particles
                        style={{
                            height: '100vh',
                            width:'100vw',
                        }}
                        params={{
                            "particles": {
                                "number": {
                                    "value": 30,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 10,
                                    "random": true
                                },
                                "move": {
                                    "direction": "top",
                                    "out_mode": "out"
                                },
                                "line_linked": {
                                    "enable": false
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "remove"
                                    }
                                },
                                "modes": {
                                    "remove": {
                                        "particles_nb": 10
                                    }
                                }
                            }
                        }} />
                </div>

            </section>
        </motion.main>
    )
}

export default MainPage

import React from 'react'
import Header from '../subcomponents/Header/Header'
import './AboutPage.scss'
import me from '../../data/images/Capture.JPG'
import Particles from 'react-particles-js';
import { motion } from 'framer-motion'


function AboutPage() {
    return (
        <motion.main className="about"
            initial={{ opacity: 1, y: "20%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{
                opacity: 0, y: "-50%", transition: {
                    delay: 0,
                    duration: 0.3
                }
            }}
        >
            <section className="atext">
                <Header />
                <div className="atext-description">
                    <h1 className="atext__header"> <span className="atext__header-span">About </span>Me</h1>

                    <div className="atext-box">

                        <div className="atext-text">
                            <h3 className="atext__h3">I was once a regular guy, indifferent to technology...</h3>
                            <p className="atext__parag"> <img className="atext__profile" src={me} alt="the creator" />Now I live and breathe code - as if it was what I was born to do.
                                <br></br>
                                Well, maybe it really is true; building has always been my passion, and after all, what is more exciting to build than the closest thing to magic there is in the real world?

                               <p className="atext__paragIns">I am always eager to learn, hungry for improvement, and passionate about every task that is at hand - yes, I can code for long, long hours on end, without stopping!    <br>
                               </br>  And I can honestly tell you that It will always be that way, just because I love writing code; there's nothing quite as cool as this thing.</p> 
              

                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="animation">
                <Particles
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
            </section>
        </motion.main>
    )
}

export default AboutPage

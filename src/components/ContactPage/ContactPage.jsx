import React from 'react'
import Header from '../subcomponents/Header/Header'
import './ContactPage.scss'
import emailjs from 'emailjs-com'
import github from '../../data/images/github.png'
import linkedin from '../../data/images/linkedin.png'
import Particles from 'react-particles-js';
import {motion } from 'framer-motion'

function ContactPage() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ez7xc5k', 'template_7javsd5', e.target, 'user_Q6wfqO319ZhjLbKmb15BO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <motion.main className="about"
        initial={{ opacity: 1, y: "20%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{
            opacity: 0, y: "-50%", transition: {
                delay: 0,
                duration: 0.3
            }
        }}>
            <section className="ctext">
                <Header />
                <div className="ctext-description">
                    <h1 className="ctext__header"> <span className="ctext__header-span">Contact </span> Me</h1>
                    <div className="ctext-box">
                        <div className="nav__logoWrap">
                            <span className="nav__logo">D</span>
                            <ul className="ctext-links">
                                <li><a href="https://github.com/danielhyr"><img className="ctext-links__iconsGit" src={github} /></a></li>
                                <li>
                                    <a href="https://www.linkedin.com/in/daniel-h-rha/"><img className="ctext-links__icons" src={linkedin} /></a></li>
                            </ul>
                        </div>

                        <h2 className="ctext__h2">Shoot me an Email</h2>

                        <form class="form" onSubmit={sendEmail}>
                            <div class="wideWrap">
                                <div class="styled-input wide">
                                    <input name="email" type="email" required  placeholder = "your email"/>
                                </div>
                            </div>
                            <div className="styled-mid">
                                <div class="styled-input">
                                    <input name="name" type="text" required  placeholder = "name" />
                                </div>
                                <div class="styled-input styled-input--2">
                                    <input name="subject" type="text" required  placeholder = "subject"/>
                                </div>
                            </div>

                            <div class="lastWrap">
                                <div class="styled-input wide">
                                    <textarea placeholder = "message" name="message" required></textarea>
                                </div>
                            </div>
                            <div class="btnWrap">
                                <button type="submit" class="submit-btn">Send Message</button>
                            </div>
                        </form>
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

export default ContactPage

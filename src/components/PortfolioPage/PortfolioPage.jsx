import { useState, useEffect } from 'react'
import Header from '../subcomponents/Header/Header'
import './PortfolioPage.scss'
import Carousel from 'react-elastic-carousel'
import Particles from 'react-particles-js';
import { motion } from 'framer-motion'
import Modal from '../subcomponents/Modal/Modal';

import Standup1 from '../../data/images/standups-1.PNG'
import Standup2 from '../../data/images/standups-2.PNG'
import Standup3 from '../../data/images/standups-3.PNG'
import Standup4 from '../../data/images/standups-4.PNG'

import Bandsite1 from '../../data/images/bandsite-2.PNG'
import Bandsite2 from '../../data/images/bandsite-1.PNG'
import Bandsite3 from '../../data/images/bandsite-3.PNG'

import Brainflix1 from '../../data/images/brainflix-2.PNG'
import Brainflix2 from '../../data/images/brainflix-1.PNG'
import Brainflix3 from '../../data/images/brainflix-3.PNG'


import safer1 from '../../data/images/safer-2.PNG'
import safer2 from '../../data/images/safer-1.PNG'
import safer3 from '../../data/images/safer-3.PNG'

import coffee1 from '../../data/images/coffee-2.PNG'
import coffee2 from '../../data/images/coffee-1.PNG'
import coffee3 from '../../data/images/coffee-3.PNG'


import instock1 from '../../data/images/instock-1.PNG'
import instock2 from '../../data/images/instock-2.PNG'
import instock3 from '../../data/images/instock-3.PNG'
import instock4 from '../../data/images/instock-4.PNG'
import instock5 from '../../data/images/instock-5.PNG'

import ES6 from '../../data/icons/ES6.jpg'
import jwt from '../../data/icons/jwt.png'
import mongodb from '../../data/icons/mongodb.svg'
import node from '../../data/icons/node.jpg'
import react from '../../data/icons/react.png'
import sass from '../../data/icons/sass.png'
import socketio from '../../data/icons/socketio.png'
import axios from '../../data/icons/axios.png'
import htmlimg from '../../data/icons/html.png'



const standupsImg = [ES6, jwt, mongodb, node, react, sass, socketio, axios]
const bandsiteImg = [htmlimg, ES6, sass, axios]
const brainflixImg = [ES6, sass, axios, node, react]
const saferImg = [ES6, sass, axios, node, react]
const coffeeImg = [htmlimg, sass]
const instockImg = [ES6, sass, axios, node, react]



const standups = [Standup1, Standup2, Standup3, Standup4]
const bandsite = [Bandsite1, Bandsite2, Bandsite3]
const brainflix = [Brainflix1, Brainflix2, Brainflix3]
const safer = [safer1, safer2, safer3]
const coffee = [coffee1, coffee2, coffee3]
const instock = [instock1, instock2, instock3, instock4, instock5]


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1268, itemsToShow: 4 },

]


function PortfolioPage() {

    const [pic, setPic] = useState(null)
    const [pic2, setPic2] = useState(null)
    const [pic3, setPic3] = useState(null)
    const [pic4, setPic4] = useState(null)
    const [pic5, setPic5] = useState(null)
    const [pic6, setPic6] = useState(null)


    const [show, setShow] = useState(false)

    const [name, setName] = useState(false)
    const [description, setDescription] = useState(null)
    const [pictures, setPictures] = useState(null)
    const [tech, setTech] = useState(null)
    const [link, setLink] = useState(null)


    useEffect(() => {
        setInterval(function () {
            setPic(standups[Math.floor(Math.random() * standups.length)])
            setPic2(bandsite[Math.floor(Math.random() * bandsite.length)])
            setPic3(brainflix[Math.floor(Math.random() * brainflix.length)])
            setPic4(safer[Math.floor(Math.random() * safer.length)])
            setPic5(instock[Math.floor(Math.random() * instock.length)])
            setPic6(coffee[Math.floor(Math.random() * coffee.length)])

        }, 3000);

    }, [])


    const onClickHandler = (name, description, pictures, tech, link) => {
        show ? setShow(false) : setShow(true)

        setName(name)
        setDescription(description)
        setPictures(pictures)
        setTech(tech)
        setLink(link)
    }


    return (
        <motion.main
        initial={{ opacity: 1, y: "20%" }}
        animate={{ opacity: 1, y: "0%" }}
            exit={{
                opacity: 0, y: "-50%", transition: {
                    delay: 0,
                    duration: 0.3
                }
            }}
            className="portfolio">
            <section className="ptext">
                <Header />
                <div className="ptext-description">
                    <h1 className="ptext__header"> <span className="ptext__header-span">My </span>Portfolio</h1>
                    <div className="ptext-box">
            
                        <Carousel
                            easing="cubic-bezier(1,.15,.55,1.1)"
                            breakPoints={breakPoints} focusOnSelect={false}>
                            <div className="ptext-box__card" onClick={() => {
                                onClickHandler("Standups", "Standups is a unique social media application that makes use of the C.R.U.D principles. (Create, Read, Update, Delete) ", standups, standupsImg, ["https://www.youtube.com/watch?v=hKe_s8f9SGQ&t=5s", "https://github.com/danielhyr/capstone_studi"])
                            }}>
                                <img src={pic} className="ptext-box__img" />
                                <p>Standups</p>
                            </div>
                            <div className="ptext-box__card"  onClick={() => {
                                onClickHandler("Safer", "Safer is a Brainstation x Google hackathon project that was created with myself and 4 other teammates across multiple disciplines that educates the users about web safety.", safer, saferImg, ["https://www.youtube.com/watch?v=M8bdaKIYoFo&t=22s", "https://github.com/danielhyr/safer"])
                            }}>
                                <img src={pic4} className="ptext-box__img" />
                                <p>Safer</p>
                            </div>
                            <div className="ptext-box__card" onClick={() => {
                                onClickHandler("Instock", "Instock was created with myself and two other developers, making use of C.R.U.D principles with a JSON-based backend web server. ", instock, instockImg, ["https://www.youtube.com/watch?v=c3oNJ-y_5C0&t=67s", "https://github.com/danielhyr/instock"])
                            }}>
                                <img src={pic5} className="ptext-box__img" />

                                <p>Instock</p>

                            </div>
                            <div className="ptext-box__card" onClick={() => {
                                onClickHandler("Bandsite", "Bandsite is a front-end-design focused project that showcases Javascript, SASS styling, and HTML as an all-in-one.", bandsite, bandsiteImg, ["https://www.youtube.com/watch?v=Y9efBYRU8wU", "https://github.com/danielhyr/daniel-rha-bandsite"])
                            }}>
                                <img src={pic2} className="ptext-box__img" />
                                <p>Bandsite</p>

                            </div>
                            <div className="ptext-box__card" onClick={() => {
                                onClickHandler("Brainflix", "Brainflix is a react-based application in which users can browse through videos, post new ones,or comment on those existing videos as they would like.", brainflix, brainflixImg, ["https://www.youtube.com/watch?v=yNK2abvKy64", "https://github.com/danielhyr/daniel-rha-brainflix"])
                            }}>
                                <img src={pic3} className="ptext-box__img" />
                                <p>Brainflix</p>
                            </div>
                            <div className="ptext-box__card" onClick={() => {
                                onClickHandler("Nitro Coffee", "The very first project that was created by myself, in which I made use of HTML and SASS to create a well-designed sales website. ", coffee, coffeeImg, ["https://www.youtube.com/watch?v=-il3Tn2H_UE&t=39s"])
                            }}>
                                <img src={pic6} className="ptext-box__img" />
                                <p>Nitro Coffee</p>
                            </div>
                        </Carousel>
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

            <Modal
                setShow={setShow}
                show={show}
                name={name}
                description={description}
                pictures = {pictures}
                tech = {tech}
                link = {link}
            />
        </motion.main>
    )
}

export default PortfolioPage

import React from 'react'
import './Header.scss'
import { useHistory } from 'react-router-dom'

import { motion } from 'framer-motion'

function Header() {
    const history = useHistory()
    const duration = {duration: .6, ease: [.6, .01, -0.05, 0.9] }

    return (
        <>

            <motion.ul 
            whileHover={{scale:1.05}}
            transition= {duration}
            className="nav">

                <div className="nav__liWrap" >
                    <li className="nav__list" onClick={() => history.push('/')}>
                        Home
                    </li>
                </div>
                <div className="nav__liWrap" >
                    <li className="nav__list" onClick={() => history.push('/about')}>
                        About
                    </li>
                </div>
                <div className="nav__liWrap" >
                    <li className="nav__list" onClick={() => history.push('/portfolio')}>
                        Portfolio
                    </li>
                </div>
                <div className="nav__liWrap" >
                    <li className="nav__list" onClick={() => history.push('/contact')}>
                        Contact
                    </li>
                </div>


            </motion.ul>
        </>
    )
}

export default Header

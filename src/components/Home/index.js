import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faJ} from '@fortawesome/free-solid-svg-icons'; 


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','d','e','n', ',']
    const jobArray = ['a','n',' ','N','U','S',' ', 'U','n','d','e','r','g','r','a','d','u','a','t','e','.']
    
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        }, [])
    
    return (
        <div className = "container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br /> 
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 

                <FontAwesomeIcon icon={faJ} className="j-icon" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15} />
                </h1>
                <h2>Computer Engineering Student / RPA Intern</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />

        </div>
    )
}

export default Home
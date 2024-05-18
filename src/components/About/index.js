import "./index.scss"
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    
    return (
        <div className='container about-page'>
            <div className='text=zone'>
                <h1>
                    <AnimatedLetters
                        strArray={["A", 'b','o','u','t',' ','m','e']}
                        idx = {15}
                    />
                </h1>
                <p>
                    I am an ambitious and driven student and intern looking to make his mark in the world of
                    engineering, hoping to work on challenging and diverse projects.
                </p>
                <p>
                    Between juggling internships, projects, and school, in my free time I enjoy going to the gym,
                    playing squash, video games, and watching sports.
                </p>
                <p>
                    If I had to describe myself in one sentence, it would be that I am a quienty confident, carefully curious and adventurous individual
                    perpetually working on honing my skills project by project.
                </p>
            
            </div>
        </div>
    )
}

export default About

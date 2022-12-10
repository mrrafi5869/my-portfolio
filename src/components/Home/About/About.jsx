import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='w-9/12 mx-auto my-20'>
            <h1 className='contact-head text-3xl text-center'>My Skills</h1>
            <div className='skills grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div>
                    <p className='contact-head text-3xl text-center mt-5'>Front End</p>
                <div className='skill'>
                    <div className="skill-name">HTML</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='95%' style={{maxWidth:"95%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className="skill-name">CSS</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='80%' style={{maxWidth:"80%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className="skill-name">Bootstrap</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='85%' style={{maxWidth:"85%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className="skill-name">CSS</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='80%' style={{maxWidth:"80%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className="skill-name">JavaScript</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='70%'  style={{maxWidth:"70%"}}></div>
                    </div>
                </div>

                <div className='skill'>
                    <div className="skill-name">React.js</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='80%'  style={{maxWidth:"80%"}}></div>
                    </div>
                </div>
                </div>

                <div>
                <p className='contact-head text-3xl text-center mt-5'>Back End</p>
                <div className='skill'>
                    <div className="skill-name">JavaScript</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='70%'  style={{maxWidth:"70%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className="skill-name">Node.js</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='40%'  style={{maxWidth:"40%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className="skill-name">Express.js</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='40%'  style={{maxWidth:"40%"}}></div>
                    </div>
                </div>
                <div className='skill'>
                    <div className="skill-name">MongoDB</div>
                    <div className="skill-bar">
                        <div className="skill-per" per='50%'  style={{maxWidth:"50%"}}></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;
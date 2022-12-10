import React from 'react';
import './Header.css'
import code from '../../../images/code.jpg'

const Header = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto w-9/12 header'>
            <div className='m-16'>
                <p className='font-semibold text-xl mb-2'>HELLO, MY NAME IS</p>
                <h1 className='text-3xl lg:text-5xl font-bold mb-2 name'>Mohammad Rafi</h1>
                <h2 className='text-blue-600 text-xl md:text-3xl font-semibold mb-6'>Front End Developer</h2>
                <p className='text-gray-500 text-lg'>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, and goal-oriented, and always work with an end goal in mind.</p>
                <div className='mt-6'>
                    <a href='https://drive.google.com/file/d/1eVk8IOnESYUKma_p-5l1uC5qTv0OTDWi/view?usp=share_link' target='blank' className="btn btn-secondary rounded-md">Resume</a>
                    <button className="btn btn-outline rounded-md mx-5">About Me</button>
                </div>
            </div>
            <div><img src={code} alt="" className='w-full' /></div>
        </div>
    );
};

export default Header;
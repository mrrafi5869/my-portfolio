import React from 'react';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-gray-200 w-full py-16'>
            <div className='text-center'>
            <p className='uppercase text-2xl text-indigo-500 copy'>Find with me</p>
            <div className='flex items-center justify-center my-5'>
                    <a href='https://www.facebook.com/profile.php?id=100036966601849' target='blank'><FaFacebook className='mr-5 text-4xl text-blue-500'></FaFacebook></a>
                    <a href='https://www.instagram.com/mohammad_____rafi/'target='blank'><FaInstagram className='mr-5 text-4xl insta rounded-md'></FaInstagram></a>
                    <a href='https://twitter.com/Md___Rafi' target='blank'><FaTwitter className='mr-5 text-4xl text-blue-500 bg-white p-1 rounded-sm'></FaTwitter></a>
            </div>
            <p className='text-indigo-500'>@Copyright 2021-2022 | Mohammad Rafi</p>
            </div>
        </div>
    );
};

export default Footer;
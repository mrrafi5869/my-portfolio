import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u7oh7lc', 'template_b5w5wh4', form.current, 'WoZaV_ZGijOfT8x-7')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
        <div id='contact' className='grid sm:grid-cols-1 lg:grid-cols-2 bg-white w-[1430px] mx-auto p-10 sm:text-center md:text-left my-32'>
            <div className='lg:mt-16'>
                <div className='mb-16'>
                    <h1 className='text-3xl font-bold text-black uppercase contact-head'>Contact With Me</h1>
                    <p className='my-5 text-gray-500'>Are You Looking For Your Business Online <br />Presence? I am here.</p>
                </div>
                    <div className='flex text-xl font-semibold mb-8'><FontAwesomeIcon icon={faPhone} className='mr-3 text-blue-400'></FontAwesomeIcon><p className='text-black'>01743-560878</p></div>
                    <div className='flex text-xl font-semibold mb-8'><FontAwesomeIcon icon={faEnvelope} className='mr-3 text-blue-400'></FontAwesomeIcon><p className='text-black'>mrrafi5869@gmail.com</p></div>
                    <div className='flex text-xl font-semibold mb-8'><FontAwesomeIcon icon={faLocationDot} className='mr-3 text-blue-400'></FontAwesomeIcon><p className='text-black'>Chittagong, Bangladesh</p></div>
                
            </div>
            <form ref={form} onSubmit={sendEmail} className='form p-10 rounded w-[480px] mt-16 lg:mt-0'>
                <p className='text-black font-semibold'>Your Name</p>
                <input type="name" name='to_name' placeholder="Your Name" className="input input-bordered w-96 rounded-md" />

                <p className='text-black font-semibold'>Your Email</p>
                <input type="email" name='to_email' placeholder="your Email" className="input input-bordered w-96 rounded-md" />

                <p className='text-black font-semibold'>Subject</p>
                <input type="text" name='subject' placeholder="Subject" className="input input-bordered w-96 rounded-md" />

                <p className='text-black font-semibold'>Your Message</p>
                <textarea className="textarea textarea-bordered rounded-md w-96 resize-none" rows='3' name='message' placeholder="Your message"></textarea>
                <button type='submit' className="btn btn-primary rounded-md w-96 mt-4">Send</button>
            </form>
        </div>
    );
};

export default Contact;
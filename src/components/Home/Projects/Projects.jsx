import React from 'react';
import './Projects.css'
import photographer from '../../../images/photographer.jpg'
import garage from '../../../images/garage.jpg'
import learn from '../../../images/learn.jpg'
import { Link } from 'react-router-dom';


const Projects = () => {
    const projects = [
        {
            image: photographer,
            name: "Dream Weaver",
            type: "Photographer's Review",
            technologies: ["HTML", "CSS", "React", "Firebase", "Node.js", "Express.js", "MongoDB"],
            desc: "If you want to send a review you have to login. After sending the review, You can see the review on my reviews page. And if you click the details button you can see all details. You can also add a new service. After adding a new service you",
            client: "https://github.com/mrrafi5869/service-review-client-repo",
            live: "https://service-review-9c7fb.firebaseapp.com/",
            server: "https://github.com/mrrafi5869/service-review-server-repo",
        },
        {
            image: learn,
            name: "11minutes School",
            type: "Learning Platform",
            technologies: ["HTML", "CSS", "React", "Firebase"],
            desc: 'This Website is for selling courses. If you want to buy any course first of all you have to login. You can login by Google, GitHub, and Email. There have six types of courses. And those are premium courses. You can download it by PDF.',
            client: "https://github.com/mrrafi5869/learning-platform-website-client-repo",
            live: "https://learning-platform-websit-a1b26.firebaseapp.com/course",
            server: "https://github.com/mrrafi5869/learning-platform-website-server-repo",
        },
        {
            image: garage,
            name: "Luxury Vehicles",
            type: "Used Cars resale",
            technologies: ["HTML", "CSS", "React", "Firebase", "Node.js", "Express.js", "MongoDB"],
            desc: 'This Website is for 3 types of users. They are normal users, Buyers, and ellers.The normal user will visit the website. Buyers can buy products and sellers will sell products. Lastly, they have an admin account that can manage the users.',
            client: "https://github.com/mrrafi5869/used-products-resale-client-repo",
            live: "https://used-products-resale-fa9a4.firebaseapp.com/",
            server: "https://github.com/mrrafi5869/used-products-resale-server-repo",
        }
    ]
    return (
        <div className='my-24 w-9/12 mx-auto'>
            <p className='text-3xl text-center mb-10 project'>Latest Projects</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                projects.map(project => <div className='w-96 rounded-md bg-gray-300 m-5'>
                <img src={project.image} className='w-96' alt="" />
                <div className="divider font-semibold text-blue-600">{project.name}</div>
                <div className='m-5'>
                <h3 className='text-center text-lg mb-3 font-semibold'>{project.type}</h3>
                <div>
                    {
                        project.technologies.map(technology => <button className='btn rounded-md btn-xs mr-2 my-1'>{technology}</button>)
                    }
                </div>
                <p>{project.desc}</p>
                <div className='mt-3'>
                    <a href={project.client} target="blank" className='btn btn-primary rounded-md btn-sm mr-2'>Clients Code</a>
                    <a href={project.live} target="blank" className='btn btn-primary rounded-md btn-sm mr-2'>Live Site</a>
                    <a href={project.server} target="blank" className='btn btn-primary rounded-md btn-sm mr-2'>Server Code</a>
                </div>
                </div>
            </div>)
            }
            </div>
        </div>
    );
};

export default Projects;
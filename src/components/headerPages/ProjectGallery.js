import React from 'react';
import PROJECTS from '../../data/projects';
import { Link } from 'react-router-dom';
import {AiFillCalendar, AiOutlineTag} from "react-icons/ai";
import IconsWithText from '../projectArticles/IconsWithText';



// This is an example of a component built using stateless functional components, contrasting to the Resume component
const Project = props => {

    const { id, title, date, tags, image, description, technologies, hasApp, appPath } = props.project;
    return (
        <div className='flex flex-wrap flex-col items-center gap-9 rounded-2xl overflow-hidden shadow-md transition-all duration-100 transform-gpu hover:-translate-y-2 hover:shadow-lg'>
            <img className='h-[22rem] mt-4 object-cover' src={image} alt='project'></img>
            <div className='mt-8 text-left px-10'>
                <h2>{title}</h2>

                <IconsWithText leftIcon={<AiFillCalendar/>} leftText={date} rightIcon={<AiOutlineTag/>} rightText={tags} className="mt-4"/>

                <p className="mt-8">{description}</p>

                <div className='mt-4 flex flex-wrap'>
                    <p className='font-semibold mr-2'>Technologies Used: </p>
                    {technologies.map((technology, index) => (
                        <span key={index} className=" bg-gray-200 not-italic rounded-full px-3 py-1 text-[12px] font-normal text-gray-800 mr-2 mb-2">
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex flex-wrap justify-evenly items-center w-full py-4 px-32 my-8 mt-auto'>
                <Link to={`/projects/project${id}`} className="hover:no-underline bg-blue-500 hover:bg-blue-600 text-white hover:!text-white font-semibold py-2 px-4 rounded-lg">
                    See More
                </Link>
                {hasApp &&
                <Link to={appPath} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg border border-gray-200">
                        Use App
                    </button>
                </Link>
                }
            </div>
        </div>
    )
}

// if a component has only a return and nothing outside of it, then we can use an 'inline' return as shown below
const Project4 = () =>  (
    <div className='container mt-20 mb-20'>
        <h1 className=''>Highlighted Projects</h1>
        <h3 className='mt-10'>Some <span className='text-green-600'>data science</span> and <span className='text-green-600'>software development</span> projects I've been working on.</h3>
        <div className='mt-40 sm:mx-[7rem] items-start place-items-center grid grid-cols-auto md:grid-cols-1fr sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            {PROJECTS.map((project, id) => (
                <Project 
                    key={id} 
                    project={project} 
                />
            ))}
        </div>
    </div>
)


export default Project4;


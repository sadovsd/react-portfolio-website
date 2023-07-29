import React from 'react';
import PROJECTS from '../../data/projects';
import { Link } from 'react-router-dom';



// This is an example of a component built using stateless functional components, contrasting to the Resume component
const Project = props => {

    const { id, title, date, tags, image, description, technologies, hasApp, appPath } = props.project;
    return (
        <div className=' relative flex flex-col items-center rounded-2xl w-[37rem] overflow-hidden shadow-md transition-all duration-100 transform-gpu hover:-translate-y-2 hover:shadow-lg'>
            <img className='h-[22rem] mt-4' src={image} alt='project'></img>
            <div className='w-[33rem] mt-8 mb-28 text-left'>
                <h2>{title}</h2>


                <div className="mt-4 flex">
                    <div className="flex items-center mr-10">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="feather feather-clock w-5 h-5">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span className="ml-2 leading-none">{date}</span>
                    </div>
                    <div 
                        class="flex items-center">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            class="feather feather-tag w-5 h-5">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                            <line x1="7" y1="7" x2="7.01" y2="7"></line>
                        </svg>
                        <span className="ml-2 leading-none">{tags}</span>
                    </div>
                </div>


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

            <Link to={`/projects/project${id}`} className={`absolute bottom-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg ${hasApp ? 'left-[95px]' : ''}`}>
                See More
            </Link>
            {hasApp ?
            <Link to={appPath}>
                <button className="absolute bottom-8 right-[95px] bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg border border-gray-200">
                    Use App
                </button>
            </Link> : ''}
        </div>
    )
}

// if a component has only a return and nothing outside of it, then we can use an 'inline' return as shown below
const Project4 = () =>  (
    <div className='container mt-20 mb-20'>
        <h1 className=''>Highlighted Projects</h1>
        <div className='flex mt-10 justify-center'>
            <h3 className='mr-2'>Some</h3>
            <h3 className='text-blue-500 mr-2'>data science</h3>
            <h3 className='mr-2'>and</h3>
            <h3 className='text-blue-500 mr-2'>software development</h3>
            <h3>projects I've been working on.</h3>

        </div>
        <div className='mt-40 mx-10 grid grid-rows-2 items-start place-items-center grid-cols-3 gap-12'>
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
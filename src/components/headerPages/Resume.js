import React, { Component } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
import { ExitIcon } from '../../icons';
import COMPLETED_COURSES from '../../data/coursesCompleted';
import IN_PROGRESS_COURSES from '../../data/coursesInProgress';
import CSU_COURSES from '../../data/coursesCsu';
import sasCert from '../../assets/sas_cert.png';

class Resume extends Component {
    state = { 
        // CSU course stuff
        showDescription1: false, 
        activeIndex1: -1, 
        showCourses1: false,
        descriptionTop1: 0,
        // Miami completed course stuff
        showDescription2: false, 
        activeIndex2: -1, 
        showCourses2: false,
        descriptionTop2: 0,
        // Miami courses in progress stuff
        showDescription3: false, 
        activeIndex3: -1, 
        showCourses3: false,
        descriptionTop3: 0
    };

    switchCourseExpand1 = () => {
        this.setState( { showCourses1: !this.state.showCourses1 });
    };

    handleMouseEnter1 = (index, event) => {
        // calculate where to veritically position a particular CSU course description box
        const outermostDiv = event.currentTarget.closest('.relative');
        const outermostRect = outermostDiv.getBoundingClientRect();
        const spanRect = event.currentTarget.getBoundingClientRect();
        const top = spanRect.top - outermostRect.top;
   
        // Add click event listener to window object
        window.addEventListener('click', this.handleOutsideClick1);
        this.setState({ showDescription1: true, activeIndex1: index, descriptionTop1: top });
        
        // event.currentTarget.classList.add('bg-blue-100');
    };

    handleOutsideClick1 = (event) => {
        // This is how I handle currently unexplicable behavior...
        if (event.target.id === 'collapse1' || event.target.tagName === 'path') {
            if (event.target.tagName === 'path') {
                console.log('Weird thing happened where collapse1 element changes id and/or courseName becomes undefined....')
            }
            this.setState({ showDescription1: false, activeIndex1: -1 });
            window.removeEventListener('click', this.handleOutsideClick1);
            console.log('listener1 removed via collapse click');
            return;
        }

        const descriptionBox = document.getElementById('description1');    
        const courseName = document.getElementById('name_1_' + this.state.activeIndex1);

        // Check if clicked element is outside the description box and course name
        if (
          descriptionBox &&
          !descriptionBox.contains(event.target) &&
          !courseName.contains(event.target)
        ) {
          this.setState({ showDescription1: false, activeIndex1: -1 });
          // Remove click event listener from window object
          window.removeEventListener('click', this.handleOutsideClick1);
          console.log('listener1 removed via outside click');
        }

    };

    switchCourseExpand2 = () => {
        this.setState( { showCourses2: !this.state.showCourses2 });
    };

    handleMouseEnter2 = (index, event) => {
        const outermostDiv = event.currentTarget.closest('.relative');
        const outermostRect = outermostDiv.getBoundingClientRect();
        const spanRect = event.currentTarget.getBoundingClientRect();
        const top = spanRect.top - outermostRect.top;

        // event.target.style.color = 'blue';
        // event.target.style.textDecoration = 'underline';

        window.addEventListener('click', this.handleOutsideClick2);
        this.setState({ showDescription2: true, activeIndex2: index, descriptionTop2: top });
    };

    handleOutsideClick2 = (event) => {
        if (event.target.id === 'collapse2' || event.target.tagName === 'path') {
            if (event.target.tagName === 'path') {
                console.log('Weird thing happened where collapse2 element changes id and/or courseName becomes undefined....')
            }
            this.setState({ showDescription2: false });
            window.removeEventListener('click', this.handleOutsideClick2);
            console.log('listener2 removed via collapse click');
            return;
        }

        const descriptionBox = document.getElementById('description2');
        const courseName = document.getElementById('name_2_' + this.state.activeIndex2);

        if (
          descriptionBox &&
          !descriptionBox.contains(event.target) &&
          !courseName.contains(event.target)
        ) {
          this.setState({ showDescription2: false, activeIndex2: -1 });
          window.removeEventListener('click', this.handleOutsideClick2);
          console.log('listener2 removed via outside click');
        }
    };

    switchCourseExpand3 = () => {
        this.setState( { showCourses3: !this.state.showCourses3 });
    }

    handleMouseEnter3 = (index, event) => {
        const outermostDiv = event.currentTarget.closest('.relative');
        const outermostRect = outermostDiv.getBoundingClientRect();
        const spanRect = event.currentTarget.getBoundingClientRect();
        const top = spanRect.top - outermostRect.top;

        window.addEventListener('click', this.handleOutsideClick3);
        this.setState({ showDescription3: true, activeIndex3: index, descriptionTop3: top });
    };


    handleOutsideClick3 = (event) => {
        if (event.target.id === 'collapse3' || event.target.tagName === 'path') {
            if (event.target.tagName === 'path') {
                console.log('Weird thing happened where collapse2 element changes id and/or courseName becomes undefined....')
            }
            this.setState({ showDescription3: false });
            window.removeEventListener('click', this.handleOutsideClick3);
            console.log('listener3 removed via collapse click');
            return;
        }
        
        const descriptionBox = document.getElementById('description3');
        const courseName = document.getElementById('name_3_' + this.state.activeIndex3);
    
        if (
          descriptionBox &&
          !descriptionBox.contains(event.target) &&
          !courseName.contains(event.target)
        ) {
          this.setState({ showDescription3: false, activeIndex3: -1 });
          window.removeEventListener('click', this.handleOutsideClick3);
          console.log('listener3 removed via outside click');
        }
    };

    componentWillUnmount() {
        window.removeEventListener('click', this.handleOutsideClick1);
        window.removeEventListener('click', this.handleOutsideClick2);
        window.removeEventListener('click', this.handleOutsideClick3);

        console.log('listener removed via componentWillUnmount')
    };


    render() {

        const { showDescription1,
                activeIndex1,
                showCourses1,
                descriptionTop1,
                showDescription2,
                activeIndex2,
                showCourses2,
                descriptionTop2,
                showDescription3,
                activeIndex3,
                showCourses3,
                descriptionTop3,
                } = this.state;
        
        // When courses are expanded, we need to shift elements below downwards
        const downShiftMiamiSection = showCourses1 ? { marginTop: '150px' } : {};
        const downShiftMiamiInProgress = showCourses2 ? { marginTop: '313px' } : {};
        const downShiftCertifications = showCourses3 ? { marginTop: '200px' } : {};

        return (
            <div className='container ml-[200px] mt-20 mb-20'>
                <h1 className='ml-[250px] text-left'>Education</h1>
                <hr className='ml-[250px] mt-4 w-[700px]'></hr>

                {/* CSU header */}
                <div className='flex justify-between ml-[250px] w-[700px] mt-4'>
                    <h2 className=''>Cleveland State University</h2>
                    <h2 className=''>August 2017 - May 2019</h2>

                </div>

                {/* CSU bullet points */}
                <div className='ml-[320px] w-[630px] text-left'>
                    
                    <p className='list-item mt-3 text-left'>College Credit Plus (CCP)</p>

                    {/* completed courses bullet point */}
                    <div className='relative flex flex-row mt-3'>
                        <p className=''>Courses Completed:</p>
                        {showCourses1 ? (
                            <div>
                                <svg 
                                    onClick={this.switchCourseExpand1}
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ml-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors css-i4bv87-MuiSvgIcon-root"
                                    style={{ width: '20px', height: '20px' }}
                                    viewBox="0 0 24 24"
                                    id="collapse1">
                                        <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                                </svg>
                                <ul className='absolute list-square left-[45px] top-[33px]'>
                                    {CSU_COURSES.map((course, index) => (        
                                        <li
                                        key={index}
                                        className='my-0'
                                        >
                                            <span
                                                id={`name_1_${index}`}
                                                onClick={(event) => this.handleMouseEnter1(index, event)}
                                                // className={`cursor-pointer hover:bg-white1 hover:text-black1 hover:font-normal rounded-lg px-2 py-1 transition duration-200 ${index === activeIndex1 ? 'bg-sky2 text-sky1 font-normal hover:bg-sky2 hover:text-sky1 hover:font-normal' : ''}`}
                                                className={`cursor-pointer hover:bg-white1 hover:text-black1 hover:font-normal rounded-lg px-2 py-1 transition duration-200 ${index === activeIndex1 ? 'bg-neutral-100 text-sky1 font-normal hover:bg-neutral-100 hover:text-sky1 hover:font-normal' : ''}`}
                                                // className={`cursor-pointer hover:bg-white1 hover:text-black1 hover:font-normal rounded-lg px-2 py-1 transition duration-200 ${index === activeIndex1 ? 'bg-neutral-600 text-neutral-100 font-normal hover:bg-neutral-600 hover:text-neutral-100 hover:font-normal' : ''}`}                                                
                                                >
                                                {course.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>                                    
                            </div>
                        ) : (
                            <svg 
                                onClick={this.switchCourseExpand1}
                                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium fontSize-large ml-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors css-i4bv87-MuiSvgIcon-root"
                                style={{ width: '20px', height: '20px' }}
                                viewBox="0 0 24 24">
                                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                            </svg>
                        )}
                        {/* courses description box popup */}
                        {showDescription1 && activeIndex1 !== -1 && <div
                        id='description1'
                        className='w-[370px] p-4 shadow-md bg-white'
                        style={{ position: 'absolute', top: `${descriptionTop1}px`, left: '-350px' }}>
                            {CSU_COURSES[activeIndex1].description}
                            {/* exit button */}
                            <button
                                className='absolute top-[6px] right-[6px] w-6 h-6 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full'
                                onClick={() => {
                                    this.setState({ showDescription1: false, activeIndex1: -1 });
                                    window.removeEventListener('click', this.handleOutsideClick1);
                                    console.log('listener1 removed via exit button');
                                }}
                            >
                                <ExitIcon />
                            </button>
                        </div>} 
                    </div>
                </div>

                <div style={downShiftMiamiSection}>

                    <hr className='ml-[250px] mt-4 w-[700px]'></hr>

                    {/* Miami University Header*/}
                    <div className='flex justify-between ml-[250px] w-[700px] mt-4'>
                        <h2>Miami University</h2>
                        <h2>August 2020 - May 2024</h2>
                    </div>
                    
                    {/* Miami bullet points */}
                    <div className='ml-[320px] w-[630px] text-left'>
                        <p className='list-item mt-3 text-left'>B.S in Data Science and Statistics. B.S in Biology.</p>
                        <p className='list-item mt-3 text-left'>Co-Major in Neuroscience. Minor in Bionformatics. Minor in Computer Science. </p>
                        <p className='list-item mt-3 text-left'>Honors College</p>
                                            
                        {/* completed courses bullet point */}
                        <div className='relative flex flex-row mt-3'>
                            <p className='list-item my-0'>Relevant Courses Completed:</p>
                            {showCourses2 ? (
                                <div>
                                    <svg 
                                        onClick={this.switchCourseExpand2}
                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ml-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors css-i4bv87-MuiSvgIcon-root"
                                        style={{ width: '20px', height: '20px' }}
                                        viewBox="0 0 24 24"
                                        id="collapse2">
                                            <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                                    </svg>
                                    <ul className='absolute list-square left-[45px] top-[33px]'>
                                        {COMPLETED_COURSES.map((course, index) => (        
                                            <li
                                            key={index}
                                            className='text-left'
                                            >
                                                {/* We only want the description to display when hovering over the course name, not the bullet point, which is part of li element. thats why we add a span here */}
                                                <span
                                                    onClick={(event) => this.handleMouseEnter2(index, event)}
                                                    id={`name_2_${index}`}
                                                    //className={`cursor-pointer hover:bg-white1 hover:text-black1 hover:font-normal rounded-lg px-2 py-1 transition duration-200 ${index === activeIndex2 ? 'bg-white1 text-black1 font-bold hover:bg-white1 hover:text-black1 hover:font-medium' : ''}`}
                                                    //className='cursor-pointer hover:bg-white1 hover:text-black1 hover:font-normal rounded-lg px-2 py-1 transition duration-200'
                                                    className={`cursor-pointer hover:bg-white1 hover:text-black1 hover:font-normal rounded-lg px-2 py-1 transition duration-200 ${index === activeIndex2 ? 'bg-sky2 text-sky1 font-normal hover:bg-sky2 hover:text-sky1 hover:font-normal' : ''}`}
                                                >
                                                    {course.name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <svg 
                                    onClick={this.switchCourseExpand2}
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium fontSize-large ml-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors css-i4bv87-MuiSvgIcon-root"
                                    style={{ width: '20px', height: '20px' }}
                                    viewBox="0 0 24 24">
                                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                </svg>                                   
                            )}

                            {/* completed course description box popup */}
                            {showDescription2 && activeIndex2 !== -1 && <div
                            className='w-[370px] p-4 shadow-md bg-white z-10'
                            style={{ position: 'absolute', top: `${descriptionTop2}px`, left: '-350px'} }
                            id='description2'>
                                {COMPLETED_COURSES[activeIndex2].description}
                                {/* exit button */}
                                <button
                                    className='absolute w-6 h-6 top-[6px] right-[6px] flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full'
                                    onClick={() => {
                                        this.setState({ showDescription2: false, activeIndex2: -1 });
                                        window.removeEventListener('click', this.handleOutsideClick2);
                                        console.log('listener2 removed via exit button');
                                    }}
                                >
                                <ExitIcon />
                                </button>
                            </div>}                                  
                        </div>
                        
                        <p
                            className='list-item mt-3 text-left'
                            style={downShiftMiamiInProgress}>
                                33 total credits hours for Fall 2023 Semester, including 1 credit hour of independent bioinformatics research.
                        </p>

                        {/* courses in progress bullet point */}
                        <div className='relative flex flex-row mt-3'>
                            <p className='list-item'>Relevant Courses in Progress (Fall 2023):</p>
                            {showCourses3 ? (
                                <div>
                                    <svg 
                                        onClick={this.switchCourseExpand3}
                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ml-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors css-i4bv87-MuiSvgIcon-root"
                                        style={{ width: '20px', height: '20px' }}
                                        viewBox="0 0 24 24"
                                        id="collapse3">
                                            <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                                    </svg>
                                    <div className='mb-12'>                                 
                                        <ul className='absolute left-[45px] top-[33px] list-square'>
                                            {IN_PROGRESS_COURSES.map((course, index) => (        
                                                <li
                                                key={index}
                                                >
                                                    <span
                                                        onClick={(event) => this.handleMouseEnter3(index, event)}
                                                        id={`name_3_${index}`}
                                                        className={`cursor-pointer hover:bg-white1 hover:text-black1 hover:font-normal rounded-lg px-2 py-1 transition duration-200 ${index === activeIndex3 ? 'bg-sky2 text-sky1 font-normal hover:bg-sky2 hover:text-sky1 hover:font-normal' : ''}`}
                                                    >
                                                        {course.name}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul> 
                                    </div>                                     
                                </div>
                            ) : (
                                <svg 
                                    onClick={this.switchCourseExpand3}
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium fontSize-large ml-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors css-i4bv87-MuiSvgIcon-root"
                                    style={{ width: '20px', height: '20px' }}
                                    viewBox="0 0 24 24">
                                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                </svg>   
                            )}

                            {/* course in progress description box popup */}
                            {showDescription3 && activeIndex3 !== -1 && <div 
                                className='absolute shadow-md w-[370px] p-4 bg-white'
                                style={{ position: 'absolute', top: `${descriptionTop3}px`, left: '-350px' }}
                                id='description3'>
                                {IN_PROGRESS_COURSES[activeIndex3].description}
                                {/* exit button */}
                                <button
                                    className='absolute top-[6px] right-[6px] w-6 h-6 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full'
                                    onClick={() => {
                                        this.setState({ showDescription3: false, activeIndex3: -1 });
                                        window.removeEventListener('click', this.handleOutsideClick3);
                                        console.log('listener3 removed via exit button');
                                    }}
                                >
                                <ExitIcon />
                                </button>
                            </div>} 
                        </div> 
                    </div>          
                </div>
                
                <div style={downShiftCertifications}>
                    <h1 className='ml-[250px] mt-16 text-left'>Certifications</h1>
                    <hr className='ml-[250px] mt-4 w-[700px]'></hr>
                    <div className='flex flex-row ml-[250px] mt-6 shadow w-[400px]'>
                        <div>
                            <h3 className='mt-4'>SAS Certified Specialist: Base Programming Using SAS 9.4.</h3>
                            <div className='flex flex-row mt-4 justify-center'>
                                <p className='text-green-700 font-medium'>Issued</p>
                                <p className='ml-2'>July 2023</p>
                                <p className='text-red-700 font-medium ml-4'>Expires</p>
                                <p className='ml-2'>July 2027</p>
                            </div>
                            <div className='flex flex-row justify-center'>
                                <p className='font-medium mr-2'>Certificate ID:</p>
                                <p>ALDKJHFLSF48373</p>
                            </div>
                            <div className='flex flex-row justify-between text-[1.25rem] ml-28 mr-28 mt-4 mb-5'>
                                {/* <a href='https://www.sas.com/en_us/certification/credentials/foundation-tools/base-programming-specialist.html'
                                    target="_blank"
                                    rel="noreferrer"
                                    className=" px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 hover:text-white">
                                    More Info
                                </a> */}
                                <span onClick={() => window.open("https://www.sas.com/en_us/certification/credentials/foundation-tools/base-programming-specialist.html", "_blank")}
                                    className=" px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 hover:text-white">
                                    More Info
                                </span>
                                <span className=" px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-400 hover:text-gray-800">
                                View Badge
                                </span>
                            </div>
                        </div>
                        <div className='basis-1/4 mr-6 mt-[35px]'>
                            <img src={sasCert} alt='SAS certification' className=''></img>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <h1 className='ml-[250px] mt-16 text-left'>Industry Experience</h1>
                    <hr className='ml-[250px] mt-6 w-[700px]'></hr>
                    <p className='mt-4 ml-[250px] text-[17px] text-left'>Coming soon...</p>
                </div>

            </div>
        );
    }
}

export default Resume;

import React, { useEffect, useRef, useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
import { ExitIcon } from "../../icons";
import COMPLETED_COURSES from "../../data/coursesCompleted";
import IN_PROGRESS_COURSES from "../../data/coursesInProgress";
import CSU_COURSES from "../../data/coursesCsu";
import sasCert from "../../assets/sas_cert.png";

const Collapsable = ({ titles, subtitle, dataArray }) => {
  const [showCourse, setShowCourse] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [descriptionTop, setDescriptionTop] = useState(0);
  const svgRef = useRef();

  const handleOnCourseClick = (index, evt) => {
    const outermostDiv = evt.currentTarget.closest(".relative");
    const outermostRect = outermostDiv.getBoundingClientRect();
    const spanRect = evt.currentTarget.getBoundingClientRect();
    const top = spanRect.top - outermostRect.top;

    setDescriptionTop(top);
    setActiveIndex(index);
    setShowDescription(true);
    console.log(descriptionTop);
  };

  const handleClickOutside = (evt) => {
    if (
      svgRef.current &&
      !svgRef.current.contains(evt.target) &&
      evt.target.id.indexOf("name_") !== 0
    ) {
      setShowDescription(false);
      setActiveIndex(-1);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* CSU bullet points */}
      <div className="text-left relative">
        {titles}

        {/* completed courses bullet point */}
        <div className="relative flex flex-col mt-3">
          {showCourse ? (
            <div>
              <div className="flex flex-row gap-1">
                <p>{subtitle}</p>
                <svg
                  onClick={() => {
                    setShowDescription(false);
                    setActiveIndex(-1);
                    setShowCourse(!showCourse);
                  }}
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium rounded-full bg-gray-200 hover:bg-gray-300 transition-colors css-i4bv87-MuiSvgIcon-root"
                  style={{ width: "20px", height: "20px" }}
                  viewBox="0 0 24 24"
                  id="collapse1"
                >
                  <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                </svg>
              </div>
              <ul className="list-square [padding-left:_clamp(5px,6vw,45px)] pt-[10px]">
                {dataArray.map((course, index) => (
                  <li key={index} className="my-0 position relative">
                    <span
                      onClick={(evt) => handleOnCourseClick(index, evt)}
                      id={`name_1_${index}`}
                      className={`cursor-pointer hover:bg-white1 hover:text-black1 hover:font-normal rounded-lg px-2 py-1 transition duration-200 [font-size:_clamp(11px,2.5vw,15px)] ${
                        index === activeIndex
                          ? "bg-neutral-100 text-sky1 font-normal hover:bg-neutral-100 hover:text-sky1 hover:font-normal"
                          : ""
                      }`}
                    >
                      {course.name}
                    </span>
                    {/* courses description box popup */}
                    {showDescription &&
                      activeIndex !== -1 &&
                      activeIndex === index && (
                        <div
                          ref={svgRef}
                          id="description1"
                          className="p-4 shadow-md bg-white sm:w-[370px] absolute top-[26px] lg:top-0 left-[-38px] sm:left-[-68px] lg:left-[-400px] z-10"
                        >
                          {dataArray[activeIndex].description}
                          {/* exit button */}
                          <button
                            onClick={() => {
                              setActiveIndex(-1);
                              setShowDescription(false);
                            }}
                            className="absolute top-[6px] right-[6px] w-6 h-6 flex items-center justify-center bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-full"
                          >
                            <ExitIcon />
                          </button>
                        </div>
                      )}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="flex flex-row gap-1">
              <p>{subtitle}</p>
              <svg
                onClick={() => setShowCourse(!showCourse)}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium fontSize-large rounded-full bg-gray-200 hover:bg-gray-300 transition-colors css-i4bv87-MuiSvgIcon-root"
                style={{ width: "20px", height: "20px" }}
                viewBox="0 0 24 24"
              >
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const NewResume = () => {
  return (
    <div className="container max-w-6xl mt-[7rem] mb-20 sm:px-10 xs:px-10 2xl:px-2">
      <div className="mb-[20px] text-right">
      {/* eslint-disable-next-line */}
        <a href={"./files/sample-resume.pdf"} download="resumeFile" target="_blank">
          <button className="w-[16rem] py-2 px-4 font-semibold text-blue-500 border-[1.5px] border-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none">
            Download Resume
          </button>
        </a>
      </div>
      <h1 className="ssm:text-center md:text-left text-6xl">Education</h1>
      <hr className="mt-4"></hr>

      {/* CSU header */}
      <div className="flex justify-between mt-4 flex-wrap gap-y-4 mb-9 ssm:flex-col md:flex-row">
        <h2 className="text-left [font-size:_clamp(18px,5vw,24px)]">
          Cleveland State University
        </h2>
        <h2 className="text-left [font-size:_clamp(10px,4vw,18px)] ssm:font-bold md:font-normal">
          August 2017  -  May 2019
        </h2>
      </div>

      <div className="[padding-left:_clamp(15px,8vw,75px)]">
        <Collapsable
          titles={
            <p className="list-item mt-3 text-left">
              College Credit Plus (CCP)
            </p>
          }
          subtitle="Courses Completed:"
          dataArray={CSU_COURSES}
        />
      </div>

      <hr className="mt-4"></hr>

      {/* Miami University Header*/}
      <div className="flex justify-between mt-4 flex-wrap gap-y-4 mb-9 ssm:flex-col md:flex-row">
        <h2 className="text-left [font-size:_clamp(18px,5vw,24px)]">
          Miami University
        </h2>
        <h2 className="text-left [font-size:_clamp(10px,4vw,18px)] ssm:font-bold md:font-normal">
          August 2020  -  May 2024
        </h2>
      </div>

      <div className="[padding-left:_clamp(15px,8vw,75px)]">
        <Collapsable
          titles={
            <>
              <p className="list-item mt-3 text-left">
                B.S in Data Science and Statistics. B.S in Biology.
              </p>
              <p className="list-item mt-3 text-left">
                Co-Major in Neuroscience. Minor in Bionformatics. Minor in
                Computer Science.{" "}
              </p>
              <p className="list-item mt-3 text-left">Honors College</p>
            </>
          }
          subtitle="Relevant Courses Completed:"
          dataArray={COMPLETED_COURSES}
        />

        {/* <p className="list-item mt-3 text-left">
          33 total credits hours for Fall 2023 Semester, including 1 credit hour
          of independent bioinformatics research.
        </p> */}

        <Collapsable
          subtitle="Relevant Courses in Progress (Fall 2023):"
          dataArray={IN_PROGRESS_COURSES}
        />
      </div>
      <div>
        <h1 className="mt-16 ssm:text-center md:text-left text-6xl">
          Certifications
        </h1>
        <hr className="mt-4"></hr>
        <div className="flex flex-row sm:flex-nowrap mt-6 shadow sm:w-full max-w-[450px] p-5 items-center ssm:mx-auto md:mx-0">
          <div className="sm:basis-3/4">
            <h3 className="mt-4">
              SAS Associate: Programming Fundamentals Using SAS 9.4
            </h3>
            <div className="flex flex-row mt-4 justify-center flex-wrap">
              <p className="text-green-700 font-medium px-2">Issued</p>
              <p>December 2023</p>
              <p className="text-red-700 font-medium px-2">Expires</p>
              <p>Never</p>
            </div>
            {/* <div className="flex flex-row justify-center flex-wrap">
              <p className="font-medium px-2">Certificate ID:</p>
              <p>ALDKJHFLSF48373</p>
            </div> */}
            <div className="flex flex-row justify-center gap-8 text-[1.25rem] mt-4 mb-5">
              {/* <a href='https://www.sas.com/en_us/certification/credentials/foundation-tools/base-programming-specialist.html'
                                  target="_blank"
                                  rel="noreferrer"
                                  className=" px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 hover:text-white">
                                  More Info
                              </a> */}
              <span
                onClick={() =>
                  window.open(
                    "https://www.sas.com/en_us/certification/credentials/foundation-tools/base-programming-specialist.html",
                    "_blank"
                  )
                }
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 hover:text-white"
              >
                More Info
              </span>
              
              <span 
                onClick={() =>
                  window.open(
                    "https://www.credly.com/badges/076892cc-410e-4c63-9f51-adecd86bb454",
                    "_blank"
                  )
                }
                className="cursor-pointer px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-400 hover:text-gray-800">
                View Badge
              </span>
            </div>
          </div>
          <div className="sm:basis-1/4 flex justify-center items-center w-full">
            <img
              src={sasCert}
              alt="SAS certification"
              className="ssm:max-w-[10.8rem] max-w-[7rem]"
            ></img>
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-16 ssm:text-center md:text-left text-6xl">
          Publications
        </h1>
        <hr className="mt-6"></hr>
        <p className="mt-4 text-[17px] text-left">Coming soon...</p>
      </div>
      <div>
        <h1 className="mt-16 ssm:text-center md:text-left text-6xl">
          Industry Experience
        </h1>
        <hr className="mt-6"></hr>
        <p className="mt-4 text-[17px] text-left">Coming soon...</p>
      </div>
    </div>
  );
};

export default NewResume;

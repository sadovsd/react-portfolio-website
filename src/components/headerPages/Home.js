import React, { Component } from 'react';
import stoman from '../../assets/stoman.png';
// import headshot from '../../assets/headshot.png';
// import IntroAnimate from '../animations/IntroAnimate';
// import TitlesAnimate from '../animations/TitlesAnimate';
// import TitlesSlowAnimate from '../animations/TitlesSlowAnimate';
import { motion } from 'framer-motion';
import HighlightedProjects from './HighlightedProjects';
// import { HIGHLIGHTED_PROJECTS } from './Projects';
import PROJECTS from '../../data/projects';
import { AiFillLayout } from 'react-icons/ai';
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  YoutubeIcon
} from '../../icons';

const TechUsed = ({ tech }) => (
  <div>
    <div className="flex">
      <div className="bg-blue-600 flex items-center justify-center min-w-[4rem] min-h-[4rem] w-16 h-16 rounded-full">
        <AiFillLayout className="text-white" />
      </div>
      <div className="ml-6">
        <h3 className="font-bold">{tech.name}</h3>
        <p>{tech.description}</p>
      </div>
    </div>
  </div>
);

class Home extends Component {
  // state = { introAnimationComplete: false, titleAnimationComplete: false, showTitles: false, showTitleSlow: false};

  // handleIntroAnimationComplete = () => {
  //     this.setState({ introAnimationComplete: true });
  //     setTimeout(() => {
  //         this.setState({ showTitles: true });
  //       }, 50);
  // };

  // handleTitleAnimationComplete = () => {
  //     this.setState({ titleAnimationComplete: true });
  //     setTimeout(() => {
  //         this.setState({ showTitleSlow: true });
  //       }, 500);
  // };

  render() {
    // const { introAnimationComplete, titleAnimationComplete, showTitles, showTitleSlow } = this.state;
    return (
      <div className="container">
        <div className="flex flex-col md:flex-row m-auto md:m-28 md:ml-8 items-center ssm:mt-8">
          <motion.div
            className="basis-5/12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            <h1 className="tracking-[.5rem] ssm:px-1 ssm:text-6xl md:text-7xl 2xl:text-8xl ssm:mb-8 md:mb-0 text-blue-500 ssm:text-center md:text-left">
              DAVYD SADOVSKYY
            </h1>
            <p className="ssm:text-center md:text-left mt-5 ssm:mb-5">
              A Data Science practitioner who thrives to levarage Startups using
              AI-based solutions along with Web Development and a blend of UI/UX
              Design.
            </p>
            <div className="flex flex-row justify-start items-center gap-5 relative mb-4">
              <button className="text-materialUI hover:text-neutral-500">
                <EmailIcon className="h-20 w-20" />
              </button>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/davyd-sadovskyy-84678a105"
              >
                <LinkedinIcon className="h-20 w-20 text-linkedIn hover:text-neutral-500" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sadovsd"
              >
                <GithubIcon className="h-20 w-20 text-neutral-950 hover:text-neutral-500" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://medium.com/">
                <MediumIcon className="h-20 w-20 text-neutral-950 hover:text-neutral-500" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/"
              >
                <YoutubeIcon className="h-20 w-20 text-red-600 hover:text-neutral-500" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="basis-7/12 flex justify-center"
            initial={{ opacity: 0, x: 140 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, x: -100 }}
          >
            <img src={stoman} alt="dude being productive" />
          </motion.div>
        </div>
        {/* <HighlightedProjects projects={PROJECTS} /> */}
        <div className="w-full mt-40 flex flex-col items-center bg-[#EFF6FF] min-h-[400px] py-20 max-w-7xl mx-auto">
          <h4 className="text-blue-600 font-semibold mb-6">TECHNOLOGIES</h4>
          <h1>What I used to build this site</h1>
          <div className="grid ssm:grid-cols-1 md:grid-cols-2 gap-5 w-4/5 justify-around mt-20 text-left">
            <TechUsed
              tech={{
                name: 'Astro',
                description: 'Build faster websites'
              }}
            />
            <TechUsed
              tech={{
                name: 'ReactJS',
                description: 'A JavaScript library for building user interfaces'
              }}
            />
            <TechUsed
              tech={{
                name: 'TypeScript',
                description:
                  'A strongly typed programming language that builds on JavaScript'
              }}
            />
            <TechUsed
              tech={{
                name: 'Astro',
                description: 'Build faster websites'
              }}
            />
            <TechUsed
              tech={{
                name: 'ReactJS',
                description: 'A JavaScript library for building user interfaces'
              }}
            />
            <TechUsed
              tech={{
                name: 'TypeScript',
                description:
                  'A strongly typed programming language that builds on JavaScript'
              }}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row mb-16 border-soli">
          {/* <img src={headshot} alt='headshot' className='h-[400px] p-16' /> */}
          <p className="text-[25px] p-12"></p>
        </div>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  YoutubeIcon
  // EmailIcon
} from './icons';

const Footer = ({ children }) => {
  // const [setCopied] = useState(false);

  // const handleCopyEmail = () => {
  //   navigator.clipboard.writeText('ua.sadovskyy [at] gmail [dot] com');
  //   setCopied(true);
  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 1600);
  // };

  return (
    // Make sure the footer appears at very bottom of screen
    <div className="flex flex-col min-h-screen">
      
      <div className="flex-grow">{children}</div>
      <div className="flex flex-wrap justify-center items-center gap-5 relative mt-[-2rem] mb-4 px-4">

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/davyd-sadovskyy-84678a105"
        >
          <LinkedinIcon 
            className="h-10 w-10 text-linkedIn hover:text-neutral-500"
            // className="h-10 w-10 text-neutral-950 hover:text-neutral-500"
          />
        </a>

        <a target="_blank" rel="noreferrer" href="https://github.com/sadovsd">
          <GithubIcon className="h-10 w-10 text-neutral-950 hover:text-neutral-500" />
        </a>
        
        <a target="_blank" rel="noreferrer" href="https://medium.com/@sadovsd">
          <MediumIcon className="h-12 w-12 text-neutral-950 hover:text-neutral-500" />
        </a>

        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@AgingHub">
          <YoutubeIcon className="h-10 w-10 text-red-600 hover:text-neutral-500" />
        </a>

      </div>
      <p className="text-white text-center bg-neutral-500 py-[6px]">
        Designed and Developed by Davyd Sadovskyy © 2023
      </p>
    </div>
  );
};

export default Footer;

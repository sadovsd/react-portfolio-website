// import React, { useState } from 'react';
// import {
//   GithubIcon,
//   LinkedinIcon,
//   MediumIcon,
//   YoutubeIcon,
//   EmailIcon
// } from './icons';

// const Footer = ({ children }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopyEmail = () => {
//     navigator.clipboard.writeText('sadovsd@miamioh.edu');
//     setCopied(true);
//     setTimeout(() => {
//       setCopied(false);
//     }, 1600);
//   };

//   return (
//     // Make sure the footer appears at very bottom of screen
//     <div className="flex flex-col min-h-screen">
//       <div className="flex-grow">{children}</div>
//       <div className="flex flex-row justify-center items-center gap-5 relative mt-[5rem] mb-4">
//         <button
//           className="text-materialUI hover:text-neutral-500"
//           onClick={handleCopyEmail}
//         >
//           <EmailIcon className="h-10 w-10" />
//         </button>

//         <a
//           target="_blank"
//           rel="noreferrer"
//           href="https://www.linkedin.com/in/davyd-sadovskyy-84678a105"
//         >
//           <LinkedinIcon className="h-10 w-10 text-linkedIn hover:text-neutral-500" />
//         </a>

//         <a target="_blank" rel="noreferrer" href="https://github.com/sadovsd">
//           <GithubIcon className="h-10 w-10 text-neutral-950 hover:text-neutral-500" />
//         </a>
//         <a target="_blank" rel="noreferrer" href="https://medium.com/">
//           <MediumIcon className="h-12 w-12 text-neutral-950 hover:text-neutral-500" />
//         </a>

//         {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
//           <YoutubeIcon className="h-10 w-10 text-red-600 hover:text-neutral-500" />
//         </a> */}
//         {copied && (
//           <p className="absolute left-48 text-md text-neutral-100 bg-neutral-600 px-2 py-1 rounded shadow">
//             Email copied!
//           </p>
//         )}
//       </div>
//       <p className="text-white text-center bg-neutral-500">
//         Designed and Developed by Davyd Sadovskyy © 2023
//       </p>
//     </div>
//   );
// };

// export default Footer;


import React, { useState } from 'react';
import {
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  YoutubeIcon,
  EmailIcon
} from './icons';

const Footer = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ua.sadovskyy@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1600);
  };

  return (
    // Make sure the footer appears at very bottom of screen
    <div className="flex flex-col min-h-screen">
      
      <div className="flex-grow">{children}</div>
      {/* <div className="flex flex-wrap justify-center items-center gap-5 relative mt-[5rem] mb-4 px-4"> */}
      <div className="flex flex-wrap justify-center items-center gap-5 relative mt-0 mb-2 px-4">

        {/* Email Icon with Popup */}
        <button
          className="text-materialUI hover:text-neutral-500 relative"
          onClick={handleCopyEmail}
        >
          <EmailIcon className="h-10 w-10" />
          {copied && (
            <p className="absolute right-full top-1/2 transform -translate-y-[65%] mr-3 text-md text-neutral-100 bg-neutral-500 px-2 py-1 rounded shadow">

              Email copied!
            </p>
          )}
        </button>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/davyd-sadovskyy-84678a105"
        >
          <LinkedinIcon className="h-10 w-10 text-linkedIn hover:text-neutral-500" />
        </a>

        <a target="_blank" rel="noreferrer" href="https://github.com/sadovsd">
          <GithubIcon className="h-10 w-10 text-neutral-950 hover:text-neutral-500" />
        </a>
        
        <a target="_blank" rel="noreferrer" href="https://medium.com/@sadovsd">
          <MediumIcon className="h-12 w-12 text-neutral-950 hover:text-neutral-500" />
        </a>

        {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
          <YoutubeIcon className="h-10 w-10 text-red-600 hover:text-neutral-500" />
        </a> */}

      </div>
      <p className="text-white text-center bg-neutral-500">
        Designed and Developed by Davyd Sadovskyy © 2023
      </p>
    </div>
  );
};

export default Footer;

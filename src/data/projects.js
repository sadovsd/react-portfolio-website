// this appears to be a js (javascript) file and not a jsx file

import project1 from '../assets/lens_regen.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import stoman from '../assets/stoman.png';

// the convention for global variables is uppercase
const PROJECTS = [
    {
        id: 1, // id is the traditional way to distinguish items in an array
        title: 'Lens Regeneration Analysis',
        date: 'May 2023',
        description: 'Does aging affect the ability of newts to regenerate their lenses? Using data produced by a Miami University biology lab, I fit a negative binomial regression model to see the relationships between age, recovery time, and the count of cells that have begun to regenerate.',
        tags: 'Regression/ Bootstrap',
        technologies: ['R'],
        image: project1,
        hasApp: false
    },
    {
        id: 2,
        title: 'Portfolio Website',
        date: 'June 2023',
        description: "This is the website you are currently visting! I built it because I wanted to have digital record of some of the labor-intensive creative and intellectual content I've produced. I believe that a visually appealing and thoughtfully designed website will always be more effective at getting ideas across than a pile of GitHub files.",
        tags: 'Frontend',
        technologies: ['React', 'Tailwind CSS', 'REST API'],
        image: stoman,
        hasApp: false
    },
    {
        id: 3,
        title: 'CPI Trend Viewer',
        date: 'July 2023',
        description: 'At the heart of this application is a SAS macro that parses information from multiple offical goverment data files and generates a graph of consumer price index (CPI) trends, according to specified parameters. I implemented a backend into this portfolio website to allow a user to connect to the macro and obtain a visualization.',
        tags: 'Data Manipulation/ Backend',
        technologies: ['SAS', 'SQL', 'Flask', 'Azure', 'Python', 'SAS Viya'],
        image: project2,
        hasApp: true
    },
    {
        id: 4,
        title: 'Algorithms to Optimize Health',
        date: 'August 2023',
        description: "Today, more than ever, we see a misalignment between individuals goals, and self destructive actions and tendencies. A way forward is tracking loads of biomarkers and then using machine learning to categorize behaviours as bad or good for wellbeing, leading to better goal alignment. Here, I do this with sleep data.",
        tags: 'Clustering/ Visualization',
        technologies: ['Python', 'Flask'],
        image: project3,
        hasApp: true
    }
    // {
    //     id: 4,
    //     title: 'Human Genome Annotation Comparison',
    //     description: 'Visually comparing genome annotion versions and [querying] gene information based on user input',
    //     includes: ['Machine Learning', 'Visualization', 'Backend', 'App'],
    //     technologies: ['Python', 'Flask'],
    //     image: project3
    // }
    // {
    //     title: 'MITE Identification in Rice',
    //     description: "A classification model that predicts which DNA sequences are Miniature Inverted-repeat Transposable Elements (MITE)",
    //     link: 'https://github.com/15Dkatz',
    //     image: project4
    // },
    // {
    //     title: 'Supplement Benefit Analysis',
    //     description: "A machine learning project that predicts which supplements are actually worth taking, given an individual's specific biomarker data",
    //     link: 'https://github.com/15Dkatz',
    //     image: project5
    // }
]; 

export default PROJECTS; // "this shares the projects array with the rest of the code base"


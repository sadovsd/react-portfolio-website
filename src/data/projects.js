// this appears to be a js (javascript) file and not a jsx file

import project1 from '../assets/lens_regen.png';
import project2 from '../assets/midjourney.png';
import project3 from '../assets/cpi_viewer.png';
import project4 from '../assets/LLMTracker.gif';
import project5 from '../assets/cpp3.png';


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
        hasApp: false,
        appPath: ''
    },
    {
        id: 2,
        title: 'Portfolio Website',
        date: 'June 2023',
        description: "This is the website you are currently visting! I built it because I wanted to have digital record of some of the labor-intensive creative and intellectual content I've produced. I believe that a visually appealing and thoughtfully designed website will always be more effective at getting ideas across than a pile of GitHub files.",
        tags: 'Frontend',
        technologies: ['React', 'Tailwind CSS', 'Midjourney', 'Azure Static Web Apps'],
        image: project2,
        hasApp: false,
        appPath: ''
    },
    {
        id: 3,
        title: 'CPI Trend Viewer',
        date: 'July 2023',
        description: 'At the heart of this application is a SAS macro that parses information from multiple offical goverment data files and generates a graph of consumer price index (CPI) trends, according to specified parameters. I implemented a backend into this portfolio website to allow a user to connect to the macro and obtain a visualization.',
        tags: 'Data Manipulation/ Backend',
        technologies: ['SAS', 'SQL', 'Python', 'SASPy', 'Flask', 'Docker', 'Azure Container Apps'],
        image: project3,
        hasApp: true,
        appPath: '/applications/flaskSASCpiViewer'
    },
    {
        id: 4,
        title: 'Research Paper Visualizer',
        date: 'November 2023',
        description: "The recent pace of research on AI and large language models has been staggering. In this project, I created a dashboard that visualizes the semantic location of almost 15k reseach papers about LLMs in the past year, along with other interactive visualizations to help a user further understand the research landscape.",
        tags: 'Clustering/ Dashboard',
        technologies: ['Semantic Scholar API', 'Python', 'BERTopic', 'R', 'RShiny'],
        image: project4,
        hasApp: true,
        appPath: 'https://davydsadovskyy.shinyapps.io/llm-papers-2023-dashboard/'
    },
    {
        id: 5,
        title: 'Calibrated Power Prior Optimization',
        date: 'January 2023',
        description: "Coming Soon...",
        tags: 'Bayesian / Simulation',
        technologies: ['R', 'RStan'],
        image: project5,
        hasApp: false,
        appPath: ''
    }
    // {
    //     id: 5,
    //     title: 'OHLC Ethereum Returns Forcasting',
    //     date: 'January 2023',
    //     description: "Using 10 years of raw Ethereum open, high, low, close (OHLC) data, I generated several hundred predictor variables to use in a model that predicts a certain percent return for the next day. I selected variables using a LASSO sliding window approach, and then fit a a handful of statistical learning models and selected the one with the best out of sample precision score.",
    //     tags: 'Feature Engineering / MLOps',
    //     technologies: ['LASSO', 'Random Forest', 'Boosting', 'Neural Network', 'SVM', 'Hopsworks Feature Store', 'GitHub Actions'],
    //     image: project5,
    //     hasApp: false,
    //     appPath: ''
    // }
]; 

export default PROJECTS; // "this shares the projects array with the rest of the code base"


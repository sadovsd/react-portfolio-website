
// ..... projects.js //
// this appears to be a js (javascript) file and not a jsx file

import lensRegen from '../assets/lens_regen.png';
import midjourney from '../assets/midjourney.png';
import cpiViewer from '../assets/cpi_viewer.png';
import llmTracker from '../assets/LLMTracker.gif';
// import project5 from '../assets/cpp3.png';
import corn from '../assets/corn3.png';
import gwas from '../assets/gwas2.png';
import genomeBrowser from '../assets/genomeBrowser4.png'; 



// the convention for global variables is uppercase
const PROJECTS = [
    {
        id: 1,
        title: 'Research Paper Visualizer',
        date: 'November 2023',
        description: "The recent pace of research on AI and large language models has been staggering. In this project, I created a dashboard that visualizes the semantic location of almost 15k reseach papers about LLMs in the past year, along with other interactive visualizations to help a user further understand the research landscape.",
        tags: 'Clustering, Dashboard',
        technologies: ['Semantic Scholar API', 'Python', 'BERTopic', 'R', 'RShiny'],
        image: llmTracker,
        hasApp: true,
        appPath: 'https://davydsadovskyy.shinyapps.io/llm-papers-2023-dashboard/'
    },
    {
        id: 2,
        title: 'Building Aging Clocks Using Transcriptomic and EEG Data',
        date: 'November 2024',
        description: "How accurately can we model human age using transcriptomic data? Is brain EEG wave data informative of biological age and other health outcomes? In this first genomics rotation with Dr. Arjun Krishnan, I implemented an ordinal regression neural network for transcriptomic data to model human age. I also analyzed brain wave data to construct similar models.",
        tags: 'ML, Time Series Analysis',
        technologies: ['Python', 'RNAseq Data', 'MATLAB'],
        image: corn,
        hasApp: false,
        appPath: ''
    },
    {
        id: 3,
        title: 'GWAS for Studying Genetic Determinants of Aging Gaps',
        date: 'January 2025',
        description: "An aging gap is the difference between one's biological age and age predicted by a machine learning model. Are there genetic determinants for someone being a fast vs slow ager? In this second genomics rotation with Dr. Joanne Cole, I created a dataset of aging gaps and employed GWAS to locate genomic regions associated with one's aging gap score.",
        tags: 'High-Dimensional Regression',
        technologies: ['UK Biobank', 'DNAnexus', 'Cloud Computing', 'Python'],
        image: gwas,
        hasApp: false,
        appPath: ''
    },
    {
        id: 4,
        title: 'Differential HNRNP-C Binding Analysis',
        date: 'March 2025',
        description: "HNRNP-C is an RNA binding protein that influences a wide range of gene expression. Can the speed of RNA polymerase, the protein that transcribes DNA into RNA, affect the activity of HNRNP-C? In this third genomics rotation with Dr. David Bentley, I analyzed data for both fast and slow RNA polymerase and determined whether and how HNRNP-C binds differently in the two conditions.",
        tags: 'Signal Analysis, Nonparametric',
        technologies: ['Cloud Computing', 'UNIX Shell Commands', 'UCSC Genome Browser'],
        image: genomeBrowser,
        hasApp: false,
        appPath: ''
    },
    {
        id: 5, // id is the traditional way to distinguish items in an array
        title: 'Lens Regeneration Analysis',
        date: 'May 2023',
        description: 'Does aging affect the ability of newts to regenerate their lenses? Using data produced by a Miami University biology lab, I fit a negative binomial regression model to see the relationships between age, recovery time, and the count of cells that have begun to regenerate.',
        tags: 'Regression, Bootstrap',
        technologies: ['R'],
        image: lensRegen,
        hasApp: false,
        appPath: ''
    },
    {
        id: 6,
        title: 'Portfolio Website',
        date: 'June 2023',
        description: "This is the website you are currently visting. I built it because I wanted to have digital record of some of the projects I've been involved in over my school years. I believe that a visually appealing and thoughtfully designed website will always be more effective at getting ideas across than a pile of GitHub files.",
        tags: 'Frontend',
        technologies: ['React', 'Tailwind CSS', 'Midjourney', 'Azure Static Web Apps'],
        image: midjourney,
        hasApp: false,
        appPath: ''
    },
    {
        id: 7,
        title: 'CPI Trend Viewer',
        date: 'July 2023',
        description: 'At the heart of this application is a SAS macro that parses information from multiple offical goverment data files and generates a graph of consumer price index (CPI) trends, according to specified parameters. I implemented a backend into this portfolio website to allow a user to connect to the macro and obtain a visualization.',
        tags: 'Data Manipulation, Backend',
        technologies: ['SAS', 'SQL', 'Python', 'SASPy', 'Flask', 'Docker', 'Azure Container Apps'],
        image: cpiViewer,
        hasApp: true,
        appPath: '/applications/flaskSASCpiViewer'
    },
    // {
    //     id: 5,
    //     title: 'Calibrated Power Prior Optimization',
    //     date: 'January 2023',
    //     description: "Coming Soon...",
    //     tags: 'Bayesian / Simulation',
    //     technologies: ['R', 'RStan'],
    //     image: project5,
    //     hasApp: false,
    //     appPath: ''
    // }
]; 

export default PROJECTS; // "this shares the projects array with the rest of the code base"


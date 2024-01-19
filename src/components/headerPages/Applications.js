
import { Link } from 'react-router-dom';

const Applications = () => {
    return (
        <div className='container mt-20 flex flex-col items-center'>
            
            <h1 className="mt-0">Applications</h1>
            <h3 className="text-green-600 mt-8">Data Science Apps</h3>

            
            <div className="ml-8 grid grid-flow-row gap-10 text-left justify-center mt-32 max-w-[80rem]">
                <Link to='/applications/flaskSASCpiViewer'>
                    <div className="">
                        <h2 className='hover:underline'>CPI Trend Viewer</h2>
                        <p className="mt-4 text-[16px]">Visualization tool that allows a user to display a graph of the CPI trends for any of the 400 government defined expense types,
                            within any desired time interval, and with a pick for the method of calculation.
                        </p>
                    </div>
                </Link>
                <a target="_blank" rel="noreferrer" href="https://davydsadovskyy.shinyapps.io/llm-papers-2023-dashboard/">
                    <div className="mt-10">
                        <h2 className='hover:underline'>Research Paper Visualizer</h2>
                        <p className="mt-4 text-[16px]">Interactive ashboard that visualizes the semantic location of almost 15k reseach papers published about LLMs in the past year and allows a user to filter based on date or paper influence. In addition, there are two other interactive visualizations that help a user further understand the research landscape.
                        </p>
                    </div>
                </a>
            </div>
        </div>
        
    )
}

export default Applications;
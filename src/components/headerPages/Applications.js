
import { Link } from 'react-router-dom';

const Applications = () => {
    return (
        <div className='container mt-20 flex flex-col items-center'>
            
            <h1 className="mt-0">Applications</h1>
            <h3 className="text-slate-500 mt-8">Data Science Apps</h3>

            
            <div className="grid grid-flow-row gap-10 text-left justify-center mt-32 max-w-[80rem]">
                <Link to='/applications/flaskSASCpiViewer'>
                    <div className="">
                        <h2 className="text-blue-500">Flask SAS CPI Viewer</h2>
                        <p className="mt-4">You can use this to display a graph of the cpi trends for any of the 400 government defined expense types,
                            within any desired time interval, and with a pick for the method of calculation.
                        </p>
                    </div>
                </Link>
                <Link to='/applications/healthAlgorithmsApp'>
                    <div className="mt-10">
                        <h2 className="text-blue-500">Health Algorithms Advisor</h2>
                        <p className="mt-4">This is an end to end data science project. It takes collects real time data using an API, then processes it
                            through cloud based data pipelines in azure. Technologies like Azure Data Factory, Data Lake, and Mongoose DB,
                            etc are used to do stuff. Finally, a web app exposes the endpoint for the api which a user can post and get to 
                            on this app.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
        
    )
}

export default Applications;
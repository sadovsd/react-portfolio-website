import { useState, useEffect } from 'react';
import PlotlyGraph from './plotlyGraph';
import itemNamesData from './cpi_items_mapping.json'; // Import JSON data directly
import Dropdown from './dropdowns/Dropdown';
import { PropagateLoader, PulseLoader } from 'react-spinners';
import { Checkmark } from 'react-checkmark';

function Project3App() {

    // the values in the form that will be submitted to flask API
    const [form, setForm] = useState({
        startYear: '',
        endYear: '',
        itemCode: '',
        sourceFile: '',
        seriesCode: ''
      });


    // getting series data from first flask backend from first submit
    const [seriesInfo, setSeriesInfo] = useState('');
    const [isLoading1, setIsLoading1] = useState(false);
    const [backendError, setBackendError] = useState(false);


    // shit for getting/processing the response from flask backend
    const [csvData, setCsvData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    


    // Define variables and handlers for the the start year/ end year dropdowns
    const [YearOptions, setYearOptions] = useState([]);
    const [selectedStartYear, setSelectedStartYear] = useState(null);
    const [selectedEndYear, setSelectedEndYear] = useState(null);
    useEffect(() => {
        const [startYear, endYear] = seriesInfo ? seriesInfo.split(", ").map(Number) : [null, null];
        if (startYear && endYear) {
            const years = Array.from({length: endYear - startYear + 1}, (_, i) => startYear + i);
            setYearOptions(years.map(year => ({ name: year.toString(), subOptions: [] })));
        }
    }, [seriesInfo]);
    const handleStartYearSelect = (option) => {
        setSelectedStartYear(option);
        setForm({ ...form, startYear: option.name });
    };
    const handleEndYearSelect = (option) => {
        setSelectedEndYear(option);
        setForm({ ...form, endYear: option.name });
    };
    


    // options is the data that will be used for expense type nested dropdown
    const [options, setOptions] = useState([]);
    // since item name is not set in the form, but we still need it for the plotly graph, i'll keep track of it in a state var
    const [itemName, setItemName] = useState([]);
    // tranform the expense type data from .json file into a format suitable for using in my nested dropdown component
    // ...... The dependency array is an optional second argument you can pass to useEffect to control when it runs. When any
    // value in the dependency array changes, the effect function will run again. If you pass an empty array ([]), the useEffect
    // will only run once after the initial render, similar to componentDidMount. If you omit the array entirely, the effect
    // will run after every render. If you include variables in the array, the effect will run anytime any of those variables
    // change.
    useEffect(() => {
        setOptions(transformOptions(itemNamesData));
      }, []);
    function handleSelect(option, index) {
        const newInputs = [...inputs]; // Create a copy of the current state
        newInputs[index] = { // Update the object at the current index
            ...newInputs[index],
            sourceFile: option.source_file, 
            itemCode: option.item_code,
            startYear: '', 
            endYear: '', 
            seriesCode: '',
        };
        
        // clear error message, if there is one
        setFormError(null);
        setExpenseTypeError(false);
        // clear the years retrieval success button so its clickable again for a new expense type
        setRetrievedYears(false);
        // Clear start year, end year, and series code
        setSelectedStartYear(null);
        setSelectedEndYear(null);
        setSeriesInfo('');
        setSeriesInfo('');
        setItemName(option.name);
    
        setInputs(newInputs); // Update the state
    }
    

    // display error when user clicks button withotu selecting expense type first
    const [expenseTypeError, setExpenseTypeError] = useState(false);
    // a state for checking if years data was succesfully retrieved
    const [retrievedYears, setRetrievedYears] = useState(false);
    const handleGetYears = (event) => {
        event.preventDefault();
        // Check if expense type is selected
        if (!form.itemCode) {
            setExpenseTypeError(true);
            return;
        }
        setIsLoading1(true);
        const url = new URL(process.env.REACT_APP_SAS_FLASK_ROUTE_ONE); // azure deployed web app
        // const url = new URL('http://localhost:8000/getAvailableSeries'); // docker container
        // const url = new URL('http://127.0.0.1:5000/getAvailableSeries'); // local
        url.searchParams.append('1', form.itemCode);
        fetch(url, {
          method: 'POST'
        })
        .then(response => {
            if (response.ok) { 
                return response.text();
            } else {
                throw new Error('Backend Error');
            }
        })
        .then(data => {
            let parsedData = JSON.parse(data); // Parse JSON data
            setSeriesInfo(`${parsedData[0]}, ${parsedData[1]}, ${parsedData[2]}`);
            setForm({ ...form, seriesCode: parsedData[2] });
            setIsLoading1(false);
            setRetrievedYears(true);
            setBackendError(false); // Reset backendError state if it was previously true
        })
        .catch(error => {
            console.error("Error:", error);
            setIsLoading1(false);
            setBackendError("Backend Error");
        });
    };



    const [graphTitle, setGraphTitle] = useState('');
    const [backendError2, setBackendError2] = useState(false);
    // used to track if either ed eyar bigger than start year or not all fields filled out
    const [formError, setFormError] = useState(null);
    // When Form is filled out and submited by user, this method is called to connect to API and shit
    const handleSubmit = (event) => {
        event.preventDefault(); // idk why i need this...
        // check for user fuck ups in the form and stop form submission if they exist.
        if (!form.startYear || !form.endYear || !form.itemCode || !form.sourceFile || !form.seriesCode) {
            setFormError("All fields must be filled in");
            return;
        }
        if (parseInt(form.startYear) > parseInt(form.endYear)) {
            setFormError("End year cannot be less than start year");
            return;
        }
        setIsLoading(true);
        const url = new URL(process.env.REACT_APP_SAS_FLASK_ROUTE_TWO); // deployed jawn
        // const url = new URL('http://localhost:8000/makeGraphReadyData'); // docker container
        // const url = new URL('http://127.0.0.1:5000/makeGraphReadyData'); // local jawn
        url.searchParams.append('1', form.startYear);
        url.searchParams.append('2', form.endYear);
        url.searchParams.append('3', form.endYear);
        url.searchParams.append('4', form.sourceFile);
        url.searchParams.append('5', form.seriesCode);
    
        fetch(url, {
          method: 'POST' // im still confused with post vs get- both worked here...
        })
        .then(response => {
            // verify if the response status is within the range of 200-299, which typically indicates a successful response. 
            if (response.ok) { 
                return response.text();
            // if the response status is not within the successful range (e.g., 400, 500, etc.) - throw an error
            } else {
                throw new Error('Backend Error');
            }
        })
        .then(data => {
            setCsvData(data);
            setGraphTitle(`${itemName}: ${form.startYear}-${form.endYear} ${form.endYear} CPI Change`);
            setIsLoading(false);
            setBackendError2(false); // Reset backendError state if it was previously true
        })
        .catch(error => {
            console.error("Error:", error);
            setIsLoading(false);
            setBackendError2(true);
        });
        setFormError(null);
    };


    // Allow creation of multiple rows of expense type inputs
    const [inputs, setInputs] = useState([{ sourceFile: "", itemCode: "" }]);
    const addInput = () => {
        setInputs([...inputs, {}]);
    };
    

    
    return (
        // <div className='container m-10 bg-blue-200'>
        <div className='container mt-[4rem] flex flex-col items-center'>

            <h1 className="mb-24">SAS Consumer Price Index Trend Viewer</h1>

            {/* Information about the app on the left and the form on the right */}
            <div className=' flex flex-row'>

                {/* Information about the app */}
                <div className='basis-5/12 ml-[0rem] mr-[0rem] mt-[4rem] text-left'>
                    <h3 className='text-blue-500'>Note:</h3>
                    <h3 className='text-slate-700'>The data is seasonally unadjusted and is the U.S average.
                    </h3>
                    <h3 className='text-blue-500 mt-10'>Note:</h3>
                    <h3 className='text-slate-700'>Monthly cpi data collection is availabe for all expense types. However, some expense types have
                        a certain period/s where data was collected every 12, 6, or 3 months before it started to be collected
                        every month.
                    </h3>
                    <h3 className='text-blue-500 mt-10'>Note:</h3>
                    <h3 className='text-slate-700'>If you are plotting multiple expense types, press the 'Check Available Years' button only
                        after all desired expense types have been added, as it will speed up the data fetching process.
                    </h3>
                </div>


                {/* <form className="grid grid-flow-col mt-[4rem] items-start w-[25rem] p-2 rounded  bg-white" onSubmit={handleSubmit}> */}
                <form className="" onSubmit={handleSubmit}>
                    

                    {inputs.map((input, index) => {
                        return (
                            <div className='grid grid-flow-col gap-4' key={index}>
                                <Dropdown
                                    className='mt-10'
                                    options={options} 
                                    // onSelect={handleSelect} 
                                    // defaultSelectedOption={form.itemCode} 
                                    onSelect={(option) => handleSelect(option, index)} // Pass in the index
                                    defaultSelectedOption={input.itemCode} 
                                    label="Expense Type"
                                />
                            </div>
                        );
                    })}
                    <button className='font-medium w-[10rem]' onClick={addInput}>+</button>


                    {/* The button jawn */}
                    <div className= 'mt-14 flex flex-row justify-center items-center ml-[0rem]'>
                        {/* Get years button */}
                        <div className="relative flex items-center">
                            <button
                                className={`py-2 px-4 font-semibold rounded-lg border-[1.5px] border-gray-200 
                                            flex justify-center items-center transition-all duration-200 ease-in-out 
                                            ${isLoading1 || retrievedYears ? 'w-[14rem] bg-gray-200' : 'w-[18rem]'} 
                                            ${isLoading1 ? '' : backendError ? 'bg-gray-200 text-red-500' : (retrievedYears ? 'bg-gray-200' : 'bg-white hover:bg-gray-200')}`}
                                onClick={handleGetYears}
                                disabled={seriesInfo || isLoading1 || backendError}   // Disable the button when loading or when there is a backend error
                            >
                                {!isLoading1 ? (!retrievedYears ? (!backendError ? "Check Available Years" : "Backend Error") : "Years Retrieved") : <span className="pr-2">Loading</span>}
                                {isLoading1 && <PulseLoader className='mt-3.5' speedMultiplier={.75} color="#3a3c3e" size={3.5} />}
                            </button>
                            {retrievedYears && <div className="ml-3"><Checkmark size='29px' color='#16a836'/></div>}
                            {expenseTypeError && <div className="absolute left-0 top-[3.3rem] mt-1 ml-1 text-[1.15rem] font-medium text-red-500">Select an expense type</div>}
                        </div>

                        {/* Create graphs button */}
                        <div className="relative flex items-center ml-[2rem]">
                            <button
                                className="w-[14rem] py-2 px-4 font-semibold text-blue-500 border-[1.5px] border-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none"
                                onClick={handleSubmit}
                            >
                                Create Graphs
                            </button>
                            {formError && <div className="absolute left-0 top-[3.3rem] mt-1 ml-1 text-[1.15rem] font-medium text-red-500 text-left">{formError}</div>}
                        </div>
                    </div>




                </form>

            </div>


            {/* Loading Spinner and subsequent cpi trend graphs */}
            {isLoading ? (
            <div className='mt-[8rem] flex flex-col justify-center items-center'>
                <PropagateLoader color='#3366CC' size={25}/>
                <p className='mt-12 ml-8'>Please Wait</p>
            </div>
            ) : backendError2 ? (
            <div className="mt-4 text-red-600">Error occurred while fetching data.</div>
            ) : csvData ? (
            <div>
                <PlotlyGraph 
                    className={'mt-32 mb-20'}
                    csvData={csvData} 
                    title={graphTitle}
                />
                <h3>{form.itemCode},{form.seriesCode}</h3>
                {csvData}

            </div>
            ) : null}
        </div>
      );
};
// put expense type data in .json into a form suitable for my nested dropdown
function transformOptions(jsonData) {
    return Object.keys(jsonData).map(key => ({
      name: key,
      subOptions: jsonData[key].map(item => ({
        name: item.item_name, // name appears in the second dropdown
        source_file: item.source_file, // source_file is what expenseType is actually set to
        item_code: item.item_code
      })),
    }));
}
export default Project3App;
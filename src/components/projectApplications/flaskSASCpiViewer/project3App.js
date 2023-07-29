import { useState, useEffect } from 'react';
import PlotlyGraph from './plotlyGraph';
import itemNamesData from './cpi_items_mapping.json'; // Import JSON data directly
import Dropdown from './dropdowns/Dropdown';
import SingleDropdown from './dropdowns/SingleDropdown';
import { PropagateLoader, PulseLoader } from 'react-spinners';
import { Checkmark } from 'react-checkmark';

function Project3App() {

    // the values in the form that will be submitted to flask API
    const [form, setForm] = useState({
        startYear: '',
        endYear: '',
        calcType: '',
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
    // update form when user selects an expense type item_name. There might be old inputs as well so we clear those
    function handleSelect(option) {
        // clear error message, if there is one
        setFormError(null);
        setExpenseTypeError(false);
        // clear the years retrieval success button so its clickable again for a new expense type
        setRetrievedYears(false);
        // Clear start year, end year, and series code
        setSelectedStartYear(null);
        setSelectedEndYear(null);
        setCalcType(null);
        setSeriesInfo('');
        setSeriesInfo('');
        setItemName(option.name);
        // Reset the form state
        setForm({ 
            ...form, 
            startYear: '', 
            endYear: '', 
            calcType: '',
            seriesCode: '',
            sourceFile: option.source_file, 
            itemCode: option.item_code 
        });
    }
    


    // define the data for the calc type dropdown
    const [calcTypeOptions, setCalcTypeOptions] = useState([
        { name: 'Monthly', subOptions: [] },
        { name: 'Quarterly', subOptions: [] },
        { name: 'Yearly', subOptions: [] },
    ]);
    useEffect(() => {
        // Only allow 'Yearly' option when start and end years are not the same
        if (selectedStartYear && selectedEndYear && selectedStartYear.name === selectedEndYear.name) {
            setCalcTypeOptions([
                { name: 'Monthly', subOptions: [] },
                { name: 'Quarterly', subOptions: [] },
            ]);
        } else {
            setCalcTypeOptions([
                { name: 'Monthly', subOptions: [] },
                { name: 'Quarterly', subOptions: [] },
                { name: 'Yearly', subOptions: [] },
            ]);
        }
    }, [selectedStartYear, selectedEndYear, setCalcTypeOptions]);
    // for the data that will go into calc type dropdown
    const [selectedCalcType, setCalcType] = useState(null);
    // update form with a calcType when user selects one from the dropdown
    const handleCalcTypeSelect = (option) => {
        setCalcType(option);
        setForm({ ...form, calcType: option.name });
    };
    useEffect(() => {
        // If start and end years become the same and 'Yearly' is selected, reset selectedCalcType
        if (
            selectedStartYear && 
            selectedEndYear && 
            selectedStartYear.name === selectedEndYear.name && 
            selectedCalcType &&  // Check if selectedCalcType is not null before accessing its properties
            selectedCalcType.name === 'Yearly'
        ) {
            setCalcType(null);
            setForm({ ...form, calcType: '' });
        }
    }, [selectedStartYear, selectedEndYear, selectedCalcType, setCalcType]);
    



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
        const url = new URL('https://flask-test2.azurewebsites.net/getAvailableSeries'); // azure deployed web app
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
        if (!form.startYear || !form.endYear || !form.calcType || !form.itemCode || !form.sourceFile || !form.seriesCode) {
            setFormError("All fields must be filled in");
            return;
        }
        if (parseInt(form.startYear) > parseInt(form.endYear)) {
            setFormError("End year cannot be less than start year");
            return;
        }
        setIsLoading(true);
        const url = new URL('https://flask-test2.azurewebsites.net/makeGraphReadyData'); // deployed jawn
        // const url = new URL('http://localhost:8000/makeGraphReadyData'); // docker container
        // const url = new URL('http://127.0.0.1:5000/makeGraphReadyData'); // local jawn
        url.searchParams.append('1', form.startYear);
        url.searchParams.append('2', form.endYear);
        url.searchParams.append('3', form.calcType);
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
            setGraphTitle(`${itemName}: ${form.startYear}-${form.endYear} ${form.calcType} CPI Change`);
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


    return (
        // <div className='container m-10 bg-blue-200'>
        <div className='container mt-[4rem] flex flex-col items-center'>

            <h1 className="mb-24">SAS Consumer Price Index Trend Viewer</h1>


            <div className=' flex flex-row'>

                <div className='basis-5/12 ml-[21rem] mr-[5rem] mt-[4rem] text-left'>
                    <h3 className='text-blue-500'>Note:</h3>
                    <h3 className='text-slate-700'>Monthly cpi data collection is availabe for all expense types. However, some expense types have
                        a certain period/s where data was collected every 12, 6, or 3 months before it started to be collected
                        every month.
                    </h3>
                    <h3 className='text-blue-500 mt-10'>Note:</h3>
                    <h3 className='text-slate-700'>If you are plotting multiple expense types, press the 'Check Available Years' button only
                        after all desired expense types have been added, as it will speed up the data fetching process.
                    </h3>
                </div>

                <form className="grid grid-flow-row mt-[4rem] items-start w-[25rem] p-2 rounded  bg-white" onSubmit={handleSubmit}>
                    <Dropdown options={options} onSelect={handleSelect} defaultSelectedOption={form.itemCode} label="Expense Type"/>
                    <div className="relative flex items-center">
                        <div>
                            <div className="flex flex-row items-center">
                                <button
                                    className={`mt-6 ml-10  w-[180px] py-2 px-4 font-semibold rounded-lg border-[1.5px] border-gray-200 
                                                mr-2 flex justify-center items-center transition-all duration-200 ease-in-out 
                                                ${isLoading1 ? 'bg-gray-200' : (backendError ? 'bg-gray-200 text-red-500' : (retrievedYears ? 'bg-gray-200' : 'bg-white hover:bg-gray-200'))}`}
                                    onClick={handleGetYears}
                                    disabled={seriesInfo || isLoading1 || backendError}   // Disable the button when loading or when there is a backend error
                                >
                                    {!isLoading1 ? (!retrievedYears ? (!backendError ? "Check Available Years" : "Backend Error") : "Years Retrieved") : <span className="pr-2">Loading</span>}
                                    {isLoading1 && <PulseLoader className='mt-3.5' speedMultiplier={.75} color="#3a3c3e" size={3.5} />}
                                </button>
                                {retrievedYears && <div className="ml-3 mt-[1.15rem]"><Checkmark size='26px' color='#16a836'/></div>}
                            </div>
                            {expenseTypeError && <div className="absolute left-1 top-[4.5rem] mt-2 text-[12px] font-medium text-red-500">Select an expense type</div>}
                        </div>
                    </div>
                    <div className={`mt-10 ${!seriesInfo ? 'cursor-not-allowed' : ''} relative`}>
                        <SingleDropdown 
                            className={`${!seriesInfo ? 'pointer-events-none' : ''}`}
                            options={YearOptions} 
                            onSelect={handleStartYearSelect} 
                            placeholder="Start Year"
                            label='Start Year'
                            value={selectedStartYear}
                        />
                    </div>
                    <div className={`mt-10 ${!seriesInfo ? 'cursor-not-allowed' : ''} relative`}>
                        <SingleDropdown 
                            className={`${!seriesInfo ? 'pointer-events-none' : ''}`}
                            options={YearOptions} 
                            onSelect={handleEndYearSelect} 
                            placeholder="End Year"
                            label='End Year'
                            value={selectedEndYear}
                        />
                    </div>
                    <div className={`mt-10 ${!seriesInfo ? 'cursor-not-allowed' : ''}`}>
                        <SingleDropdown 
                            className={`${!seriesInfo ? 'pointer-events-none' : ''}`}
                            options={calcTypeOptions}
                            onSelect={handleCalcTypeSelect}
                            placeholder="Calculation Method"
                            label='Calculation Method'
                            value={selectedCalcType}
                        />
                    </div>
                    <div style={{ display: 'inline-block', width: '250px', textAlign: 'left' }}>
                        <button
                            className="mt-10 w-[180px] py-2 px-4 font-semibold text-blue-500 border-[1.5px] border-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none"
                            onClick={handleSubmit}
                        >
                            Create Graphs
                        </button>
                        {formError && <div className="mt-[.20rem] ml-[.3rem] text-[12px] font-medium text-red-500">{formError}</div>}
                    </div>
                </form>

            </div>

            {isLoading ? (
            <div className='mt-[8rem] flex flex-col justify-center items-center'>
                <PropagateLoader color='#3366CC' size={25}/>
                <p className='mt-12 ml-8'>Please Wait</p>
            </div>
            // <div className="mt-4">Loading...</div>
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
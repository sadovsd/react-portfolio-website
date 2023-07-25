import { useState, useEffect } from 'react';
// import PlotlyGraph from './plotlyGraph';
import itemNamesData from './cpi_items_mapping.json'; // Import JSON data directly
import Dropdown from './Dropdown';
import SingleDropdown from './SingleDropdown';
import { ClipLoader, FadeLoader, PropagateLoader, PulseLoader, PuffLoader, DotLoader } from 'react-spinners';



function Form() {

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

        console.log('startYear', startYear);
        console.log('endYear', endYear);
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
    // tranform the expense type data from .json file into a format suitable for using in my nested dropdown component
    useEffect(() => {
        setOptions(transformOptions(itemNamesData));
      }, []);
    // update form when user selects an expense type item_name. There might be old inputs as well so we clear those
    function handleSelect(option) {
        // Clear start year, end year, and series code
        setSelectedStartYear(null);
        setSelectedEndYear(null);
        setCalcType(null);
        setSeriesInfo('');
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
    }, [selectedStartYear, selectedEndYear]);
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
    }, [selectedStartYear, selectedEndYear, selectedCalcType]);
    


    const handleGetYears = (event) => {
        event.preventDefault();
        setIsLoading1(true);
        // const url = new URL('https://flask-test2.azurewebsites.net');
        const url = new URL('http://127.0.0.1:5000/getAvailableSeries');
        url.searchParams.append('1', form.itemCode);

        console.log('itemCode', form.itemCode);
    
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
            setBackendError(false); // Reset backendError state if it was previously true
        })
        .catch(error => {
            console.error("Error:", error);
            setIsLoading1(false);
            setBackendError(true);
        });
    };

    // When Form is filled out and submited by user, this method is called to connect to API and shit
    const handleSubmit = (event) => {
        console.log('formmmm', form)
        event.preventDefault();
        setIsLoading(true);
        // const url = new URL('https://flask-test2.azurewebsites.net');
        const url = new URL('http://127.0.0.1:5000/makeGraphReadyData');
        url.searchParams.append('1', form.startYear);
        url.searchParams.append('2', form.endYear);
        url.searchParams.append('3', form.calcType);
        url.searchParams.append('4', form.sourceFile);
        url.searchParams.append('5', form.itemCode);
        url.searchParams.append('6', form.seriesCode);
    
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
            setIsLoading(false);
            setBackendError(false); // Reset backendError state if it was previously true
        })
        .catch(error => {
            console.error("Error:", error);
            setIsLoading(false);
            setBackendError(true);
        });
    };

    return (
        <div>
        <form className="grid grid-flow-row mt-12 w-[80rem] p-2 mx-auto rounded  bg-white" onSubmit={handleSubmit}>
            
            <Dropdown options={options} onSelect={handleSelect} defaultSelectedOption={form.itemCode} label="Expense Type"/>
            <button
                className={`mt-6 w-[200px] py-2 px-4 text-gray-800 font-semibold rounded-lg border border-gray-200 hover:bg-gray-200 focus:outline-none focus:border-gray-500 mr-2 flex justify-center items-center transition-all duration-200 ease-in-out ${isLoading1 ? 'bg-gray-200' : 'bg-white'}`}
                onClick={handleGetYears}
                disabled={isLoading1}  // Disable the button when loading
            >
                {!isLoading1 ? "Check Available Years" : <span className="pr-2">Loading</span>}
                {isLoading1 && <PulseLoader className='mt-3.5' speedMultiplier={.75} color="#3a3c3e" size={3.5} />}
            </button>


            <div className={`mt-10 ${!seriesInfo ? 'cursor-not-allowed' : ''}`}>
    <SingleDropdown
        className={!seriesInfo ? 'pointer-events-none' : ''}
        options={YearOptions} 
        onSelect={handleStartYearSelect} 
        placeholder="Start Year"
        label='Start Year'
        value={selectedStartYear}
    />
</div>

<div className={`mt-10 ${!seriesInfo ? 'cursor-not-allowed' : ''}`}>
    <SingleDropdown 
        className={!seriesInfo ? 'pointer-events-none' : ''}
        options={YearOptions} 
        onSelect={handleEndYearSelect} 
        placeholder="End Year"
        label='End Year'
        value={selectedEndYear}
    />
</div>

<div className={`mt-10 ${!seriesInfo ? 'cursor-not-allowed' : ''}`}>
    <SingleDropdown 
        className={!seriesInfo ? 'pointer-events-none' : ''}
        options={calcTypeOptions}
        onSelect={handleCalcTypeSelect}
        placeholder="Calculation Method"
        label='Calculation Method'
        value={selectedCalcType}
    />
</div>


            <button
                className="mt-10 w-[150px] py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={handleSubmit}
            >
                Create Graphs
            </button>
        </form>
        

        {isLoading ? (
        <div className="mt-4">Loading...</div>
        ) : backendError ? (
        <div className="mt-4 text-red-600">Error occurred while fetching data.</div>
        ) : csvData ? (
        <span>{csvData}</span>
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

export default Form;
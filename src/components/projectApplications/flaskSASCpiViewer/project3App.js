import { useState, useEffect } from "react";
import PlotlyGraph from "./plotlyGraph";
import itemNamesData from "./cpi_items_mapping.json"; // Import JSON data directly
import Dropdown from "./dropdowns/Dropdown";
import SingleDropdown from "./dropdowns/SingleDropdown";
import { PropagateLoader, PulseLoader } from "react-spinners";
import { Checkmark } from "react-checkmark";
import Popup from "./Popup";
import { AiOutlineDelete } from "react-icons/ai";

function Project3App() {
  // what our form looks like for a single expense type
  const initialFormState = {
    startYear: "",
    endYear: "",
    calcType: "",
    itemCode: "",
    sourceFile: "",
    seriesCode: "",
    itemName: "",
  };
  // use array since we submit multiple expense types
  // apparently, deleting expense based by index doesn't work, so we need to use id. 'react gets confused' - chatgpt
  const [form, setForm] = useState([{ ...initialFormState, id: Date.now() }]);
  // Allow creation of multiple rows of expense type inputs
  const addExpenseType = () => {
    // setForm([...form, initialFormState]);
    setForm((form)=>[...form, { ...initialFormState, id: Date.now() }]); // Generate a new id for each new item
    // since a new expense type was selected, we need to trigger the get years button to go back to clickable state
    setIsFormChanged(true);
    // clear the years retrieval success button so its clickable again for a new expense type
    setRetrievedYears(false);
  };
  // Any particular expense type can be deleted
  const deleteExpenseType = (id) => {
    // const newForm = [...form];
    // newForm.splice(index, 1);
    // setForm(newForm);
    let filteredForm = form?.filter((expense) => expense.id !== id);
    setForm(filteredForm);
    let checkUnretrievedYears = filteredForm?.filter((item) => !retrievedItems[item?.itemCode]);
    setRetrievedYears(checkUnretrievedYears.length ? false : true);
  };

  // for managing the state of getYears button - we want to have the green success checkmark and for it to be nonfunctional
  // until either a new expense type is added or a current expense type is changed
  const [isFormChanged, setIsFormChanged] = useState(true);

  // jawns for getting/processing the response from flask backend when getting available years
  const [seriesInfo, setSeriesInfo] = useState([]);
  const [isLoading1, setIsLoading1] = useState(false);
  const [backendError, setBackendError] = useState(false);

  // jawns for getting/processing the response from flask backend when creating graphs
  const [csvData, setCsvData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Define variables and handlers for the the start year/ end year dropdowns
  const [YearOptions, setYearOptions] = useState([]);
  useEffect(() => {
    form.forEach((formElement, index) => {
      const matchingInfo = seriesInfo.find(
        (info) => info?.itemCode === formElement.itemCode
      );
      if (matchingInfo) {
        const { startYear, endYear } = matchingInfo;
        if (startYear && endYear) {
          const years = Array.from(
            { length: endYear - startYear + 1 },
            (_, i) => startYear + i
          );
          setYearOptions((prevOptions) => {
            let newOptions = [...prevOptions];
            newOptions[index] = years.map((year) => ({
              name: year.toString(),
              subOptions: [],
            }));
            return newOptions;
          });
        }
      }
    });
  }, [form, seriesInfo]);

  const handleStartYearSelect = (option, index) => {
    setForm((prevForm) => {
      let newForm = [...prevForm];
      newForm[index].startYear = option.name;
      return newForm;
    });
  };
  const handleEndYearSelect = (option, index) => {
    setForm((prevForm) => {
      let newForm = [...prevForm];
      newForm[index].endYear = option.name;
      return newForm;
    });
  };

  // options is the data that will be used for expense type nested dropdown
  const [options, setOptions] = useState([]);
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
  function handleSelect(option, index) {
    const newFormState = [...form]; // Create a copy of the current state
    newFormState[index] = {
      // Update the object at the current index
      ...newFormState[index],
      sourceFile: option.source_file,
      itemCode: option.item_code,
      startYear: "",
      endYear: "",
      calcType: "",
      seriesCode: retrievedItems[option.item_code]?.seriesCode || "",
      itemName: option.name,
    };

    let checkUnretrievedYears = newFormState.filter((item) => !retrievedItems[item?.itemCode]);
    setRetrievedYears(checkUnretrievedYears.length ? false : true);

    setForm(newFormState); // Update the state

    // since a new expense type was selected, we need to trigger the get years button to go back to clickable state
    setIsFormChanged(true);

    // clear series info for just the selected expense - this inadvertadly also creates a new element in the
    // seriesInfo array whenever a new expenseType is selected.
    // const newSeriesInfo = [...seriesInfo];
    // newSeriesInfo[index] = {};
    // setSeriesInfo(newSeriesInfo);
  }

  // define the data for the calc type dropdown
  const [calcTypeOptions, setCalcTypeOptions] = useState(
    Array(form.length).fill([
      { name: "Monthly", subOptions: [] },
      { name: "Quarterly", subOptions: [] },
      { name: "Yearly", subOptions: [] },
    ])
  );
  // this useEffect will modify the calcType dropdown options depending on the years a user selects.
  useEffect(() => {
    // Create a copy of calcTypeOptions
    const newCalcTypeOptions = [...calcTypeOptions];
    // For each form element, update the corresponding calcTypeOptions
    for (let i = 0; i < form.length; i++) {
      if (
        form[i].startYear &&
        form[i].endYear &&
        form[i].startYear === form[i].endYear
      ) {
        // Yearly is not allowed when startYear=endYear
        newCalcTypeOptions[i] = [
          { name: "Monthly", subOptions: [] },
          { name: "Quarterly", subOptions: [] },
        ];
      } else {
        newCalcTypeOptions[i] = [
          { name: "Monthly", subOptions: [] },
          { name: "Quarterly", subOptions: [] },
          { name: "Yearly", subOptions: [] },
        ];
      }
    }
    if (!calcTypeOptions) {
      setCalcTypeOptions(newCalcTypeOptions);
    }
  }, [calcTypeOptions, form]);
  // If start and end years become the same and 'Yearly' is already selected, reset selectedCalcType
  useEffect(() => {
    // Create a copy of form state
    const newFormState = [...form];
    // For each form element, if startYear and endYear are the same and calcType is 'Yearly', reset calcType
    for (let i = 0; i < form.length; i++) {
      if (
        form[i].startYear &&
        form[i].endYear &&
        form[i].startYear === form[i].endYear &&
        form[i].calcType === "Yearly"
      ) {
        newFormState[i] = { ...newFormState[i], calcType: "" };
        setForm(newFormState);
      }
    }
  }, [form]);
  // update the form when a user makes a calcType selection
  const handleCalcTypeSelect = (option, index) => {
    const newFormState = [...form];
    newFormState[index] = {
      ...newFormState[index],
      calcType: option.name,
    };
    setForm(newFormState);
  };

  // a state for checking if years data was succesfully retrieved
  const [retrievedYears, setRetrievedYears] = useState(false);
  const [retrievedItems, setRetrievedItems] = useState({});
  const handleGetYears = (event) => {
    event.preventDefault();
    setCheckYearsError(false); // ?????? Reset error state at the start
    setIsLoading1(true);
    const url = new URL(process.env.REACT_APP_SAS_FLASK_ROUTE_ONE); // azure jawn
    // const url = new URL('http://localhost:8000/getAvailableSeries'); // docker jawn
    // const url = new URL('http://127.0.0.1:5000/getAvailableSeries'); // local jawn

    // we can't do setCheckYearsError directly cuz 'asynchronous nature' or something
    let errorOccurred = false;
    form.forEach((expense, index) => {
      // If there is a row without an expense type selected, we give user an error
      if (!expense.itemCode) {
        errorOccurred = true;
        return;
      }
      // gather the itemCode parameteres for the flask API call
      url.searchParams.append((index + 1).toString(), expense.itemCode);
    });

    // After checking all form entries, update the state of expense type error
    setCheckYearsError(errorOccurred);
    if (errorOccurred) {
      setIsLoading1(false);
      return; // Stop function if error occurred
    }

    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Backend Error");
        }
      })
      .then((data) => {
        let parsedData = JSON.parse(data); // Parse JSON data

        let seriesArray = parsedData.map((item) => ({
          startYear: item.data[0],
          endYear: item.data[1],
          seriesCode: item.data[2],
          itemCode: item.data[3],
        }));

        let updatedForm = form?.map((item, index) => {
          if(!retrievedItems[seriesArray[index]?.itemCode]){
            setRetrievedItems(prev => ({
              ...prev,
              [seriesArray[index]?.itemCode]: seriesArray[index]
          }));
          }
          return { ...item, seriesCode: seriesArray[index]?.seriesCode };
        });

        setForm(updatedForm);
        setSeriesInfo(seriesArray);

        setIsLoading1(false);
        setRetrievedYears(true);
        // form goes to succesful, disabled state
        setIsFormChanged(false);
        // Reset backendError state if it was previously true
        setBackendError(false);
      })
      .catch((error) => {
        setIsLoading1(false);
        setBackendError("Backend Error");
      });
  };

  // state updates in React may be asynchronous for performance reasons, meaning the update does not happen
  // immediately and the new value is not available right after calling the setter function. If you need to
  // perform some action when the state has been updated, you should use the useEffect hook
  useEffect(() => {
    console.log("useEffect- seriesInfo", seriesInfo);
    console.log("useEffect- form", form);
  }, [seriesInfo, form]);

  const [graphTitle, setGraphTitle] = useState([]);
  const [backendError2, setBackendError2] = useState(false);
  // When Form is filled out and submited by user, this method is called to connect to API and shit
  const handleSubmit = (event) => {
    event.preventDefault(); // idk why i need this...
    // check for user fuck ups in the form and stop form submission if they exist.
    for (let i = 0; i < form.length; i++) {
      const expense = form[i];
      // console.log('handleSubmit- we in da for loop');

      if (
        !expense.startYear ||
        !expense.endYear ||
        !expense.calcType ||
        !expense.itemCode ||
        !expense.sourceFile ||
        !expense.seriesCode
      ) {
        setCreateGraphsError(
          `All fields must be filled in for expense type at index ${i + 1}`
        );
        // console.log('handleSubmit- error set: "all fields must be filled in"');
        return;
      }

      if (parseInt(expense.startYear) > parseInt(expense.endYear)) {
        setCreateGraphsError(
          `End year cannot be less than start year for expense type at index ${
            i + 1
          }`
        );
        // console.log('handleSubmit- error set: "end year cant be bigger"');
        return;
      }
    }
    // console.log('handleSubmit- we made it past error returns!');
    setIsLoading(true);
    const url = new URL(process.env.REACT_APP_SAS_FLASK_ROUTE_TWO); // azure deployed jawn
    // const url = new URL('http://localhost:8000/makeGraphReadyData'); // docker jawn
    // const url = new URL('http://127.0.0.1:5000/makeGraphReadyData'); // local jawn

    // Iterate over the form data and append the data from each index
    for (let i = 0; i < form.length; i++) {
      const expense = { ...form[i] };
      // remove form variables that are not needed for processing in backend
      delete expense.itemCode;
      delete expense.id;
      delete expense.itemName;
      const expenseValues = Object.values(expense).join(",");
      url.searchParams.append((i + 1).toString(), expenseValues);
    }

    fetch(url, {
      method: "GET", // im still confused with post vs get- both worked here...
    })
      .then((response) => {
        // verify if the response status is within the range of 200-299, which typically indicates a successful response.
        if (response.ok) {
          return response.text();
          // if the response status is not within the successful range (e.g., 400, 500, etc.) - throw an error
        } else {
          throw new Error("Backend Error");
        }
      })
      .then((data) => {
        setCsvData(data);
        const graphTitles = form.map(
          (item) =>
            `${item.itemName}: ${item.startYear}-${item.endYear} ${item.calcType} CPI Trend`
        );
        setGraphTitle(graphTitles);
        setIsLoading(false);
        setBackendError2(false); // Reset backendError state if it was previously true
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        setBackendError2(true);
      });
    setCreateGraphsError(null);
  };

  // used to track if any item Code was not filled out in the form
  const [CheckYearsError, setCheckYearsError] = useState(false);
  // used to track if either the end year bigger than start year or not all fields in form filled out
  const [CreateGraphsError, setCreateGraphsError] = useState(null);
  // Once the select expense type error already is displayed to user, I use a useEffect to keep track of
  // whether the user fixes the issue (wether they either fill in that expense type or REMOVE THE EXPENSE TYPE)
  // and subsequently remove the error message
  useEffect(() => {
    if (CheckYearsError) {
      // check if any itemCode is missing, some() returns a boolean
      const isError = form.some((expense) => !expense.itemCode);
      setCheckYearsError(isError);
    }
  }, [form, CheckYearsError]);
  useEffect(() => {
    // Check if any of the expense objects in the form array have empty values for any of their properties,
    // or if end year is less than start year
    if (CreateGraphsError) {
      const allFormsCorrect = form.every((expense) => {
        // Check if every value is filled out
        const allValuesFilledOut = Object.values(expense).every(
          (value) => value !== ""
        );
        // Check if endYear is greater than or equal to startYear
        const isValidYearRange = expense.endYear >= expense.startYear;
        return allValuesFilledOut && isValidYearRange;
      });
      if (allFormsCorrect) {
        setCreateGraphsError(null);
      }
    }
  }, [form, CreateGraphsError]);

  // for dynamically disabling hte year and calctype dropdowns when a selected expense type doesn't have
  // a corresponding seriesInfo entry in the seriesInfo array
  const isItemCodeInSeriesInfo = (itemCode) => {
    return seriesInfo.some((info) => info?.itemCode === itemCode);
  };

  return (
    // <div className='container m-10 bg-blue-200'>
    <div className="container mt-[4rem] flex flex-col items-center">
      <h1 className="mb-24">SAS Consumer Price Index Trend Viewer</h1>

      {/* Information about the app on the left and the form on the right */}
      <div className=" flex ssm:flex-col md:flex-row ssm:max-w-[320px] sm:max-w-none gap-8">
        {/* Information about the app */}
        <div className="basis-5/12 ml-[0rem] mr-[0rem] ssm:mb-[4rem] sm:mb-0 text-left">
          <h3 className="text-blue-500 ssm:mb-4 sm:mb-0 ssm:text-5xl sm:text-xl">
            Note:
          </h3>
          <h3 className="text-slate-700">
            The data is seasonally unadjusted and is the U.S average.
          </h3>
          <h3 className="text-blue-500 mt-10 ssm:mb-4 sm:mb-0 ssm:text-5xl sm:text-xl">
            Note:
          </h3>
          <h3 className="text-slate-700">
            Monthly cpi data collection is availabe for all expense types.
            However, some expense types have a certain period/s where data was
            collected every 12, 6, or 3 months before it started to be collected
            every month.
          </h3>
        </div>

        <form className="" onSubmit={handleSubmit}>
          {form.map((expense, index) => {
            // console.log(
            //   'isItemCodeInSeriesInfo(form[index].itemCode',
            //   isItemCodeInSeriesInfo(form[index].itemCode)
            // );
            // console.log('Object.keys(seriesInfo[index]).length', Object.keys(seriesInfo[index]).length);
            return (
              // <div key={index}>
              <div key={expense.id} className="mb-10">
                <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center sm:justify-between ">
                  <Dropdown
                    options={options}
                    onSelect={(option) => handleSelect(option, index)}
                    defaultSelectedOption={expense.itemCode}
                    label="Expense Type"
                  />
                  <div className="flex flex-row gap-4 justify-center">
                    <Popup
                      text='You need to click "Check Available Years"'
                      overrideIsVisible={retrievedItems[form[index].itemCode]}
                    >
                      <div
                        className={`${
                          !isItemCodeInSeriesInfo(form[index].itemCode)
                            ? "cursor-not-allowed"
                            : ""
                        } w-[120px] border-[#add8e6] rounded-md`}
                      >
                        <SingleDropdown
                          className={`${
                            !isItemCodeInSeriesInfo(form[index].itemCode)
                              ? "pointer-events-none"
                              : ""
                          }`}
                          options={YearOptions[index]}
                          onSelect={(option) =>
                            handleStartYearSelect(option, index)
                          }
                          placeholder="Start Year"
                          label="Start Year"
                          value={form[index]?.startYear}
                        />
                      </div>
                    </Popup>
                    <Popup
                      text='You need to click "Check Available Years"'
                      overrideIsVisible={retrievedItems[form[index].itemCode]}
                    >
                      <div
                        className={`${
                          !isItemCodeInSeriesInfo(form[index].itemCode)
                            ? "cursor-not-allowed"
                            : ""
                        } w-[120px] border-[#add8e6] rounded-md`}
                      >
                        <SingleDropdown
                          className={`${
                            !isItemCodeInSeriesInfo(form[index].itemCode)
                              ? "pointer-events-none"
                              : ""
                          }`}
                          options={YearOptions[index]}
                          onSelect={(option) =>
                            handleEndYearSelect(option, index)
                          }
                          placeholder="End Year"
                          label="End Year"
                          value={form[index]?.endYear}
                        />
                      </div>
                    </Popup>
                  </div>
                  <div className="flex flex-row gap-4 justify-center">
                    <Popup
                      text='You need to click "Check Available Years"'
                      overrideIsVisible={retrievedItems[form[index].itemCode]}
                    >
                      <div
                        className={`${
                          !isItemCodeInSeriesInfo(form[index].itemCode)
                            ? "cursor-not-allowed"
                            : ""
                        } w-[200px] ${form.length <= 1 ? "xs:w-[250px]" : "xs:w-[202px]"} border-[#add8e6] rounded-md`}
                      >
                        <SingleDropdown
                          className={`${
                            !isItemCodeInSeriesInfo(form[index].itemCode)
                              ? "pointer-events-none"
                              : ""
                          }`}
                          options={calcTypeOptions[0]}
                          onSelect={(option) =>
                            handleCalcTypeSelect(option, index)
                          }
                          placeholder="Calculation Method"
                          label="Calculation Method"
                          value={form[index]?.calcType}
                        />
                      </div>
                    </Popup>
                    {form.length > 1 && (
                      <div className="">
                        <button
                          type="button"
                          className="h-full pr-[10px] pl-[5px] flex items-center text-red-500 rounded-md hover:bg-red-500 hover:text-white focus:outline-none order-last sm:order-none "
                          onClick={() => deleteExpenseType(expense.id)}
                        >
                          <AiOutlineDelete className="text-3xl ml-2" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <button
            // Apparenlty, we need to specify type=button cuz when you click on the "Add Expense" button,
            // it tries to submit the form, because the default type of a button inside a form is submit,
            // which triggers the form's onSubmit event
            type="button"
            className={`font-medium w-[14rem] py-2 px-4 text-green-500 border-[1.5px] border-green-500 rounded-md hover:bg-green-500 hover:text-white focus:outline-none ${form.length === 4 ? "hidden" : ""}`}
            onClick={addExpenseType}
          >
            Add Expense
          </button>

          {/* The button jawns */}
          <div className="mt-14 flex flex-row justify-center items-center ml-[0rem]">
            {/* Get years button */}
            <div className="relative flex items-center">
              <button
                type="button"
                className={`py-2 px-4 font-semibold rounded-lg border-[1.5px] border-gray-200 
                                            flex justify-center items-center transition-all duration-200 ease-in-out 
                                            ${
                                              isLoading1 || retrievedYears
                                                ? "w-[14rem] bg-gray-200"
                                                : "w-[18rem]"
                                            } 
                                            ${
                                              isLoading1
                                                ? ""
                                                : backendError
                                                ? "bg-gray-200 text-red-500"
                                                : retrievedYears
                                                ? "bg-gray-200"
                                                : "bg-white hover:bg-gray-200"
                                            }`}
                onClick={(event) => handleGetYears(event)}
                // Disable the button when loading or when there is a backend error or when series data was retrieved succesfully
                // disabled={!seriesInfo.length === 0 || isLoading1 || backendError}
                disabled={!isFormChanged || isLoading1 || backendError}
              >
                {!isLoading1 ? (
                  !retrievedYears ? (
                    !backendError ? (
                      "Check Available Years"
                    ) : (
                      "Backend Error"
                    )
                  ) : (
                    "Years Retrieved"
                  )
                ) : (
                  <span className="pr-2">Loading</span>
                )}
                {isLoading1 && (
                  <PulseLoader
                    className="mt-3.5"
                    speedMultiplier={0.75}
                    color="#3a3c3e"
                    size={3.5}
                  />
                )}
              </button>
              {retrievedYears && (
                <div className="ml-3">
                  <Checkmark size="29px" color="#16a836" />
                </div>
              )}
              {CheckYearsError && (
                <div className="absolute left-0 top-[3.3rem] mt-1 ml-1 text-[1.15rem] font-medium text-red-500">
                  Select an expense type
                </div>
              )}
            </div>
            {/* Create graphs button */}
            <div className="relative flex items-center ml-[2rem]">
              <button
                className="w-[14rem] py-2 px-4 font-semibold text-blue-500 border-[1.5px] border-blue-500 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none"
                onClick={handleSubmit}
              >
                Create Graphs
              </button>
              {CreateGraphsError && (
                <div className="absolute left-0 top-[3.3rem] mt-1 ml-1 text-[1.15rem] font-medium text-red-500 text-left">
                  {CreateGraphsError}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Loading Spinner and subsequent cpi trend graphs */}
      {isLoading ? (
        <div className="mt-[8rem] flex flex-col justify-center items-center">
          <PropagateLoader color="#3366CC" size={25} />
          <p className="mt-12 ml-8">Please Wait</p>
        </div>
      ) : backendError2 ? (
        <div className="text-red-600">Error occurred while fetching data.</div>
      ) : csvData ? (
        // render each graph based on the keys in the csv json data from backend
        <div className="bg-slate-100 grid grid-cols-2 gap-x-[15rem] mt-[50px]">
          {Object.keys(JSON.parse(csvData)).map((key, index) => (
            <div key={index} className="mb-[20px]">
              <PlotlyGraph
                className={""}
                jsonData={csvData}
                keyProp={key}
                title={graphTitle[index]}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

// put expense type data in .json into a form suitable for my nested dropdown
function transformOptions(jsonData) {
  return Object.keys(jsonData).map((key) => ({
    name: key,
    subOptions: jsonData[key].map((item) => ({
      name: item.item_name, // name appears in the second dropdown
      source_file: item.source_file, // source_file is what expenseType is actually set to
      item_code: item.item_code,
    })),
  }));
}

export default Project3App;

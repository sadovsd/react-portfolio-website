import { useState } from 'react';
import PlotlyGraph from './plotlyGraph';

function Form() {
    const [form, setForm] = useState({
        polynomialDegree: "",
    });

    const [csvData, setCsvData] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [backendError, setBackendError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true);

        const url = new URL('https://flask-test2.azurewebsites.net');
        url.searchParams.append('1', form.polynomialDegree); // Add the query parameter
    
        fetch(url, {
          method: 'POST' // im still confused with post vs get- both worked here...
        })
        .then(response => {
            // verify if the response status is within the range of 200-299, which typically indicates a successful response. 
            if (response.ok) { 
                // console.log('response status was succesful!!!!!:', response.text());
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

    const onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm({ ...form, [name]: value });
    }

    return (
        <form className='mt-12 mb-12' onSubmit={handleSubmit}>
            <input className='w-24 mr-8 border' name="polynomialDegree" onChange={onChange} />
            <button className='hover:font-normal' type="submit">Submit Form</button>
            {isLoading ? (
                <div>Loading...</div>
            ) : backendError ? (
                <div>Error occurred while fetching data.</div>
            ) : (
                // result && <div dangerouslySetInnerHTML={{ __html: result }} />
                // result && <img src={`data:image/png;base64,${result}`} alt="Result" />
                csvData && <PlotlyGraph csvData={csvData} /> 
            )}
        </form>

    );
}

export default Form;
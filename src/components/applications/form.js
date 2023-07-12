import { useState } from 'react';

function Form() {
    const [form, setForm] = useState({
        polynomialDegree: "",
    });

    const[result, setResult] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [backendError, setBackendError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();

        setIsLoading(true);

        //   console.log("Form submitted");
        //   console.log(form);

        // Send to Database/Send to Rest API
        const form_data = new FormData();
        // form_data.append('1', form.polynomialDegree);
        form_data.append('1', form.polynomialDegree);

        console.log('formdata...', form_data.keys)
        fetch('http://127.0.0.1:5000/results', {
            method: 'POST',
            body: form_data
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
        .then(html => {
            setResult(html);
            setIsLoading(false);
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
                result && <div dangerouslySetInnerHTML={{ __html: result }} />
            )}
        </form>

    );
}

export default Form;
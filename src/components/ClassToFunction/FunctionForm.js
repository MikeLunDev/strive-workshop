import React, { useEffect, useState } from 'react'

const FunctionForm = (props) => {

    const { label } = props

    const [submitted, setSubmitted] = useState("")
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(inputValue)
    }

    useEffect(() => {
       console.log("mounted")
    }, [])

    useEffect(() => {
       console.log("something was written in function comp")
    }, [inputValue])


    return (
        <>
            <form className="box-form" onSubmit={handleSubmit}>
                <label>
                    {label}:
                <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {submitted.length > 0 && <p>Event submitted: {submitted}</p>}
        </>
    );
}

export default FunctionForm;
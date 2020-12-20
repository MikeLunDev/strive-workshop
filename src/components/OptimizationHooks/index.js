import React from 'react';

const OptimizationHooks = () => {

    const [inputValue, setInputValue] = useState(initialState)
    const [disabled, setDisabled] = useState(false)

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return <>
        <label>
            Optimization:
            <input type="text" value={inputValue} onChange={handleChange}/>
        </label>;

    </>
}

export default OptimizationHooks;
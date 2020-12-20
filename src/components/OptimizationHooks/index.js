import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SUCCESS } from 'src/constants';

const OptimizationHooks = (props) => {

    const { type } = props
    const [inputValue, setInputValue] = useState("")
    //const [disabled, setDisabled] = useState(true)
    const [loading, setLoading] = useState(true)

    //every function should be a callback
    const handleChange = useCallback(
        (e) => {
            setInputValue(e.target.value)
        },
        [],
    )

    const renderLoading = useCallback(
        () => {
            return loading && <span>Loading the page...</span>
        },
        [loading],
    )

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    // this can be transformed into useMemo
    // useEffect(() => {
    //     if(!loading && type === SUCCESS){
    //         setDisabled(false)
    //     }
    // }, [loading, type])

    const disabled = useMemo(() => !loading && type === SUCCESS ? false : true, [loading, type])

    return <>
        <label>
            Optimization:
            <input type="text"
                placeholder={"typeHere"}
                value={inputValue}
                disabled={disabled}
                onChange={handleChange} />
        </label>
        {renderLoading()}

    </>
}

export default OptimizationHooks;
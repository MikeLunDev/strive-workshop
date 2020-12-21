import React, { useCallback, useRef, useState } from 'react';
import { useOnClickOutside } from 'src/utils';
import "./index.scss"
const CustomHook = () => {

    const [inputValue, setInputValue] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)
    const inputRef = useRef(null)
    const handleChange = useCallback(
        (e) => {
            setShowSuggestions(true)
            setInputValue(e.target.value)
        },
        [],
    )

    const handleSelect = useCallback(
        (el) => {
            setInputValue(el)
            setShowSuggestions(false)
        },
        [],
    )

    const handleBlur = useCallback(
        () => {
            console.log("blurred")
        },
        [],
    )

    useOnClickOutside(inputRef, handleBlur)

    return <div className="container" ref={inputRef}>
        <input value={inputValue} onChange={handleChange} />
        <div className={`city-suggestion-wrapper ${showSuggestions ? "" : "hidden"}`}>
            <div className="city-suggestion-container">
                <ul className={"city-list-ul"}>
                    {["test", "test2", "test3",
                        "test4", "test4"].map((el, index) => {
                            return <li key={index} onClick={() => handleSelect(el)}>{el}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
}

export default CustomHook;
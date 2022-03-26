import React, {useState} from "react";

interface InputValidator {
    validate: (val: any) => boolean;
}

const useInput = (
    validateValue: (val: any) => boolean
) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangedHandler = (e: any) => {
        setEnteredValue(e.target.value)
    };

    const touchedInputHandler = (e: any) => {
        setIsTouched(true);
    };

    const resetInput = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        enteredValue,
        hasError,
        valueIsValid,
        valueChangedHandler,
        touchedInputHandler,
        resetInput
    }
}

export default useInput;
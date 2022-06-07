import React, {useState} from "react";

interface UseInputData {
    enteredValue: string
    hasError: boolean
    valueIsValid: boolean
    valueChangedHandler: (e: any) => void
    touchedInputHandler: (e: any) => void
    resetInput: () => void
}

const useInput = (
    validateValue: (val: any) => boolean
): UseInputData => {

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
import React, {FC, useEffect} from "react";
import useInput from "../../../hooks/useInput";

const SimpleFormWithHook: FC = (): JSX.Element => {

    const {
        enteredValue: enteredName,
        hasError: nameInputHasError,
        valueIsValid: enteredNameIsValid,
        valueChangedHandler,
        touchedInputHandler,
        resetInput
    } = useInput((text: string) => text.trim() !== '');

    const {
        enteredValue: enteredEmail,
        hasError: emailInputHasError,
        valueIsValid: enteredEmailIsValid,
        valueChangedHandler: emailChangeHandler,
        touchedInputHandler: emailBlurHandler,
        resetInput: resetEmailInput
    } = useInput((email: string) => email.includes('@'));

    useEffect(() => {

    }, [enteredNameIsValid, enteredEmailIsValid]);

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const onSubmitHandler = (e: any) => {
        e.preventDefault();

        if (nameInputHasError || emailInputHasError) {
            return;
        }

        console.log(enteredName);
        resetInput();
        resetEmailInput();
    };

    const formInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    // aria-label="simple form"
    return (
        <form onSubmit={onSubmitHandler}>
            <div className={formInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={valueChangedHandler}
                    onBlur={touchedInputHandler}
                    value={enteredName}
                />
                {nameInputHasError && (<p className='error-text'>Please Enter A Valid Name</p>)}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>Email</label>
                <input
                    type='text'
                    id='email'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (<p className='error-text'>Please Enter A Valid Email</p>)}
            </div>
            <div className="form-actions">
                <button
                    disabled={!formIsValid}
                    style={{backgroundColor: !formIsValid ? 'gray' : 'MediumVioletRed'}}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default SimpleFormWithHook;
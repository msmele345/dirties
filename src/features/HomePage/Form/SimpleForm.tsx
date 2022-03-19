import React, {useState, useRef, FC} from "react";

interface FormProps {
    labelText: string
    options?: object
}

const SimpleForm: FC<FormProps> = ({labelText}): JSX.Element => {
    const [text, setText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
    const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

    const enteredTextIsValid = text.trim() !== ''
    const enteredEmailIsValid = emailText.includes('@') && emailText.trim() !== '';
    const invalidEntry = !enteredTextIsValid && enteredNameIsTouched;
    const invalidEmailEntry = !enteredEmailIsValid && enteredEmailIsTouched;

    let formIsValid = false;

    const inputChangeHandler = (e: any) => {
        setText(e.target.value)
    };

    const emailInputChangeHandler = (e: any): void => {
        setEmailText(e.target.value);
    }

    const emailTextInputBlurHandler = (e: any) => {
        setEnteredEmailIsTouched(true);
    };

    const textInputBlurHandler = (e: any) => {
        setEnteredNameIsTouched(true);
    };

    const onSubmitHandler = (e: any) => {
        e.preventDefault();

        if (!enteredTextIsValid || !enteredEmailIsValid) {
            return;
        }

        console.log(text);
        setText('');
        setEmailText('')
        setEnteredNameIsTouched(false);
        setEnteredEmailIsTouched(false);
    };

    if(!invalidEntry && !invalidEmailEntry) {
        formIsValid = true;
    }


    const formInputClasses = invalidEntry ? 'form-control invalid' : 'form-control';
    const emailInputClasses = invalidEmailEntry ? 'form-control invalid' : 'form-control';

    // aria-label="simple form"
    return (
        <form onSubmit={onSubmitHandler}>
            <div className={formInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    type='text'
                    id='name'
                    onChange={inputChangeHandler}
                    onBlur={textInputBlurHandler}
                    value={text}
                />
                {invalidEntry && (<p className='error-text'>Please Enter A Valid Name</p>)}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='name'>Email</label>
                <input
                    type='text'
                    id='email'
                    onChange={emailInputChangeHandler}
                    onBlur={emailTextInputBlurHandler}
                    value={emailText}
                />
                {invalidEmailEntry && (<p className='error-text'>Please Enter A Valid Email</p>)}
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

export default SimpleForm;

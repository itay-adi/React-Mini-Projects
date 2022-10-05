import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  
  const enteredNameIsValid = enteredEmail.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && isNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && isEmailTouched;

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  /*********************************************/
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  /*********************************************/

  const nameBlurHandler = (event) => {
    setIsNameTouched(true);
  };

  const emailBlurHandler = (event) => {
    setIsEmailTouched(true);
  };

  /*********************************************/

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setIsNameTouched(true);

    if(!enteredNameIsValid){
      return;
    }

    console.log(enteredName)
    setEnteredName('');
    setIsNameTouched(false);

    setEnteredEmail('');
    setIsEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid ? 
                           'form-control invalid' : 
                           'form-control';

  const emailInputClasses = emailInputIsInvalid ? 
                            'form-control invalid' : 
                            'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>

      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your eMail</label>
        <input
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className="error-text">Please enter a valid email</p>}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

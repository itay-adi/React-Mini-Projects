import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setIsNameTouched(true);

    if(enteredName.trim() === ''){
      setIsNameValid(false);
      return;
    }

    
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setIsNameTouched(true);

    if(enteredName.trim() === ''){
      setIsNameValid(false);
      return;
    }

    else{
      setIsNameValid(true);
      console.log(enteredName)
      setEnteredName('');
    }
  };

  const nameInputIsInvalid = !isNameValid && isNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

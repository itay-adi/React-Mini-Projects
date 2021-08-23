import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim().length === 0){
      setIsNameValid(false);
    }

    else{
      setIsNameValid(true);
      console.log(enteredName)
      setEnteredName('');
    }
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button disabled={isNameValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface ReasonForSparingProps { 
	reasonForSparing: string;
	onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reasonForSparing, onChangeReasonForSparing }) =>  {

  const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

  const validate : (value : string) => string | undefined = (value) => {
    const regex = /^.{17,153}$/;
    if (regex.test(value) === false) {
      return "Error: Reason for Sparing must be between 17 and 153 characters.";
    }
  }

  return (
    <div className="container">
        <label>
        Reason for Sparing
        <textarea
          value={reasonForSparing}
          onChange={(e) => {
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage);
            onChangeReasonForSparing(e);
            }
          } 
          placeholder="Enter a reason for sparing"
          className="input"
        />
        </label>
        <ErrorMessage errorMessage={errorMessage}/>
    </div>
  );
};

export default ReasonForSparing;
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface NumberOfBeingsProps { 
	numberOfBeings: string;
	onChangeNumberOfBeings: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({ numberOfBeings, onChangeNumberOfBeings }) =>  {

  const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

  const validate : (value : string) => string | undefined = (value) => {
    const regex = /^[1-9]{1}[0-9]{9,}$/;
    if (regex.test(value) === false) {
      return "Error: Number of Beings must be at least 1000000000 (one billion).";
    }
  }

  return (
    <>
        <label htmlFor='numberOfBeings'>Number of Beings</label>
        <input 
              id='numberOfBeings' 
              type='text' 
              placeholder="Enter number of beings" 
              value={numberOfBeings} 
              onChange={(e) => {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                onChangeNumberOfBeings(e);
                }
              } 
            />
            <ErrorMessage errorMessage={errorMessage}/>
    </> );
};

export default NumberOfBeings;
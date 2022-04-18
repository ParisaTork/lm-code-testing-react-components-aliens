import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface WhatIsTwoPlusTwoProps { 
	whatIsTwoPlusTwo: string;
	onChangeWhatIsTwoPlusTwo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WhatIsTwoPlusTwo: React.FC<WhatIsTwoPlusTwoProps> = ({ whatIsTwoPlusTwo, onChangeWhatIsTwoPlusTwo }) =>  {

  const [ errorMessage, setErrorMessage ] = useState<string | undefined>('');

  const validate : (value : string) => string | undefined = (value) => {
    if (value === 'Not 4') {
      return "Error: 2 + 2 is 4.";
    }
  }

  return (
    <>
        <label htmlFor='whatIsTwoPlusTwo'>What is 2 + 2?</label>
        <select 
                data-testid="maths-question" 
                value={whatIsTwoPlusTwo}               
                onChange={(e) => {
                const errorMessage = validate(e.target.value);
                setErrorMessage(errorMessage);
                onChangeWhatIsTwoPlusTwo(e);
                }}>
        <option id="4" value="4">4</option>
        <option id="Not 4" value="Not 4">Not 4</option>
        </select>
        <ErrorMessage errorMessage={errorMessage}/>
    </> );
};

export default WhatIsTwoPlusTwo;
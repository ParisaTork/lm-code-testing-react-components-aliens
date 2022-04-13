interface WhatIsTwoPlusTwoProps { 
	whatIsTwoPlusTwo: string;
	onChangeWhatIsTwoPlusTwo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WhatIsTwoPlusTwo: React.FC<WhatIsTwoPlusTwoProps> = ({ whatIsTwoPlusTwo, onChangeWhatIsTwoPlusTwo }) =>  {

  return (
    <>
        <label htmlFor='whatIsTwoPlusTwo'>What is 2 + 2?</label>
        <select data-testid="maths-question" value={whatIsTwoPlusTwo} onChange={onChangeWhatIsTwoPlusTwo}>
        <option id="4" value="4">4</option>
        <option id="Not 4" value="Not 4">Not 4</option>
        </select>
    </> );
};

export default WhatIsTwoPlusTwo;
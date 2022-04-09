interface WhatIsTwoPlusTwoProps { 
	whatIsTwoPlusTwo: string;
	onChangeWhatIsTwoPlusTwo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const WhatIsTwoPlusTwo: React.FC<WhatIsTwoPlusTwoProps> = ({ whatIsTwoPlusTwo, onChangeWhatIsTwoPlusTwo }) =>  {

  return (
    <>
        <label htmlFor='whatIsTwoPlusTwo'>What is 2 + 2?</label>
        <select value={whatIsTwoPlusTwo} onChange={onChangeWhatIsTwoPlusTwo}>
        <option value="4">4</option>
        <option value="Not 4">Not 4</option>
        </select>
    </> );
};

export default WhatIsTwoPlusTwo;
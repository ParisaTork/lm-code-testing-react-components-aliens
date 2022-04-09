import { useState } from 'react';
import W12MHeader from '../W12MHeader/W12MHeader'
import SpeciesName from '../SpeciesName/SpeciesName';
import PlanetName from '../PlanetName/PlanetName';
import NumberOfBeings from '../NumberOfBeings/NumberOfBeings';
import WhatIsTwoPlusTwo from '../WhatIsTwoPlusTwo/WhatIsTwoPlusTwo';
import ReasonForSparing from '../ReasonForSparing/ReasonForSparing';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState<string>('');
	const [planetName, setPlanetName] = useState<string>('');
	const [numberOfBeings, setNumberOfBeings] = useState<number>(0);
	const [answer, setAnswer] = useState<string>('4');
	const [reasonForSparing, setReasonForSparing] = useState<string>('');
	const [form, setForm] = useState<string>('');
	let isSubmitted : boolean = false;

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		alert("Form submitted - may your planet be spared!");
		setForm(`Your answers were: ${speciesName}, ${planetName}, ${numberOfBeings}, ${answer}, ${reasonForSparing}. Your planet will not be spared! Resistance is useless!`);
		isSubmitted = true;
		console.log(`This form has been submitted: ${isSubmitted}`);
	  }

	return (
		<div>
		<W12MHeader />
		<form className='w12MForm' onSubmit={submitForm}>
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(event : any) => setSpeciesName(event.target.value)}/>
			<PlanetName planetName={planetName} onChangePlanetName={(event : any) => setPlanetName(event.target.value)}/>
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(event : any) => setNumberOfBeings(event.target.value)}/>
			<WhatIsTwoPlusTwo whatIsTwoPlusTwo={answer} onChangeWhatIsTwoPlusTwo={(event : any) => setAnswer(event.target.value)}/>
			<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(event : any) => setReasonForSparing(event.target.value)}/>
			<button type="submit" className="btn">Submit</button>
		</form>
		<section>
			<h1>{form}</h1>
		</section>
		</div>
	);
};

export default W12MForm;

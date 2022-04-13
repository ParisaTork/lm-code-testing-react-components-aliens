import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import W12MForm from './W12MForm';
import userEvent from '@testing-library/user-event';
import {cleanup, render, screen } from '@testing-library/react';
import SpeciesName from '../SpeciesName/SpeciesName';
import PlanetName from '../PlanetName/PlanetName';
import NumberOfBeings from '../NumberOfBeings/NumberOfBeings';
import ReasonForSparing from '../ReasonForSparing/ReasonForSparing';
import WhatIsTwoPlusTwo from '../WhatIsTwoPlusTwo/WhatIsTwoPlusTwo';
import W12MHeader from '../W12MHeader/W12MHeader';
configure({ adapter: new Adapter() });


afterEach(() => {
	cleanup();
	jest.clearAllMocks();
})

describe("W12MForm Tests", () => {
	test('renders form element', () => {
		render(<W12MForm />);
		const form = screen.getByTestId('form');
		expect(form).toHaveClass('w12MForm');
	});

	test('should render the fields', () => {
        render(<W12MForm />);
        expect(screen.getByRole("textbox", { name: /Species Name/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /Planet Name/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /Number of Beings/i })).toBeInTheDocument();
		expect(screen.getByRole("textbox", { name: /Reason for Sparing/i })).toBeInTheDocument();
		expect(screen.getByRole("option", { name: /^4$/ })).toBeInTheDocument();
		expect(screen.getByRole("option", { name: /Not 4/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
    });
	
	// 4. Does the submit button call its handler function and pass it the correct parameters?
	test('submit button calls handler function', async () => {
		const mockOnSubmit = jest.fn();
		const formProps = {
			saveData: mockOnSubmit
		}
		render(<W12MForm {...formProps} />);
		const submitButton = screen.getByTestId('submit');
		await userEvent.click(submitButton);
		expect(mockOnSubmit).toHaveBeenCalledTimes(1);
	});

	// 4. Does the submit button call its handler function and pass it the correct parameters?
	test('submit button passes handler function the correct parameters', async () => {
		const mockOnSubmit = jest.fn();
		const formProps = {
			saveData: mockOnSubmit
		}
		render(<W12MForm {...formProps} />);
		const speciesNameInput = screen.getByRole("textbox", { name: /Species Name/i });
		const planetNameInput = screen.getByRole("textbox", { name: /Planet Name/i });
		const numberOfBeingsInput = screen.getByRole("textbox", { name: /Number of Beings/i });
		const reasonForSparingInput = screen.getByRole("textbox", { name: /Reason for Sparing/i });
		const answer = screen.getByTestId('maths-question');
		const submitButton = screen.getByTestId('submit');
		await userEvent.type(speciesNameInput, 'dog');
		await userEvent.type(planetNameInput, 'earth');
		await userEvent.type(numberOfBeingsInput, '30');
		await userEvent.type(reasonForSparingInput, 'no reason');
		await userEvent.selectOptions(answer, 'Not 4');
		await userEvent.click(submitButton);
		expect(mockOnSubmit).toHaveBeenCalledWith({
			speciesName: 'dog',
			planetName: 'earth',
			numberOfBeings: '30',
			reasonForSparing: 'no reason',
			answer: 'Not 4'
		});
	});
});	

describe('W12MForm Tests - Enzyme', () => {
  const wrapper = shallow(<W12MForm />);
  
  test('Contains W12MHeader component', () => {
    expect(wrapper.find(W12MHeader).length).toBe(1)
  })
  
  test('Contains SpeciesName component', () => {
    expect(wrapper.find(SpeciesName).length).toBe(1)
  })
  
  test('Contains PlanetName component', () => {
    expect(wrapper.find(PlanetName).length).toBe(1)
  })
  
  test('Contains NumberOfBeings component', () => {
    expect(wrapper.find(NumberOfBeings).length).toBe(1)
  })
  
  test('Contains WhatIsTwoPlusTwo component', () => {
    expect(wrapper.find(WhatIsTwoPlusTwo).length).toBe(1)
  })
  
  test('Contains ReasonForSparing component', () => {
    expect(wrapper.find(ReasonForSparing).length).toBe(1)
  })
  
  test('W12MForm includes html elements', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('p').length).toEqual(1);
  });
});
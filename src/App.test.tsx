import { render, screen } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import W12MForm from '../src/components/W12MForm/W12MForm';
configure({ adapter: new Adapter() });

test('renders form title', () => {
	render(<App />);
	const formTitle = screen.getByText(
		/W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION/i
	);
	expect(formTitle).toBeInTheDocument();
});

describe('App Tests - Enzyme', () => {
	const wrapper = shallow(<App />);
	
	test('Contains W12MForm component', () => {
	  expect(wrapper.find(W12MForm).length).toBe(1)
	})
	
	test('App includes html elements', () => {
	  expect(wrapper.find('h1').length).toEqual(1);
	});
  
	test('App includes correct html innerText', () => {
	  expect(wrapper.find('h1').text()).toEqual("W-12-M :- APPLICATION TO SPARE PLANET FROM DESTRUCTION");
	}); 
  });

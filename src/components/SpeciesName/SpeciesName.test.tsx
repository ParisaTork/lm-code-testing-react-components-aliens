import { render, screen, cleanup } from '@testing-library/react';
import SpeciesName from './SpeciesName';
import userEvent from '@testing-library/user-event';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

afterEach(() => {
    cleanup();
    jest.clearAllMocks()
  })

describe("Species Name Tests", () => {
    // 1. Does the component render?
    test('if species name component renders', () => {
        render(<SpeciesName />);
        const speciesNameText = screen.getByText(/Species Name/i);
        expect(speciesNameText).toBeInTheDocument();
    });

    test('if species name label is present', () => {
        render(<SpeciesName />);
        const speciesNameLabel = screen.getByLabelText(/Species Name/i);
        expect(speciesNameLabel).toBeInTheDocument();
    });

    test('if species name placeholder text is present', () => {
        render(<SpeciesName />);
        const speciesNamePlaceholder = screen.getByPlaceholderText(/Enter a species name/i);
        expect(speciesNamePlaceholder).toBeInTheDocument();
    });

    // 2. If we give input fields certain values through props, do they display that value?
    test('if input fields display values if passed those values via props', () => {
        const mockOnChangeSpeciesName = jest.fn();
        const speciesNameProps = {
            speciesName: 'human',
            onChangeSpeciesName: mockOnChangeSpeciesName
        }
        render(<SpeciesName {...speciesNameProps} />);
        const speciesNameValues = screen.getByDisplayValue('human');
        expect(speciesNameValues).toBeInTheDocument();
    });

    // 3. Does each input field call its onChange function and pass it the correct parameters?
    test('onChange is called', async () => {
        const mockOnChangeSpeciesName = jest.fn();
        const speciesNameProps = {
            speciesName: 'human',
            onChangeSpeciesName: mockOnChangeSpeciesName
        }
        render(<SpeciesName {...speciesNameProps} />);
        const speciesNameInput = screen.getByPlaceholderText(/Enter a species name/i);
        await userEvent.type(speciesNameInput, 'dog');
        expect(mockOnChangeSpeciesName).toHaveBeenCalledTimes(3);
    });

    // 3. Does each input field call its onChange function and pass it the correct parameters?
    test('input field passes onChange the correct parameters', async () => {
        const mockOnChangeSpeciesName = jest.fn();
        const speciesNameProps = {
            onChangeSpeciesName: mockOnChangeSpeciesName
        }
        render(<SpeciesName {...speciesNameProps} />);
        const speciesNameInput = screen.getByPlaceholderText(/Enter a species name/i);
        await userEvent.type(speciesNameInput, 'dog');
        expect(speciesNameInput.value).toBe('dog');
    });

    test('test for no error message when valid data is entered', async () => {
        const mockOnChangeSpeciesName = jest.fn();
        const speciesNameProps = {
            onChangeSpeciesName: mockOnChangeSpeciesName
        }
        render(<SpeciesName {...speciesNameProps} />);
        const speciesNameInput = screen.getByPlaceholderText(/Enter a species name/i);
        await userEvent.type(speciesNameInput, 'dog');
        expect(screen.queryByText(/Error: Species Name must be between 3 and 23 characters and can only contain letters./i)).not.toBeInTheDocument();
    });

    test('test for error message when invalid data is entered', async () => {
        const mockOnChangeSpeciesName = jest.fn();
        const speciesNameProps = {
            onChangeSpeciesName: mockOnChangeSpeciesName
        }
        render(<SpeciesName {...speciesNameProps} />);
        const speciesNameInput = screen.getByPlaceholderText(/Enter a species name/i);
        await userEvent.type(speciesNameInput, 'd');
        expect(screen.queryByText(/Error: Species Name must be between 3 and 23 characters and can only contain letters./i)).toBeInTheDocument();
    });
});

describe('Species Name Tests - Enzyme', () => {
    const mockOnChangeSpeciesName = jest.fn();
    const speciesNameProps = {
        speciesName: 'human',
        onChangeSpeciesName: mockOnChangeSpeciesName
    }
    
    const wrapper = shallow(<SpeciesName {...speciesNameProps} />);
    
    test('SpeciesName includes html elements', () => {
        expect(wrapper.find('label').length).toEqual(1);
        expect(wrapper.find('input').length).toEqual(1);
    });
    
    test('SpeciesName includes correct html innerText', () => {
        expect(wrapper.find('label').text()).toEqual("Species Name");
    }); 
});


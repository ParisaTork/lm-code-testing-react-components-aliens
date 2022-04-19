import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberOfBeings from '../NumberOfBeings/NumberOfBeings'
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
configure({ adapter: new Adapter() });

afterEach(() => {
    cleanup();
    jest.clearAllMocks()
  }) 

describe('NumberOfBeings Tests', () => {
  // 1. Does the component render?
  test('if NumberOfBeings component renders', () => {
    const mockOnChangeNumberOfBeings = jest.fn();
    const numberOfBeingsProps = {
      numberOfBeings: '',
      onChangeNumberOfBeings: mockOnChangeNumberOfBeings
    }
    const numberOfBeings = shallow(<NumberOfBeings {...numberOfBeingsProps} />);
    expect(numberOfBeings.exists()).toBe(true);
  });

  // 2. If we give input fields certain values through props, do they display that value?
  test('if input fields display values if passed those values via props', () => {
    const mockOnChangeNumberOfBeings = jest.fn();
    const numberOfBeingsProps = {
      numberOfBeings: '1',
      onChangeNumberOfBeings: mockOnChangeNumberOfBeings
    }
    const numberOfBeings = shallow(<NumberOfBeings {...numberOfBeingsProps} />);
    expect(numberOfBeings.find('input').prop('value')).toBe('1');
  });

  // 3. Does each input field call its onChange function and pass it the correct parameters?
  test('onChange is called', async () => {
    const mockOnChangeNumberOfBeings = jest.fn();
    const numberOfBeingsProps = {
      numberOfBeings: '',
      onChangeNumberOfBeings: mockOnChangeNumberOfBeings
    }
    render(<NumberOfBeings {...numberOfBeingsProps} />);
    const numberOfBeingsInput = screen.getByPlaceholderText(/Enter number of beings/i);
    await userEvent.type(numberOfBeingsInput, '1');
    expect(mockOnChangeNumberOfBeings).toHaveBeenCalledTimes(1);
  });

  test('test for no error message when valid data is entered', async () => {
    const mockOnChangeNumberOfBeings = jest.fn();
    const numberOfBeingsProps = {
      numberOfBeings: '',
      onChangeNumberOfBeings: mockOnChangeNumberOfBeings
    }
    render(<NumberOfBeings {...numberOfBeingsProps} />);
    const numberOfBeingsInput = screen.getByPlaceholderText(/Enter number of beings/i);
    await userEvent.type(numberOfBeingsInput, '1000000000');
    expect(screen.queryByText(/Error: Number of Beings must be at least 1000000000 (one billion)./i)).toBeNull();
  });
});

describe('Number Of Beings Tests - Enzyme', () => {
    let mockonChangeNumberOfBeings = jest.fn();
    let NumberOfBeingsProps = {"numberOfBeings":"","onChangeNumberOfBeings":"mockonChangeNumberOfBeings"};
    
    const wrapper = shallow(<NumberOfBeings {...NumberOfBeingsProps} />);
    
    test('NumberOfBeings includes html elements', () => {
      expect(wrapper.find('label').length).toEqual(1);
      expect(wrapper.find('input').length).toEqual(1);
    });
  
    test('NumberOfBeings includes correct html innerText', () => {
      expect(wrapper.find('label').text()).toEqual("Number of Beings");
    }); 
  });
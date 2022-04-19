import { configure, shallow } from 'enzyme';
import { render, screen, cleanup } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import PlanetName from '../PlanetName/PlanetName';
import userEvent from '@testing-library/user-event';
configure({ adapter: new Adapter() });

afterEach(() => {
  cleanup();
  jest.clearAllMocks()
})

describe('Planet Name Tests', () => {
    // 1. Does the component render?
    test('if planet name component renders', () => {
        const mockOnChangePlanetName = jest.fn();
        const planetNameProps = {
            planetName: '',
            onChangePlanetName: mockOnChangePlanetName
        }
        const planetName = shallow(<PlanetName {...planetNameProps} />);
        expect(planetName.exists()).toBe(true);
    });

    // 2. If we give input fields certain values through props, do they display that value?
    test('if input fields display values if passed those values via props', () => {
        const mockOnChangePlanetName = jest.fn();
        const planetNameProps = {
            planetName: 'earth',
            onChangePlanetName: mockOnChangePlanetName
        }
        const planetName = shallow(<PlanetName {...planetNameProps} />);
        expect(planetName.find('input').prop('value')).toBe('earth');
    });

    
    // 3. Does each input field call its onChange function and pass it the correct parameters?
    test('onChange is called', async () => {
      const mockOnChangePlanetName = jest.fn();
      const planetNameProps = {
        planetName: '',
        onChangePlanetName: mockOnChangePlanetName
      }
      render(<PlanetName {...planetNameProps} />);
      const planetNameInput = screen.getByPlaceholderText(/Enter a planet name/i);
      await userEvent.type(planetNameInput, 'earth');
      expect(mockOnChangePlanetName).toHaveBeenCalledTimes(5);
    });

  // 3. Does each input field call its onChange function and pass it the correct parameters?
  test('input field passes onChange the correct parameters', async () => {
    const mockOnChangePlanetName = jest.fn();
    const planetNameProps = {
      onChangePlanetName: mockOnChangePlanetName
    }
    render(<PlanetName {...planetNameProps} />);
    const planetNameInput = screen.getByPlaceholderText(/Enter a planet name/i);
    await userEvent.type(planetNameInput, 'earth');
    expect(planetNameInput.value).toBe('earth');
  });


  test('test for no error message when valid data is entered', async () => {
    const mockOnChangePlanetName = jest.fn();
    const planetNameProps = {
      onChangePlanetName: mockOnChangePlanetName
    }
    render(<PlanetName {...planetNameProps} />);
    const planetNameInput = screen.getByPlaceholderText(/Enter a planet name/i);
    await userEvent.type(planetNameInput, 'earth');
    expect(screen.queryByText(/Error: Planet Name must be between 2 and 49 characters and can only contain letters and numbers./i)).not.toBeInTheDocument();
});

test('test for error message when invalid data is entered', async () => {
    const mockOnChangePlanetName = jest.fn();
    const planetNameProps = {
      onChangePlanetName: mockOnChangePlanetName
    }
    render(<PlanetName {...planetNameProps} />);
    const planetNameInput = screen.getByPlaceholderText(/Enter a planet name/i);
    await userEvent.type(planetNameInput, 'd');
    expect(screen.queryByText(/Error: Planet Name must be between 2 and 49 characters and can only contain letters and numbers./i)).toBeInTheDocument();
  });
});

describe('Planet Name Tests - Enzyme', () => {
    let mockonChangePlanetName = jest.fn();
    let PlanetNameProps = {"planetName":"","onChangePlanetName":"mockonChangePlanetName"};
    
    const wrapper = shallow(<PlanetName {...PlanetNameProps} />);
    
    test('PlanetName includes html elements', () => {
      expect(wrapper.find('label').length).toEqual(1);
      expect(wrapper.find('input').length).toEqual(1);
    });
  
    test('PlanetName includes correct html innerText', () => {
      expect(wrapper.find('label').text()).toEqual("Planet Name");
    }); 
  });
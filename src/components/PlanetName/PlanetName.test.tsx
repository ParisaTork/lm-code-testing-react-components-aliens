import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlanetName from '../PlanetName/PlanetName';
configure({ adapter: new Adapter() });

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
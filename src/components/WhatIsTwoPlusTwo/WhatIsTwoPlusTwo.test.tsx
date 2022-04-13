import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WhatIsTwoPlusTwo from '../WhatIsTwoPlusTwo/WhatIsTwoPlusTwo';
configure({ adapter: new Adapter() });

describe('WhatIsTwoPlusTwo Tests - Enzyme', () => {
    let mockonChangeWhatIsTwoPlusTwo = jest.fn();
    let WhatIsTwoPlusTwoProps = {"whatIsTwoPlusTwo":"4","onChangeWhatIsTwoPlusTwo":"mockonChangeWhatIsTwoPlusTwo"};
    
    const wrapper = shallow(<WhatIsTwoPlusTwo {...WhatIsTwoPlusTwoProps} />);
    
    test('WhatIsTwoPlusTwo includes html elements', () => {
      expect(wrapper.find('label').length).toEqual(1);
      expect(wrapper.find('select').length).toEqual(1);
      expect(wrapper.find('option').length).toEqual(2);
    });
  
    test('WhatIsTwoPlusTwo includes correct html innerText', () => {
      expect(wrapper.find('label').text()).toEqual("What is 2 + 2?");
      expect(wrapper.find('select').text()).toEqual("4Not 4");
    }); 
  });
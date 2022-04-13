import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReasonForSparing from '../ReasonForSparing/ReasonForSparing';
configure({ adapter: new Adapter() });

describe('Reason For Sparing Tests - Enzyme', () => {
    let mockonChangeReasonForSparing = jest.fn();
    let ReasonForSparingProps = {"reasonForSparing":"","onChangeReasonForSparing":"mockonChangeReasonForSparing"};
    
    const wrapper = shallow(<ReasonForSparing {...ReasonForSparingProps} />);
    
    test('Reason For Sparing includes html elements', () => {
      expect(wrapper.find('div').length).toEqual(1);
      expect(wrapper.find('label').length).toEqual(1);
      expect(wrapper.find('textarea').length).toEqual(1);
    });
  
    test('Reason For Sparing includes correct html innerText', () => {
      expect(wrapper.find('label').text()).toEqual("Reason for Sparing");
    }); 
  });
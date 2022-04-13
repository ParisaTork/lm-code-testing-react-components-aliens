import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberOfBeings from '../NumberOfBeings/NumberOfBeings'
configure({ adapter: new Adapter() });

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
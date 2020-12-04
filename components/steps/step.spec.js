import Step from './index'
import { mount } from 'enzyme';

const mockStep = [{ step: 1 }]

describe('Step Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <Step steps={mockStep}>
        {(step, index) => {
          return (
            <p key={index}>{index}</p>
          )
        }}
      </Step>
    );

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render any children', () => {
    const wrapper = mount(
      <Step steps={mockStep}>
        {(step, index) => {
          return (
            <p key={index}>{index}</p>)
        }}
      </Step>
    );

    const h2Wrapper = mount(
      <Step steps={mockStep}>
        {(step, index) => {
          return (
            <h2 key={index}>{index}</h2>)
        }}
      </Step>
    );

    expect(wrapper.find('p')).toHaveLength(1);
    expect(h2Wrapper.find('h2')).toHaveLength(1);
  });

});
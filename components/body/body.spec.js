import Body from './index'
import { mount } from 'enzyme';

describe('Article Body Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <Body>
        <p>Hi</p>
      </Body>
    );

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = mount(
      <Body>
        <p>Hi</p>
      </Body>
    );

    expect(wrapper.find('p')).toHaveLength(1);
  });
});
import Header from './index'
import { mount } from 'enzyme';

const author = {
  screenName : 'bob'
}

describe('Header Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <Header author={author} title="rocks" />
    );

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(1);

  });

  it('should render a title', () => {
    const wrapper = mount(
      <Header author={author} title="rocks" />
    );

    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should render an author', () => {
    const wrapper = mount(
      <Header author={author} title="rocks" />
    );

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
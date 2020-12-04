import StepBody from './body'
import { mount, render } from 'enzyme';

const stepProps = {
  body: '<h1>test</h1>'
}

describe('Step Body Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <StepBody body={stepProps.body} />
    );

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should dangerouslySetInnerHTML', () => {
    const wrapper = render(
      <StepBody body={stepProps.body} />
    );

    expect(wrapper.html() === `<h1>test</h1>`).toBeTruthy();
  });
});
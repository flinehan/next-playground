import Video from './index'
import { mount,render } from 'enzyme';

const mockFile = {
  embedHtmlCode: `<h1>test</h1>`
}

describe('Video Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <Video file={mockFile} />
    );

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should dangerouslySetInnerHTML', () => {
    const wrapper = render(
      <Video file={mockFile} />
    );

    expect(wrapper.html() === `<h1>test</h1>`).toBeTruthy();
  });

});
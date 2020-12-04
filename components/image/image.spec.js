import Image from './index'
import { mount } from 'enzyme';

const imageProps = {
  downloadUrl: 'www'
}

describe('Image Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
     <Image file={imageProps} />
    );

    expect(wrapper.find('img')).toHaveLength(1);
  });

});
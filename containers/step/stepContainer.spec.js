import StepContainer, {isIntro, getFriendlyStepIndex} from './index'
import { mount } from 'enzyme';

const mockedStep = {
  "id": "1",
  "url": "foo",
  "showUrl": "foo/",
  "title": "foo",
  "body": "<h1>test</h1>",
  "stepIndex": 0,
  "wordCount": 1,
  "files": []
}

describe('StepContainer Component', () => {
  it('should render without crashing', () => {
    const wrapper = mount(
      <StepContainer step={mockedStep}/>
    );

    expect(wrapper.find('div')).toHaveLength(2);
  });

  it('should know if the step is an intro block', () => {
    const shouldIntro = isIntro(mockedStep.stepIndex)
    const notIntro = isIntro(1)

    expect(shouldIntro).toBeTruthy()
    expect(notIntro).toBeFalsy()
  });

  it('should use a "friendly" step index for the id', () => {
    const into = getFriendlyStepIndex(mockedStep.stepIndex)
    const notIntro = getFriendlyStepIndex(1)

    expect(into === 'intro').toBeTruthy()
    expect(notIntro  === 'step-1' ).toBeTruthy()
  });

});
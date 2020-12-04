import MediaContainer from '../media'
import StepBody from '../../components/steps/body'

export const getFriendlyStepIndex = function getFriendlyStepIndex(stepIndex) {
  if (isIntro(stepIndex)) {
    return 'intro'
  }

  return `step-${stepIndex}`
}

export const isIntro = function isIntro(stepIndex) {
  return stepIndex === 0
}

export default function StepContainer({ step }) {
  const { id, url, showUrl, title, body, stepIndex, files } = step
  return (
    <section id={getFriendlyStepIndex(stepIndex)} className="step">
      <h2 className="step__title">{title}</h2>
      {/* todo add autho block */}
      {isIntro(stepIndex) ? null : null}

      <MediaContainer files={files} />
      <StepBody body={body} />

    </section>
  )
}
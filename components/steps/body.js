export default function StepBody({ body }) {

  // U+1F62C
  return (
    <div className="step__body"
      dangerouslySetInnerHTML={{
        __html: body
      }} />
  )
}
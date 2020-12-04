export default function StepBody({body}) {

  return (
    <div className="step__body"   dangerouslySetInnerHTML={{
      __html: body
    }}></div>
  )
}
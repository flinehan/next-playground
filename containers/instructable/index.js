import Head from 'next/head'
import Header from '../../components/header'
import Body from '../../components/body'
import Steps from '../../components/steps'
import StepContainer from '../step'
import CommentsContainer from '../comments'

export default function InstructableContainer({ instructableModel, comments = [] }) {
  const { title, steps, author } = instructableModel

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${title} - ${steps[0].body}`} />
      </Head>

      <Header author={author}
        title={title}
      />

      <Body>
        <Steps steps={steps}>
          {(step, index) => {
            return <StepContainer step={step} key={step.id} />
          }}
        </Steps>
        <CommentsContainer comments={comments} />
      </Body>


    </div>
  )
}
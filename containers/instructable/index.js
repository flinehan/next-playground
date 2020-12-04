import Head from 'next/head'

export default function Instructable({instructableModel}) {
  const {title, steps} = instructableModel
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`${title} - ${steps[0].body}`}/>
      </Head>
    </div>
  )
}
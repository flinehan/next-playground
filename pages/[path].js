import { useRouter } from 'next/router'
import fetchInstructable from '../services/fetchInstructable'
import InstructableContainer from '../containers/instructable'
import Error from 'next/error';

// This function gets called at build time
export async function getStaticPaths() {
  return { paths:[], fallback: true }
}

export async function getStaticProps({params}) {
  const instructableModel = await fetchInstructable(params.path);

  return { props: { instructableModel } };
}

export default function InstructablePath({instructableModel}) {
  const router = useRouter()
  const query = router.query

  if(!instructableModel){
    return(
      <Error statusCode={404} title="This instructable could not be found" />
    )
  }

  return (
    <InstructableContainer instructableModel={instructableModel}/>
  )
}

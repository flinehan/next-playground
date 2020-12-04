import fetchInstructable from '../services/fetchInstructable'
import fetchComments from '../services/fetchComments'

import InstructableContainer from '../containers/instructable'
import Error from 'next/error';

/**
 * This function gets called at build time
 * in theory we could set this to preload 3D-Printed-LED-Mood-Lamp or other routes then things would be very fast. 
 * But i wanted to leave the dynamic routing in place.
 */
export async function getStaticPaths() {
  return { paths:[], fallback: true }
}

export async function getStaticProps({params}) {
  const instructableModel = await fetchInstructable(params.path);
  const comments = await fetchComments(instructableModel.id)

  return { props: { instructableModel, comments: comments.comments } };
}

export default function InstructablePath({instructableModel, comments}) {

  if(!instructableModel){
    return(
      <Error statusCode={404} title="This instructable could not be found" />
    )
  }

  return (
    <InstructableContainer instructableModel={instructableModel} comments={comments}/>
  )
}

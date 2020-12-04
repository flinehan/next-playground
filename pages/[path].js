import { useRouter } from 'next/router'
import fetchInstructable from '../services/fetchInstructable'

// This function gets called at build time
export async function getStaticPaths() {
  return { paths:[], fallback: true }
}

export async function getStaticProps({params}) {
  const instructableModel = await fetchInstructable(params.path);

  return { props: { instructableModel } };
}

export default function Instructable({instructableModel}) {
  const router = useRouter()
  const query = router.query

  return (
    <div>
      {query.path}
      document:
      {instructableModel.id}
    </div>
  )
}

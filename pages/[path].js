import { useRouter } from 'next/router'

export async function getStaticProps() {
  const tweet = await fetchTweetAst('1249937011068129280');

  return { props: { tweet } };
}

export default function Instructable() {
  const router = useRouter()
  const query = router.query


  return (
    <div className={styles.container}>
      {query}
    </div>
  )
}

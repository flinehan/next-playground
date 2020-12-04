
export default async function fetchComments(instructableId){

  const result = await fetch(`https://www.instructables.com/json-api/searchComments?IMadeIt=true&instructableId=${instructableId}`)

  if (result.ok){
    return result.json()
  }
  
  if (result.status === 404) {
    return null
  }

  return null
}
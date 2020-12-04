
export default async function fetchInstructable(path){
  const result = await fetch(`https://www.instructables.com/json-api/showInstructableModel?urlString=${path}`)

  if (result.ok){
    return result.json()
  }
  
  if (res.status === 404) {
    return null
  }
}
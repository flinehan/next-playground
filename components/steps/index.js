
export default function Steps({steps, children}) {
  return (
    <div>
      {
         steps.map((step, index) => {
            return children(step, index)
          })
        }
    </div>
  )
}
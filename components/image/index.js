export default function Image({ file }) {
  const { downloadUrl } = file
  return (
    <img className="responsive-img media__image" src={downloadUrl}
    />
  )
}
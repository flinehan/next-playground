export default function Image({ file }) {
  const { downloadUrl } = file
  return (
    <img src={downloadUrl}
    />
  )
}
export default function Video({ file }) {
  return (
    <div className="video-wrapper media__video"
      dangerouslySetInnerHTML={{
        __html: file.embedHtmlCode
      }} />
  )
}
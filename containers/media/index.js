import Video from '../../components/video'
import Image from '../../components/image'

export const EMBED_TYPE = { video: 'VIDEO' }

export const isVideo = function isVideo(type) {
  return type === EMBED_TYPE.video
}

// todo: add logic around only rendering 1 large image 3 smaller images
// todo: add logic for "show more images"
export default function MediaContainer({ files }) {
  return (
    <div>
      {
        files.map((file, index) => {
          const { embedType, id } = file

          if (isVideo(embedType)) {
            return (
              <Video file={file} key={`${id}-${index}`} />
            )
          }

          return <Image file={file} key={`${id}-${index}`} />
        })
      }
    </div>
  )
}
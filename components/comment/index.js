
export default function Comment({ comment }) {

  const { avatarDownload, body, publishDate } = comment

  return (
    <div className="comment-wrap">
      <div className="photo">
        <div className="avatar" style={{ backgroundImage: `url(${avatarDownload})` }} />
      </div>
      <div className="comment-block">
        <p className="comment-text" dangerouslySetInnerHTML={{
          __html: body
        }} />
        <div className="bottom-comment">
          <div className="comment-date">{publishDate}</div>
          <ul className="comment-actions">
            <li className="complain">Complain</li>
            <li className="reply">Reply</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

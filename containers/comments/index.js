import Comment from '../../components/comment'

export default function CommentsContainer({ comments }) {

  return (
    <div className="comments">
      {comments.map((comment, index) => {
        return <Comment comment={comment} key={`comment-${index}`} />
      })}
    </div>
  )
}

export default function header({author, title}) {

  const {screenName} = author
  return (
    <header className="article__header">
      <h1 className="header__title">{title}</h1>
      <div>By {screenName}</div>
    </header>
  )
}
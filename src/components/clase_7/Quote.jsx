





const Quote = ({quote}) => {

    const {text, author} = quote;

  return (
    <div className="card">
        <blockquote cite='https://api.breakingbadquotes.xyz/v1/quotes'>
            "{text}"
        </blockquote>
        <strong>- {author}</strong>
    </div>
  )
}

export default Quote
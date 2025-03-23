import Post from "../Post";


const Article = () => { 

  return (
    <section className="container">
      <h2>Article.jsx</h2>

      <div className="container-posts mt-5">
      <Post />
      <Post />
      <Post />

      </div>
    </section>
  )
}

export default Article;

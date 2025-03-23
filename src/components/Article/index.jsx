import Post from "../Post";


const Article = () => {

  return (
    <section className="container">
      <h2>Article.jsx</h2>

      <div className="container-posts mt-5">
        <Post subtitle="Tecnologia" title="O guia definitvo do Blog" >
          1Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum,
          llum fugit doloribus optio quas, voluptate tenetur saepe
          ipsa quod error debitis aliquid nulla facere omnis
          exercitationem quibusdam magni. Cum.
        </Post>
        <Post subtitle="Fotografia" title="Quais as melhores câmeras para 2025" >
          2Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum,
          llum fugit doloribus optio quas, voluptate tenetur saepe
          ipsa quod error debitis aliquid nulla facere omnis
          exercitationem quibusdam magni. Cum.
        </Post>
        <Post subtitle="Cinema" title="Os 10 filmes com maior bilheteria" >
          3Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum,
          llum fugit doloribus optio quas, voluptate tenetur saepe
          ipsa quod error debitis aliquid nulla facere omnis
          exercitationem quibusdam magni. Cum.
        </Post>
      </div>
    </section>
  )
}

export default Article;

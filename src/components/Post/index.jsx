
const Post = () => {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>Tecnologia</h5>
      <h3>O guia definitvo do Blog</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum,
        llum fugit doloribus optio quas, voluptate tenetur saepe
        ipsa quod error debitis aliquid nulla facere omnis
        exercitationem quibusdam magni. Cum.
      </p>
      <div className="flex pt-2">
        <div className="img-profile "></div>
        <div className="description-profile ml-2">
          <h6 className="color-blue">Fulano de tal</h6>
          <p>Mac, 23, 2025 - 8 min read</p>
        </div>
      </div>
    </div>
  )
}

export default Post;
import api from "../../services/api";
import Post from "../../components/Post";
import { useState, useEffect } from "react";

const Main = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => { 
    api.get("/posts")
    .then((response) => {
      setData(response.data);
    })
  }, []);


  return (
    <>
      <section className="container">
        <h2 className="mt-3">Artigos</h2>

        <div className="mt-5 container-posts">
          {
            data.map((post, index) => {
              return (
                <div key={index}>
                  <Post
                    subtitle={post.category}
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    >
                    {post.resume}
                  </Post>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  )
};

export default Main;

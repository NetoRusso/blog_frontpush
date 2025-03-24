import api from "../../services/api";
import Post from "../../components/Post";
import { useState, useEffect } from "react";

const Main = () => {

  const [data, setData] = useState([]);


  const handleAxios = async () => {
    try {
      const response = await api.get("/posts");
      setData(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { }, [data]);

  return (
    <>
      <section className="container">
        <h2>Main.jsx</h2>
        <button onClick={handleAxios} >Fazer Requisição</button>
        <div className="mt-5 container-posts">
          {
            data.map((post, index) => {
              return (
                <>
                  <Post
                    key={index}
                    subtitle={post.category}
                    title={post.title}
                    date={post.date}
                    author={post.author}
                    >
                    {post.description}
                  </Post>
                </>
              )
            })
          }
        </div>
      </section>
    </>
  )
};

export default Main;

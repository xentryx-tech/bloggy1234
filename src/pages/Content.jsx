import { useEffect, useState } from "react"

export default function Content({ post, age }) {

  const Content = () => {

    // https://jsonplaceholder.typicode.com/posts
    // send a request to an api to get posts data

    const [posts, setPosts] = useState([]);

    // showing loader
    const [loading, setLoading] = useState(true);

    // show error message
    const [error, setError] = useState(false);

    useEffect(function () {
      sendRequestToApi();


    }, [])

    function sendRequestToApi() {
      const url = "https://jsonplaceholder.typicode.com/posts";

      fetch(url)
        .then(function (response) {
          return response.json();
        })

        .then(function (data) {
          setPosts(data)
          setLoading(false)
          setError(false)


        })

        .catch(function (error) {
          setPosts([])
          setLoading(false)
          setError(true)


        })


    }

  }

  return (


    <div className="container px-4 px-lg-2">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10">

          {
            loading && <p> loading Posts from server ...</p>

          }

          {

            !loading && posts.length > 0 && posts.map((po) => {

              return (
                <> {/* Post preview*/}
                  <div className="post-preview">
                    <a href="post.html">
                      <h2 className="post-title">{po.title}</h2>
                      <h3 className="post-subtitle">
                        Many say exploration is part of our destiny, but it’s actually our
                        duty to future generations.
                      </h3>
                    </a>
                    <p className="post-meta">
                      Posted by
                      <a href="#!">Start Bootstrap</a>
                      on July 8, 2023
                    </p>
                  </div>
                  {/* Divider*/}
                  <hr className="my-4" /></>

              )
            })
          }


          {/* Pager*/}
          <div className="d-flex justify-content-end mb-4">
            <a className="btn btn-danger text-uppercase" href="#!">
              Older Posts →
            </a>
          </div>
        </div>
      </div>
    </div>

  )

}
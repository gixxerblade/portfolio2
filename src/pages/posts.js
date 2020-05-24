import React from "react"
import Layout from "../components/layout"
import useFetch from "../hooks/useFetch"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"
import { Link } from "gatsby"
//import "../assets/blog.css"
import Spinner from "../components/spinner"
const Posts = ({ location }) => {
  const query = location.pathname
  const id = query.replace(/\/posts\//, "")
  const { data, loading } = useFetch(`https://dev.to/api/articles/${id}`, {})
  //const name = data.user.name
  const md = data.body_markdown
  //console.log(theme)
  return (
    <>
      {loading ? (
        <>
          {" "}
          <BlogSpinner />
        </>
      ) : (
        <Layout>
          <div className="container">
            <img
              alt="post"
              className="postimage"
              src={data.cover_image}
              width="50%"
            />
            {/* <p>Author: {name}</p> */}
            <p>Date: {data.published_at.split("T")[0]}</p>
            <section>
              <ReactMarkdown source={md} />
            </section>
            <LNK to="/blog">&larr; Go back </LNK>
          </div>
        </Layout>
      )}
    </>
  )
}
export default Posts

const BlogSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
const LNK = styled(Link)`
  margin: 0;
  color: ${props => props.theme.colors.orange};
  &:hover {
    color: ${props => props.theme.colors.green};
  }
`

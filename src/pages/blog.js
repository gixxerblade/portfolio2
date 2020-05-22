import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
//import "../assets/blog.css"

// Blog Listings
const Blog = ({ data, location }) => {
  const posts = data.allDevArticle.nodes
  const stockImage =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--EXetaNc9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--7VrAA2ln--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/qmb5wkoeywj06pd7p8ku.png"
  return (
    <Layout>
      <div id="blog-container">
      <StyH1>Articles</StyH1>

        {posts.map(node => {
          const title = node.title || node.slug
          return (
            <div className="post-card" key={node.slug}>
              {node.cover_image ? (
                <Image
                  alt="cover"
                  className="cover_image"
                  src={node.cover_image}
                />
              ) : (
                <Image
                  alt="default cover"
                  className="cover_image"
                  src={stockImage}
                />
              )}
              <H1 className="blog_title">{title}</H1>
              <P className="date">{node.published_at}</P>
              <P className="date">By {node.user.name}</P>
              <P
                className="blog_description"
                dangerouslySetInnerHTML={{
                  __html: node.description,
                }}
              />
              <LNK className="readmore" to={`posts/${node.id}`}>
                Read more...
              </LNK>
              <hr />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog

//Styled components:
const LNK = styled(Link)`
  color: ${({ theme: { color } }) => color.orange};
  margin: 0;
  &:hover{
    color: ${({ theme: { color } }) => color.blue};
 
  }
`
const Image = styled.img`
  width: 30%;
  margin: 0;
`
const H1 = styled.h1`
  margin: 0;
  text-align: left;
  font-size: 1.5rem;
  max-width: 100%;
  font-family: "Roboto";
  color: ${({ theme: { color } }) => color.black};
`
const P = styled.h3`
  margin: 0 0 0.5rem;
  text-align: left;
  font-size: 0.8rem;
  font-family: "Roboto";
  color: ${({ theme: { color } }) => color.blue};
`
const StyH1 = styled.h1`
  margin: 0 0 1rem 0;
  text-align: center;
  font-size: 2rem;
  max-width: 100%;
  font-family: "Roboto";
  color: ${({ theme: { color } }) => color.blue};
  text-decoration: underline overline ${({ theme: { color } }) => color.orange};
`

export const pageQuery = graphql`
  query ArticleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allDevArticle {
      nodes {
        id
        cover_image
        title
        slug
        published_at(formatString: "MMMM DD, YYYY")
        description
        positive_reactions_count
        comments_count
        user {
          name
        }
      }
    }
  }
`

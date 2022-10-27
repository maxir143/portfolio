import { connect } from "frontity"

const AboutMe = ({ state , actions, libraries, data}) => {
  const Html2React = libraries.html2react.Component;
  const post = state.source[data.type][data.id]
  return(
    <div>
      <title>{post.title.rendered}</title>
      <h1>{post.title.rendered}</h1>
      <h3><Html2React html={post.content.rendered} /></h3>
    </div> 
  )

}


export default connect(AboutMe)
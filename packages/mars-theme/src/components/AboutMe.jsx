import { connect } from "frontity"

const AboutMe = ({ state , actions, libraries, data}) => {
  const post = state.source[data.type][data.id]
  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  )
}

export default connect(AboutMe)
import { connect} from "frontity"

const ListSet = ({ state , actions, libraries, data}) => {
  const post = state.source[data.type][data.id]
  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  )
}

export default connect(ListSet)
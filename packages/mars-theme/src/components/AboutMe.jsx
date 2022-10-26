export default function AboutMe ({state}) {
  const data = state.source.get("/about-me")
  
  return(
    data.isReady ? <div> {state.source[data.type][data.id].title.rendered} </div> : <div> Hola </div> 
  )
}
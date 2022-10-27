import { connect } from "frontity";
import AboutMe from "./AboutMe";
import Loading from "./loading";

const Portfolio = ({ state }) => {
  const aboutMeData = state.source.get("/about-me")
  return(
    aboutMeData.isReady  ? <AboutMe data={aboutMeData}/> :  <Loading/>
  )
}

export default connect(Portfolio)
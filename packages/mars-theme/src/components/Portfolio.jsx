import { connect, styled } from 'frontity'
import AboutMe from './AboutMe';
import ListSet from './ListSet';
import Loading from './loading';

const Portfolio = ({ state }) => {
  const aboutMeData = state.source.get('/about-me')
  const softSkillsData = state.source.get('/soft-skills')
  const skillsData = state.source.get('/skills')
  const toolsSetData = state.source.get('/tools-set')
  return(
    <PortfolioDiv>
      {aboutMeData.isReady  ? <AboutMe data={aboutMeData}/> :  <Loading/>}
      <div>
        {skillsData.isReady  ? <ListSet data={skillsData}/> :  <Loading/>}
        {toolsSetData.isReady  ? <ListSet data={toolsSetData}/> :  <Loading/>}
      </div>
      {softSkillsData.isReady  ? <ListSet data={softSkillsData}/> :  <Loading/>}
    </PortfolioDiv>
  )
}

const PortfolioDiv = styled.div`
    h2 { 
      font-size: 28px;
    }

    p {
      font-size: 20px;
    }

    ul {

    }

    li {
      font-size: 18px;
    }

    margin:auto;
    width: 80%;
    text-align: left;
`;

export default connect(Portfolio)
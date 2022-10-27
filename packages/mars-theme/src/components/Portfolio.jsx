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
      <br />
      <SkillsDiv>
        {skillsData.isReady  ? <ListSet data={skillsData}/> :  <Loading/>}
        {softSkillsData.isReady  ? <ListSet data={softSkillsData}/> :  <Loading/>}
      </SkillsDiv>
      {toolsSetData.isReady  ? <ListSet data={toolsSetData}/> :  <Loading/>}
    </PortfolioDiv>
  )
}

const SkillsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const PortfolioDiv = styled.div`
    h2 { 
      font-size: 28px;
      margin-top: 10px;
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
    width: 95%;
    max-width: 800px;
    text-align: left;
`;

export default connect(Portfolio)
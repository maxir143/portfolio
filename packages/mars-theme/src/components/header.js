import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title style={{marginRight: '30px'}}>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
      </Container>
      <MobileMenu />
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  font-size: 32px;
`;

const Description = styled.h4`
  margin: 0;
  font-size: 22px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

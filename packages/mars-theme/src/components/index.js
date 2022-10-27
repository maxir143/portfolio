import { Global, css, connect, styled, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import Header from './header';
import List from './list';
import Post from './post';
import Loading from './loading';
import Title from './title';
import PageError from './page-error';
import Portfolio from './Portfolio';
import {useEffect} from 'react'

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link)

  useEffect(() => {
    if (data.isHome) {
      actions.source.fetch('/about-me')
      actions.source.fetch('/soft-skills')
      actions.source.fetch('/skills')
      actions.source.fetch('/tools-set')
    }
  }, [state.router.link])

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name='description' content={state.frontity.description} />
        <html lang='en' />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Portfolio when={data.isHome} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #5837D0;
  color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;

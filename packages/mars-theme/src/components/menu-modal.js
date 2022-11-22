import { styled, connect, useConnect } from "frontity";
import Link from "./link";

/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ ...props }) => {
  const { state } = useConnect();
  const { menu } = state.theme;
  const isThereLinks = menu?.length > 0;

  return (
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay />}
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link.replaceAll('/', '') === link.replaceAll('/', '') ? "page" : undefined}
              className={state.router.link.replaceAll('/', '') === link.replaceAll('/', '') ? "current-page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </div>
  );
};

const MenuOverlay = styled.div`
  color: white;
  background: linear-gradient(180deg, #1CB5E0 25%, #000851 100%);
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: relative;
  .current-page {
    color: black !important;
  }
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
`;

export default connect(MenuModal, { injectProps: false });

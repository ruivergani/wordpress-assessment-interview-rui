import { NavLink } from 'react-router-dom';
import { Navigation } from '../Nav/index';
import { HeaderComponent, HeaderContainer, HeaderNavigation, SearchContainer, SearchInput,SearchIcon,  HeaderCTA, ButtonCTA, HeaderButtonsComponent, HeaderLogo} from './styles';
import { EnvelopeSimple, MagnifyingGlass } from 'phosphor-react';

// Images
import logoLawnStarter from '../../../../images/logos/lawnstarter.svg';

const Header = () => {
  return (
    <HeaderComponent>
      <HeaderContainer>
        <HeaderLogo>
          <NavLink to='/'>
            <img src={logoLawnStarter} alt="Logo Lawn Starter" title="Logo Lawn Starter"/>
          </NavLink>
        </HeaderLogo>
        <HeaderNavigation>
          <Navigation/>
        </HeaderNavigation>
        <HeaderButtonsComponent>
          <SearchContainer>
            <SearchInput
              placeholder="Search..."
              disabled
            />
            <SearchIcon type="submit">
              <MagnifyingGlass size={18}/>
            </SearchIcon>
          </SearchContainer>
          <HeaderCTA>
            <ButtonCTA>
              <EnvelopeSimple size={18} weight="duotone"/>
              <p>Get a Quote</p>
            </ButtonCTA>
          </HeaderCTA>
        </HeaderButtonsComponent>
        <div>

        </div>
      </HeaderContainer>
    </HeaderComponent>
  );
};

export default Header;

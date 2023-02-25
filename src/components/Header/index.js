import {Link} from 'react-router-dom'
import {HeaderContainer, Logo} from './styledComponents'

const Header = () => (
  <Link to="/">
    <HeaderContainer>
      <Logo
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
      />
    </HeaderContainer>
  </Link>
)

export default Header

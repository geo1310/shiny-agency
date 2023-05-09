import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const Nav = styled.nav`
  margin-top: 30px;
  margin-bottom: 50px;
`

function Header() {
  return (
    <Nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Questionnaire
      </StyledLink>
      <StyledLink to="/freelances">Profils</StyledLink>
    </Nav>
  )
}

export default Header

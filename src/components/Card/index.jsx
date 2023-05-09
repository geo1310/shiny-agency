import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/defaultPicture.jpg'
import colors from '../../utils/styles/colors'


const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
    margin-bottom:20px;
`
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid grey;
    box-shadow: 5px 5px 10px;
    margin-bottom: 20px;
`
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 250px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
        <CardLabel>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <span>{title}</span>
    </CardWrapper>
)
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
Card.defaultProps = {
  title: '',
  label: '',
  picture: DefaultPicture,
}

export default Card

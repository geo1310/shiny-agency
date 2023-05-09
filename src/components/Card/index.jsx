import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/defaultPicture.jpg'

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

function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </div>
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

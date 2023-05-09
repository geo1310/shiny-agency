import Card from '../../components/Card'
import styled from 'styled-components'


const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`


function Freelances() {
  const freelanceProfiles = [
    {
      name: 'Jane Doe',
      jobTitle: 'Devops',
    },
    {
      name: 'John Doe',
      jobTitle: 'Developpeur frontend',
    },
    {
      name: 'Jeanne Biche',
      jobTitle: 'Développeuse Fullstack',
    },
  ]

  return (
    
      <div>
          <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
          {freelanceProfiles.map((profile, index) => (
              <Card
                  key={`${profile.name}-${index}`}
                  label={profile.jobTitle}
                  title={profile.name}
              />
          ))}
      </div>
  )

}

export default Freelances

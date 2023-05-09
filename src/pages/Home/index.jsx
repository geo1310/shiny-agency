import styled from 'styled-components'
import { useState } from 'react'

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Balloon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: red;
  transform: scale(${({ size }) => size});
  cursor: pointer;
`

function Home() {
  const [size, setSize] = useState(0.5)
  return (
    <HomeContainer>
      <h1 >Page d'accueil 🏡</h1>
      <Balloon size={size} onClick={() => setSize(size + 0.1)} />
    </HomeContainer>
  )
}

export default Home

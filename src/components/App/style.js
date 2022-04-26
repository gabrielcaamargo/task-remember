import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  background-color: red;
  width: 70vw;
  height: 100vh;
  margin: 0 auto;

  @media(max-width: 600px){
    width: 100vw;
  } 
`
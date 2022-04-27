import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  margin: 1rem auto;
  

  @media(max-width: 600px){
    width: 100vw;
  } 

  @media(max-width: 768px){
    width: 100vw;
  }

  @media(max-width: 1024px){
    width: 90vw;
  }
`
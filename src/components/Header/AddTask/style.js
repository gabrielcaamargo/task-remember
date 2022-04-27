import styled from "styled-components";

export const AddTaskButton = styled.button`
  border-radius: 50%;
  padding: .8rem;
  border: none;
  margin-bottom: 5px;
  font-size: 20px;
  transition: .2s ease-in-out;

  svg{
    display: flex;
    align-items: center;
    color: #67666F;
  }

  :hover{
    background-color: #272635
  }
`

export const AddTaskText = styled.p`
  font-weight: 700;
`
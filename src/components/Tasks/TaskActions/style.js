import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;

  svg{
    font-size: 22px;
    margin-left: 10px;
    transition: .3s;

  }
  
  .task-done:hover{
    color: green;
  }

  .remove-task:hover{
    color: red;
  }

`
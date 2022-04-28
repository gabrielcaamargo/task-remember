import React from 'react';

import { Container } from './style';

import Header from '../Header';
import Tasks from '../Tasks';

export default function App(){

  return(
    <Container>
      <Header />
      <Tasks 
        title="Task title"
        subtitle="Task subtitle"
      />
    </Container>
  )
}